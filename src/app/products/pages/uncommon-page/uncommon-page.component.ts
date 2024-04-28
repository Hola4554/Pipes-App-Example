import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Mariam';
  public gender : 'male' | 'female' = 'female';
  public invitationMap = {
    'male' : 'invitarlo',
    'female' : 'invitarla'
  }

  changeClient(){
    this.name = 'Kriz';
    this.gender = 'male';
  }

  //i18nPlural
  public clients : string[] = [ 'Fer', 'Mel', 'Mariam', 'Kris', 'eduardo', 'esteban', 'gutabo', 'zambo' ];
  public clientsMap = {
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    'other':'tenemos # clientes esperando'
  }

  deleteClient(){
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name:'Fernando',
    age:'50',
    adress:'Ottawa'
  }

  //Async Pipe

  public myObservableTimer : Observable<number> = interval(2000).pipe(
    tap( value => console.log( 'tap:' , value) )
  );

  public promiseValue = new Promise<string>( (resolve, reject) => {
    setTimeout(()=> {
      resolve('Tenemos data en la promesa.');
    }, 3500)
  } )


}
