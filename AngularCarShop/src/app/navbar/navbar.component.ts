import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MENU } from '../menuItems';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menu = MENU;
  random = 'random';

  constructor() {  }

  ngOnInit() {
  }

}
