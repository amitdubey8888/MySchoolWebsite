import { Component, Directive } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

private navItems = [
  { name: `Home`, link: `#home` },
  { name: `Admission`, link: `#admission` },
  { name: `Events`, link: `#events` },
  { name: `Curriculum`, link: `#curriculum` },
  { name: `Spaces`, link: `#spaces` },
  { name: `Achievement`, link: `#achievement` },
  { name: `Community`, link: `#community` },
  { name: `Contact Us`, link: `#contact` },
];


lat: number = 26.850139;
lng: number = 75.790960;
customer_mail_successfull: boolean = false;
contactForm:FormGroup;
customer_name: AbstractControl;
customer_email: AbstractControl;
customer_telephone: AbstractControl;
customer_message: AbstractControl;
  
form_successfull: boolean = false;
onlineForm:FormGroup;
first_name: AbstractControl;
last_name: AbstractControl;
father_name: AbstractControl;
mother_name: AbstractControl;
dob: AbstractControl;
gender: AbstractControl;
telephone: AbstractControl;
email: AbstractControl;
street_address: AbstractControl;
area: AbstractControl;
district: AbstractControl;
state: AbstractControl;
pin: AbstractControl;


  constructor(private formBuilder: FormBuilder){
    this.contactForm = this.formBuilder.group({
      customer_name: ['', Validators.compose([Validators.required])],
      customer_email: ['',Validators.compose([Validators.required])],
      customer_telephone: ['', Validators.compose([Validators.required])],
      customer_message: ['', Validators.compose([Validators.required])]
    });
    this.customer_name = this.contactForm.controls['customer_name'];
    this.customer_email = this.contactForm.controls['customer_email'];
    this.customer_telephone = this.contactForm.controls['customer_telephone'];
    this.customer_message = this.contactForm.controls['customer_message'];  

   this.onlineForm = this.formBuilder.group({
      first_name: ['', Validators.compose([Validators.required])],
      last_name: ['',Validators.compose([Validators.required])],
      father_name: ['', Validators.compose([Validators.required])],
      mother_name: ['', Validators.compose([Validators.required])],
      dob: ['', Validators.compose([Validators.required])],
      gender: ['',Validators.compose([Validators.required])],
      telephone: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      street_address: ['', Validators.compose([Validators.required])],
      area: ['', Validators.compose([Validators.required])],
      district: ['',Validators.compose([Validators.required])],
      state: ['', Validators.compose([Validators.required])],
      pin: ['', Validators.compose([Validators.required])]
    });

    this.first_name = this.onlineForm.controls['first_name'];
    this.last_name = this.onlineForm.controls['last_name'];
    this.father_name = this.onlineForm.controls['father_name'];
    this.mother_name = this.onlineForm.controls['mother_name']; 
    this.dob = this.onlineForm.controls['dob'];
    this.gender = this.onlineForm.controls['gender'];
    this.telephone = this.onlineForm.controls['telephone'];
    this.email = this.onlineForm.controls['email']; 
    this.street_address = this.onlineForm.controls['street_address'];
    this.area = this.onlineForm.controls['area'];
    this.district = this.onlineForm.controls['district'];
    this.state = this.onlineForm.controls['state']; 
    this.pin = this.onlineForm.controls['pin']; 

  }
  
  sendEmail(event) {
     console.log(this.contactForm.value);
     this.customer_mail_successfull = true;
     this.contactForm.reset();
  }
  sendForm(event){
    console.log(this.onlineForm.value);
    this.form_successfull = true;
    this.onlineForm.reset();
  }
}
