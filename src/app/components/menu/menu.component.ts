import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-menu',
  standalone: true,
  imports: [ CommonModule, PrimeNgModule ],
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit{

  public menuItems: MenuItem[] = [];

    ngOnInit() {
      this.menuItems = [
        {
            label: 'Pipes de Angular',
            icon: 'pi pi-desktop',
            items:[
              {
                label:'Textos y Fechas',
                routerLink: '/',
                icon: 'pi pi-align-left'
              },
              {
                label:'Números',
                routerLink: 'numbers',
                icon: 'pi pi-dollar'
              },
              {
                label:'No comúnes',
                routerLink: 'uncommon',
                icon: 'pi pi-globe'
              }
            ]
        },
        {
          label: 'Pipes Personalizados',
          icon: 'pi pi-cog',
          items:[
            {
              label:'Custom Pipes',
              icon: 'pi pi-cog',
              routerLink:'custom'
            }
          ]
        }
    ];
    }

}
