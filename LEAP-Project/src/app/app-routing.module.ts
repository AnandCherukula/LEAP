import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { ViewDemoComponent } from './pages/view-demo/view-demo.component';
import { WhyLeapComponent } from './pages/why-leap/why-leap.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },

      {
        path: 'whyLeap',
        component: WhyLeapComponent,
      },
      {
        path: 'solutions',
        component: SolutionsComponent,
      },
      {
        path: 'viewDemo',
        component: ViewDemoComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    redirectTo: '',
    pathMatch: 'full',
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
