import { Component, OnInit,Input,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { GetService } from "../get.service";
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl, FormGroup } from '@angular/forms';
import * as XLSX from 'xlsx'; 
@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {

  time = new Date();

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  
  fileName= 'ExcelSheet.xlsx';  

  displayedColumns: string[] = ['SNO', 'DATE', 'NAME', 'START_TIME' , "TIME" , "ENTRY" , "TOTAL_HOUR"];
  dataSource = new MatTableDataSource<getData>();

  public Filter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  };
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @Input() deviceXs!:boolean
  interval:any;
  constructor(private getservice:GetService) { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.refreshData();
    }, 1000);
    setInterval(()=>{
      this.time=new Date();
    }, 1000);
  }
  refreshData(){
    this.getservice.getreq()
    .subscribe(data => {this.dataSource.data= data as getData[];
    // console.log(this.dataSource)
 });
  }
  
  ngAfterContentInit(): void {
    this.dataSource.sort = this.sort;
    const sortState: Sort = { active: 'ID', direction: 'desc' };
    this.sort.active = sortState.active;
    this.sort.direction = sortState.direction;
    this.sort.sortChange.emit(sortState);
    this.dataSource.paginator = this.paginator;
  }

  exportexcel(): void 
  {
     /* table id is passed over here */   
     let element = document.getElementById('excel-table'); 
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     /* save to file */
     XLSX.writeFile(wb, this.fileName);
    
  }



}
export  interface getData{
  SNO: number;
  NAME: string;
  ROLL: string;
  RFID: string;
  TIME:string;
  ENTRY:string;
}