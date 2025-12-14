import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';

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
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
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

  //KeyValue Pipe
  profile = {
    name: 'Lara',
    age: 33,
    address: 'Otawa, Canada',
  };

  //Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      //reject('Tenemos un error en la data.')
      resolve('Tenemos data en la promesa.')
      console.log('Promesa Finalizada.');
    }, 3500);
  })

  myObservableTimer = interval(2000).pipe(
    map( (value)=> value + 1 ),
    tap( (value)=> console.log('tap:',value) )
  );

 }
