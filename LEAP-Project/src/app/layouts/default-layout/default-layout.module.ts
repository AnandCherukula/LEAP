import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DefaultLayoutComponent } from './default-layout.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewDemoComponent } from 'src/app/pages/view-demo/view-demo.component';
import { WhyLeapComponent } from 'src/app/pages/why-leap/why-leap.component';
import { SolutionsComponent } from 'src/app/pages/solutions/solutions.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    HomeComponent,
    ContactComponent,
    ViewDemoComponent,
    WhyLeapComponent,
    SolutionsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class DefaultLayoutModule {}
