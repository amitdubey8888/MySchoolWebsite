import { Component, Directive } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = 26.850139;
  lng: number = 75.790960;
   
  contactForm:FormGroup;
  name: AbstractControl;
  email: AbstractControl;
  telephone: AbstractControl;
  message: AbstractControl;

  constructor(private formBuilder: FormBuilder){
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['',Validators.compose([Validators.required])],
      telephone: ['', Validators.compose([Validators.required])],
      message: ['', Validators.compose([Validators.required])]
    })
    this.name = this.contactForm.controls['name'];
    this.email = this.contactForm.controls['email'];
    this.telephone = this.contactForm.controls['telephone'];
    this.message = this.contactForm.controls['message'];        
  }
  
   sendEmail(event) {
     console.log(this.contactForm.value);
     this.name = this.contactForm.value.name;
     this.email = this.contactForm.value.email;
     this.telephone = this.contactForm.value.telephone;
     this.message = this.contactForm.value.message;
     
  }

}
