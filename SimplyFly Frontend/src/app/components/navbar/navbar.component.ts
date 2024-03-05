import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { authRequest } from 'src/app/model/authRequest.model';
import { AuthenticateService } from 'src/app/service/authenticate.service';
import { UpdateProfileComponent } from './update-profile/update-profile/update-profile.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewChecked{
  // AuthRequest: authRequest = {
  //   username: '',
  //   password: '',
  // };
  // token: any;
  // role: any;
  
  username : string | null = this.authService.username;
  
  constructor(private route : Router, private authService : AuthenticateService,private dialog:MatDialog) {}

  ngAfterViewChecked(): void {  
    this.username = localStorage.getItem('username');
    // console.log(this.authService.isLoggedIn);
  } 

  logout() {
    // console.log(localStorage.getItem('username'));
    // // this.token = '';
    // localStorage.clear();
    // localStorage.setItem('username', 'Guest');
    // console.log(localStorage.getItem('username'));

    // this.route.navigate(['/login']);
    // this.username = 'Guest';
    this.authService.logout();
  }

  redirectToDashboard(){
    console.log(localStorage.getItem('role'));

    if(localStorage.getItem('role') === 'Admin'){
      this.route.navigate(['admin']);
    }
    if(localStorage.getItem('role') === 'FlightOwner'){
      this.route.navigate(['flight-owner']);
    }
    if(localStorage.getItem('role') === 'Customer'){
      this.route.navigate(['customer']);
    }
  }

  getLoginStatus(){
    return localStorage.getItem('isLoggedIn');
  }

  updateProfile(){
    var popup=this.dialog.open(UpdateProfileComponent,{
      width:'40%',
  height:'80%',
  enterAnimationDuration:'1000ms',
  exitAnimationDuration:'1000ms',
  data:{
    
    title:'update the profile'
  }
    });
  }
}
