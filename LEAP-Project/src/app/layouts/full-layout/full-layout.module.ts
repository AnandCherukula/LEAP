import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { FullLayoutComponent } from './full-layout.component';
import { LoginComponent } from 'src/app/pages/login/login.component';

//router module
import { RouterModule } from '@angular/router';

//material modules
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { PageNotFoundComponent } from 'src/app/pages/page-not-found/page-not-found.component';
@NgModule({
  declarations: [FullLayoutComponent, LoginComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    RouterModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatCardModule,
  ],
})
export class FullLayoutModule {}
