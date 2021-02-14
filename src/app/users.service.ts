import { Injectable, Input } from '@angular/core';
import { UserComponent } from './user/user.component'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: UserComponent[] = [];

  constructor() {
    var user1: UserComponent = new UserComponent;
    user1.createUser(
      'https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=6&m=1007763808&s=612x612&w=0&h=Js1VDBulbaNw_CF7fghP_nhUPCC-DQTqb7Wym1CdTOI=',
      'John Casper'
      );
    this.addUser(user1);
    var user2: UserComponent = new UserComponent;
    user2.createUser(
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      'Jane Malkovich'
      );
    this.addUser(user2);
    var user3: UserComponent = new UserComponent;
    user3.createUser(
      'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80',
      'Ethan Hoover'
      );
    this.addUser(user3);
    var user4: UserComponent = new UserComponent;
    user4.createUser(
      'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1936&q=80',
      'Jenna Smith'
      );
    this.addUser(user4);
   }

  ngOnInit() {
  }

  addUser(user: UserComponent): void {
    this.users.push(user);
  }

  getUsers(): UserComponent[] {
    return this.users;
  }

}
