import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  image: string = "";
  name: string = "";

  @Input()
  user: UserComponent | undefined;

  constructor() { 
  }

  ngOnInit(): void {
  }

  setImage(image: string): void {
    this.image = image;
  }

  setName(name: string): void {
    this.name = name;
  }

  createUser(image: string, name: string): void {
    this.setImage(image);
    this.setName(name);
  }

}
