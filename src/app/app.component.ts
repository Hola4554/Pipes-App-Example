import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {PrimeNGConfig} from 'primeng/api'
import { SharedModule } from './shared/shared.module';

//Lenguaje
import localeEsMX from '@angular/common/locales/es-MX';
import localeFrCa from '@angular/common/locales/fr-CA';

import { registerLocaleData } from '@angular/common';

registerLocaleData( localeEsMX );
registerLocaleData( localeFrCa );

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{

  constructor( private primengConfig: PrimeNGConfig ){}

  public  title = 'ferNAnDo HerRerA';

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
