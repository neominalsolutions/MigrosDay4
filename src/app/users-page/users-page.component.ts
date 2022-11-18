import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {

    this.userService.getUsers().subscribe(res => {
      console.log('res', res);
    });
  }

}
