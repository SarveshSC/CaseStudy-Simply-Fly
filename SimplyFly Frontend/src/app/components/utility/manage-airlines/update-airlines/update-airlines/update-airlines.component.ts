import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminDashboardService } from 'src/app/service/admin-dashboard.service';

@Component({
  selector: 'app-update-airlines',
  templateUrl: './update-airlines.component.html',
  styleUrls: ['./update-airlines.component.css']
})
export class UpdateAirlinesComponent {
  currentAirline:any;
  closedMessage = "closed using directive"
  myForm!: FormGroup
  isReadable: boolean = false;
  inputData:any
  editData:any
  showConfirmation:boolean=false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private ref: MatDialogRef<UpdateAirlinesComponent>,
  private formbuilder: FormBuilder,private adminDashBoardService:AdminDashboardService){}


  ngOnInit(): void {
    this.myForm = this.formbuilder.group({
      airlineId: [this.data.id, [Validators.required]],
      airlineName: [this.data.name, [Validators.required]],
     
    });
    this.inputData=this.data
    //this.setPopUpData();
  }

  closePopup() {
    this.ref.close('closed using function')
    }

    updateAirline(){
      this.adminDashBoardService.updateAirline(this.myForm.value).subscribe(res=>{
        this.showConfirmation=true;
        this.showAlert()
        this.closePopup();
      },(error)=>{
        alert('please check the name')
      })
    }
    showAlert()
    {
      if(this.showConfirmation){
        alert('update succesful')
      }
    }
}
