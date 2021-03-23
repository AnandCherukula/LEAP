import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  sideMenuActive = false;

  searchControl = new FormControl();

  options: string[] = [
    'Healthcare',
    'Manufacturing',
    'Retail',
    'Banking',
    'Fraud Prevention',
    'Customer Analytics',
    'Demand Forecasting',
    'Insurance',
    'Application Score Card',
    'Market Mix Modeling',
    'Supply Chain',
    'Human Resources',
  ];
  filteredOptions: Observable<string[]>;
  activeCss = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    if (filterValue !== '') {
      return this.options.filter((option) =>
        option.toLowerCase().includes(filterValue)
      );
    }
  }

  logoutUser(): void {
    this.router.navigate(['login']);
  }
  scrollDown() {
    // this.activeCss = true;
    window.scrollTo(0, document.body.scrollHeight);
  }
}
