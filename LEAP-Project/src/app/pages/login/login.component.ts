import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { MatTabGroup } from '@angular/material/tabs';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild(MatTabGroup, { static: true }) tabGroup: MatTabGroup;

  // signupForm: FormGroup;
  // signinForm: FormGroup;
  // passwordVal: any = [
  //   Validators.required,
  //   Validators.minLength(8),
  //   Validators.maxLength(20),
  //   Validators.pattern(
  //     /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?=.*?^[A-Za-z0-9!<>?/{}\|+-_=@#%$^*()]*$)/
  //   ),
  // ];
  // usernameVal: any = [
  //   Validators.required,
  //   Validators.minLength(3),
  //   Validators.maxLength(20),
  //   // Validators.pattern(/^[A-Za-z0-9]*$/)
  // ];
  // mobileVal: any = [
  //   Validators.required,
  //   Validators.minLength(10),
  //   Validators.maxLength(10),
  //   Validators.pattern(/^[6-9][0-9]{9}$/),
  // ];
  // emailVal: any = [
  //   Validators.required,
  //   Validators.pattern(
  //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   ),
  // ];

  isSignVisible = false;
  constructor(public router: Router) {}
  ngOnInit(): void {}

  isRightPanelActive() {
    this.isSignVisible = !this.isSignVisible;
  }

  // ngOnInit(): void {
  //   this.signupForm = this.formBuilder.group(
  //     {
  //       first_name: new FormControl('', this.usernameVal),
  //       last_name: new FormControl('', this.usernameVal),
  //       email: new FormControl('', this.emailVal),
  //       organization: new FormControl('', [Validators.required]),
  //       mobile: new FormControl('', this.mobileVal),
  //       password: new FormControl('', this.passwordVal),
  //       // area_of_interest: new FormControl('Area of interest', [Validators.required]),
  //       role: new FormControl('guest', [Validators.required]),
  //       confirmPassword: new FormControl('', this.passwordVal),
  //     },
  //     { validator: this.passwordMatchValidator }
  //   );
  //   this.signinForm = this.formBuilder.group({
  //     email: new FormControl('', this.emailVal),
  //     password: new FormControl('', [Validators.required]),
  //   });
  // }

  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);

  // matcher = new MyErrorStateMatcher();

  // passwordMatchValidator(frm: FormGroup) {
  //   return frm.controls['password'].value ===
  //     frm.controls['confirmPassword'].value
  //     ? null
  //     : { mismatch: true };
  // }

  // validateAllFormFields(formGroup: FormGroup) {
  //   Object.keys(formGroup.controls).forEach((field) => {
  //     const control = formGroup.get(field);
  //     if (control instanceof FormControl) {
  //       control.markAsTouched({ onlySelf: true });
  //     } else if (control instanceof FormGroup) {
  //       this.validateAllFormFields(control);
  //     }
  //   });
  // }

  // get g() {
  //   return this.signinForm.controls;
  // }

  // get f() {
  //   return this.signupForm.controls;
  // }

  doLogin(): void {
    this.router.navigate(['home']);
    // if (this.signinForm.valid) {
    //   const loginFormData = this.signinForm.getRawValue();
    //   this.apiService.userLogin(loginFormData).subscribe((response: API_RESPONSE) => {
    //     if (response.message === 'success') {
    //       console.log(response.data);
    //       for (const item in this.dataService.LoggedInUser) {
    //         this.dataService.LoggedInUser[item] = response.data[item];
    //       }
    //       this.dataService.saveDataToLocalStorage();
    //       this.signinForm.reset();
    //       this.router.navigate(['homepage']);
    //     } else {
    //       alert(response.message || 'Internal Error');
    //     }
    //   });
    // } else {
    //   this.validateAllFormFields(this.signinForm);
    // }
  }

  // doSignup(): void {
  //   //   if (this.signupForm.valid) {
  //   //     const signupFormData = this.signupForm.getRawValue();
  //   //     signupFormData['created_by']= 'self';
  //   //     signupFormData['modified_by']= '';
  //   //     signupFormData['area_of_interest']= '';
  //   //     this.apiService.newUserSignUp(signupFormData).subscribe((response: API_RESPONSE) => {
  //   //       if (response.message === 'success') {
  //   //         this.signupForm.reset();
  //   //         alert('User created successfully...');
  //   //         this.tabGroup.selectedIndex = 0;
  //   //       } else {
  //   //         alert(response.message || 'Internal Error');
  //   //       }
  //   //     });
  //   //   } else {
  //   //     this.validateAllFormFields(this.signupForm);
  //   //   }
  // }
}
