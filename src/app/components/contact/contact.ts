import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class Contact {
  // Numéro WhatsApp au format international (sans le +)
  whatsappNumber = '237699099784'; 

  contactInfo = {
    email: 'contact@tubsstudio.com',
    phone: '237699099784',
    location: 'Douala, Cameroun'
  };

  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  sendViaWhatsApp() {
    if (!this.form.name || !this.form.message) {
      alert('Veuillez remplir au moins votre nom et votre message.');
      return;
    }

    const text = `Bonjour, je m'appelle *${this.form.name}*.\n` +
                 `Email: ${this.form.email || 'Non renseigné'}\n` +
                 `Sujet: ${this.form.subject || 'Demande de projet'}\n\n` +
                 `*Message:* ${this.form.message}`;

    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}