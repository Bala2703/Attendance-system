import { Component, Input, OnInit,ViewChild,AfterContentInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GetService } from "../get.service";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from "@angular/router";
import { FormGroup, FormControl } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  dataSource :any;
    valueend:Date=new Date();
  value: Date = new Date();
  checkDate!: Date;

@Input() deviceXs!:boolean;
  constructor(private http:HttpClient,private getService:GetService 
    ,private route:Router,public dialog: MatDialog) { }


  openDialog():void {
   const dialogRef =  this.dialog.open(DialogElementsExampleDialog);
  }
  
enteredValue:any;
newpost:any;
}




/*</////  //////// FOR DILOG BOX ////////    ///////....*/



@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

dataSource:any;
value = '';
  // dialogRef: any;
  enteredValue:any;
  newpost:any
 

  stateForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });


  stateGroups: StateGroup[] = [{
    letter: 'A',
    names: ['AADARSH K', 'ABISHEK KUMAR K', 'ADITIYA P', 'AFRITH MOHIDEEN R']
  },
  {
    letter: 'B',
    names: ['BABUSHANKAR M', 'BALAKUMAR M', 'BALAVIGNESH S','BARANI KUMAR K']
  }, 
  
  {
    letter: 'C',
    names: ['CIBI JOSHUA S']
  }, {
    letter: 'D',
    names: ['DASS PRABU KI','DEVAPRASATH K']
  },  {
    letter: 'G',
    names: ['GOKULAKRISHNAN D P','GUHAN B']
  }, {
    letter: 'I',
    names: ['INBARAJ M']
  }, {
    letter: 'K',
    names: ['KABIRAJ K']
  },  {
    letter: 'P',
    names: ['PRANAAPH R','PRAVEEN MUTHUKUMAR G']
  }, {
    letter: 'R',
    names: ['ROCK RICHARD S']
  }, {
    letter: 'S',
    names: ['SAKTHIYAN T', '']
  }, {
    letter: 'T',
    names: ['TAMILVENTHAN B R']
  }, {
    letter: 'V',
    names: ['VISHNU M', ]
  }];

  stateGroupOptions!: Observable<StateGroup[]>;

  constructor(private http:HttpClient,private getService:GetService 
    ,private route:Router,public dialog: MatDialog,private _formBuilder: FormBuilder) { }

    ngOnInit(){
      this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
    }

    private _filterGroup(value: string): StateGroup[] {
      if (value) {
        return this.stateGroups
          .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
          .filter(group => group.names.length > 0);
      }
  
      return this.stateGroups;
    }

  onSelect(start:Date,end:Date){
    const secondsSinceEpochstart = Math.round(start.getTime() / 1000)
    const secondsSinceEpochend = Math.round(end.getTime() / 1000)
    console.log(start);
    console.log(end);
  console.log(secondsSinceEpochstart);
  console.log(secondsSinceEpochend);

// var X:number=`${secondsSinceEpochstart}`

  // var x: number=secondsSinceEpochstart
  // var n: string=x.toString()
  // console.log(x)
  this.http.get('http://localhost:3000/hour',{params:{NAME:this.enteredValue ,
  date:`${secondsSinceEpochstart}`,end:`${secondsSinceEpochend}`}} )
  .subscribe(data => {
    console.log(data);
    this.newpost=data
  })
  
  };

  

get(){
}

}
export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};