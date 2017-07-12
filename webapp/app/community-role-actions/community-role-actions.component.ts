import { Component, OnInit, Input, Pipe, PipeTransform } from '@angular/core';
import { MdDialog } from '@angular/material';
import { CommunityToolActionsComponent } from '../community-tool-actions/community-tool-actions.component';
import { CommunityRoleManagementComponent } from '../community-role-management/community-role-management.component';
import { RoleServices } from '../community-role-management/community-role-management.service';

@Component({
  selector: 'calvin-community-role-actions',
  templateUrl: './community-role-actions.component.html',
  styleUrls: ['./community-role-actions.component.css'],
})
export class CommunityRoleActionsComponent implements OnInit {


  @Input() dummy;
 //actions=[];
  constructor(public dialog: MdDialog, private role: RoleServices, private action: CommunityRoleManagementComponent) { }
  openDialog(roleName) {
    console.log('dummy data',this.dummy.domain);
    console.log('dummy data',roleName);
    // this.actions=this.dummy.action;
    // console.log('data in actions is ',this.actions);
    const dialog = this.dialog.open(CommunityToolActionsComponent,{
      data: {domain:this.dummy.domain,
      role:roleName}     
    });
    console.log(this.role);
  }
generateArray(obj){
   return Object.keys(obj).map((key)=>{ return obj[key]});
}
  ngOnInit() { }
}

