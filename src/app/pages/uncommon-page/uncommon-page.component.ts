import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { I18nPluralPipe, I18nSelectPipe } from '@angular/common';

const client1 = {
  name: 'Moisés',
  gender: 'male',
  age: 42,
  adress: 'Galicia, Spain'
};

const client2 = {
  name: 'Lara',
  gender: 'female',
  age: 33,
  adress: 'Madrid, Spain'
};


@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  //i18n Select
  client = signal(client1);

  invitationMap = {
    male: 'Sr.',
    female: 'Sra.',
  }

  changeClient(){

    if (this.client() === client1){
      this.client.set(client2);
      return;
    }

    this.client.set(client1);

  }

  //i18n Plural
  clientsMap = signal({
    '=0': 'no hay clientes',
    '=1': 'hay 1 cliente',
    other: 'hay # clientes',

  });

  clients = signal([
   'Luisa',
   'Inma',
   'Aldán',
   'Zeus',
   'Nico',
   'Paula',
   'Thais',
   'Matías',
   'Aria',
   'Martín',
  ]);

  deleteClient(){
    this.clients.update( prev => prev.slice(1));
  }


 }
