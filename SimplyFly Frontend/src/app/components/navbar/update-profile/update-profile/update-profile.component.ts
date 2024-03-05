import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { userProfile } from 'src/app/model/userProfile';
import { CustomerDashboardService } from 'src/app/service/customer-dashboard.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {
  myForm!:FormGroup
  
  isreadonly:boolean=true
  role=localStorage.getItem('role')
  shouldShowAlert:boolean=false

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private ref:MatDialogRef<UpdateProfileComponent>,
  private formbuilder:FormBuilder,private dashboardService : CustomerDashboardService){}
  ngOnInit(): void {
    this.myForm = this.formbuilder.group({
      name:['', this.role === 'Customer' ? Validators.required:''],
      email: ['', Validators.required],
      contact: ['',this.role === 'Customer' ? Validators.required : '']
    });
  
  this.setPopUpData();
  }

  closePopup() {
    
    this.ref.close('closed using function')
    }
  setPopUpData(){
    this.dashboardService.getProfile(localStorage.getItem('username')).subscribe((userprofile:userProfile)=>{
      this.myForm.setValue({
        name:userprofile.name,
        email:userprofile.email,
        contact:userprofile.contact
        
      })
    })

  }

  updateProfile(){
    this.dashboardService.updateProfile(this.myForm.value).subscribe((res)=>{
      this.shouldShowAlert=true;
      this.showProfileUpdatedAlert()
      console.log("there is no error")
this.closePopup();
    },(error)=>{
      console.log(error.error)
      alert(error.error)
    })
  }
  
  toggleEditable(){
    this.isreadonly=false;
  }

  showProfileUpdatedAlert() {
    // Check if the flag to show the alert is true
    if (this.shouldShowAlert) {
      alert("Profile updated successfully");
    }

}

}
