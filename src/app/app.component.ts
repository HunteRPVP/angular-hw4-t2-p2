import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-hw4-t2-p2';

  searchStr: string = '';

  userService: UsersService = new UsersService;
  users: UserComponent[] = [new UserComponent];

  ngOnInit() {
    this.users = this.userService.getUsers();
    console.log(this.userService.getUsers()[0].name);
  }
}
