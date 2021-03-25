import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-demo',
  templateUrl: './view-demo.component.html',
  styleUrls: ['./view-demo.component.scss'],
})
export class ViewDemoComponent implements OnInit {
  constructor() {}
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  value = '';
  ngOnInit(): void {}
}
