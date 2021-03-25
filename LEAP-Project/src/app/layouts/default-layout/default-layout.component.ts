import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit {
  isSideNavOpen = false;
  constructor() {}

  ngOnInit(): void {}

  openSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }
}
