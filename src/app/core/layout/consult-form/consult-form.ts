import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LeadService } from '../../services/lead-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consult-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './consult-form.html',
  styleUrl: './consult-form.css'
})
export class ConsultForm {
  isLoading = false;
  public EnqOutput:any=[];
  myForm: FormGroup;
  alrt=false;
  scssAlrt=false;

  constructor(private formBuilder:FormBuilder,private leadSrv:LeadService){
    this.myForm = this.formBuilder.group({
      // Define your form controls and their initial values and validators
      //ProdID: [0],
      InquisitorFullName: ['',[Validators.required, Validators.minLength(5),Validators.maxLength(100)]],
      EmailId: ['', [Validators.required, Validators.email]],
      CountryCode: ['', Validators.required],
      Phone: ['',[Validators.required, Validators.maxLength(15)]],
      MedicalConcerns: ['',[Validators.required, Validators.minLength(10),Validators.maxLength(2000)]],
      PageName: "MedworldSite",
      PageUrl: "medworldindia.com",
    });
  }
  get formControls() {
    return this.myForm.controls;
  }
  ngOnInit(): void {
    
  }
  onSubmit(){
    if(this.myForm.valid){
      this.isLoading=true;
      debugger
      this.leadSrv.createLead(this.myForm.value).subscribe({
        next:(Response)=>{
          console.log(Response)
          this.scssAlrt=true;
          this.isLoading=false;
          this.alrt=false;
          this.myForm.reset();
        }
      })
    }
    else{
      this.alrt=true;
    }
  }
  hideAlrt(){
    //alert("hii")
    this.alrt=false
    this.scssAlrt=false
  }
}
