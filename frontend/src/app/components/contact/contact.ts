import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  contactInfo = {
    email: 'contact@tubuntustudio.com',
    phone: '+237 6XX XXX XXX',
    location: 'Douala, Cameroun'
  };

  // submitForm() {
  //   console.log('Form submitted', this.form);
  //   // Ici tu brancheras ton API (EmailJS / backend / Firebase etc.)
  // }
}
