import { Component, OnInit } from '@angular/core';
import { MembersService } from './community-members-widget.service';
import { Params, RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';


@Component({
 selector: 'calvin-community-members-widget',
 templateUrl: './community-members-widget.component.html',
 styleUrls: ['./community-members-widget.component.css'],
 providers: [MembersService]
})
export class CommunityMembersWidgetComponent implements OnInit {
 
 members=[];
 constructor(private membersWidget: MembersService,private router: ActivatedRoute) { }
   ngOnInit() {
  
    this.membersWidget.getMember(this.router.snapshot.params['domain']).subscribe(data => {
    this.members = data;
   });
   console.log(this.members,"sasfas");
  }
}
