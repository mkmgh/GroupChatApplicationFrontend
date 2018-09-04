import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { AppService } from './../../app.service';
import { Router } from '@angular/router';

//import for toastr
import { ToastrService } from 'ngx-toastr';
//import for Routing
 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public firstName: any;
  public lastName: any;
  public mobileNumber: any;
  public email: any;
  public password: any;

  constructor(  
    public appService: AppService,
    public router: Router,
    private toastr: ToastrService
  ){

  } 

  ngOnInit() {
  }

  public goToSignIn: any = () => {

    this.router.navigate(['/']);

  } // end goToSignIn

  public signupFunction: any = () => {

    if (!this.firstName) {
      this.toastr.warning('enter first name')
  
    } else if (!this.lastName) {
      this.toastr.warning('enter last name')

    } else if (!this.mobileNumber) {
      this.toastr.warning('enter mobile')

    } else if (!this.email) {
      this.toastr.warning('enter email')

    } else if (!this.password) {
      this.toastr.warning('enter password')
     
    } else {

      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        mobileNumber: this.mobileNumber,
        email: this.email,
        password: this.password,
      }

      console.log(data);

      this.appService.signupFunction(data)
        .subscribe((apiResponse) => {

          console.log(apiResponse);

          if (apiResponse.status === 200) {

            this.toastr.success('Signed up','Successful..!');

            setTimeout(() => {

              this.goToSignIn();

            }, 2000);

          } else {

            this.toastr.error(apiResponse.message,'error occured');

          }

        }, (err) => {

          this.toastr.error('Try Again','Error!');

        });

    } // end condition

  } // end signupFunction

}
