import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddToolService } from './add-tool.service';
import { MdDialog } from '@angular/material';
@Component({
  selector: 'calvin-add-tool',
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.css'],
  providers: [AddToolService]
})
export class AddToolComponent implements OnInit {


  actions = [];
  events = [];
  toolaction: String;
  toolgrants: String;
  tooleventname: String;
  eventpayload: String;
  eventDesc: String;
  toolid:String;
  toolname:String;
  tooldesc:String;
  actionFlag = 0;
  eventFlag = 0;

  constructor(private addtoolservice: AddToolService,private dialog: MdDialog) { }

  ngOnInit() {

  }

// this function is to add each tool action in array
  AddAction() {
    let obj = {
      name: this.toolaction.toUpperCase(),
      grants: this.toolgrants.toUpperCase()
    };
    this.actions.push(obj);
    this.actionFlag = 1;
    this.toolaction='';
    this.toolgrants='';
  }
 // this function is to reset the action fileds
  enableAction() {
    this.toolaction = '';
    this.toolgrants = '';
    this.actionFlag = 0;
  }
// this function is to remove seleccted action from list
  remAction(actionname) {
    // alert(this.toolaction);

    this.actions = this.actions.filter(item => item.name !== actionname);
    console.log(this.actions);
    if(this.actions.length===0) {
    this.enableAction();
    }
  }

// this function is to add each tool event in arrays
  addEvent() {
    let obj = {
      name: this.tooleventname.toUpperCase(),
      payload: this.eventpayload.toUpperCase(),
      description: this.eventDesc.toUpperCase()
    };
    this.events.push(obj);
    this.eventFlag = 1;
    // alert(this.events);
    this.tooleventname='';
    this.eventDesc='';
    this.eventpayload='';
  }

  // this function is to remove selected event from the list
  remEvent(eventname) {
    alert(this.tooleventname);
    this.events = this.events.filter(item => item.name !==eventname);
    console.log(this.actions);
    if(this.events.length===0) {
    this.enableEvent();
    }
  }

// this function is to reset the event fields
  enableEvent() {
    this.tooleventname = '';
    this.eventpayload = '';
    this.eventDesc = '';
    this.eventFlag = 0;
  }

// this function is to register the tool 
  registerTool(form: NgForm) {
    console.log(form.value);
    let toolobj= {
      toolid:this.toolid.toUpperCase(),
      toolname:this.toolname.toUpperCase(),
      tooldesc:this.tooldesc.toUpperCase(),
      toolAction:this.actions,
      toolEvent: this.events
    };

    // console.log(toolobj);
   
    this.addtoolservice.addTool(toolobj).subscribe(result => {
       console.log('inside add tool response');
      // RESETTING FIELDS after successfully adding tool
       this.events=[];
       this.actions=[];
       this.actionFlag=0;
       this.eventFlag=0;
      // alert('data'+result);
       this.dialog.open(SucessDialog); // opening Dialogue to show success message
    })
     form.reset();
  }
}

@Component({
  selector: 'sucsess-dialog',
  templateUrl: 'success-dialog.html',
})
export class SucessDialog {}

