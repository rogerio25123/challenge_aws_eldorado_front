import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  items: any = [];


  constructor(


  ) {
    this.items = [
      {
        label: 'Cadastros',
        icon: 'pi pi-plus-circle',
        items: [
          {
            label: 'Categories',
            icon: 'pi pi-chevron-right',
            routerLink: ['categories'],
          },
          {
            label: 'Devices',
            icon: 'pi pi-chevron-right',
            routerLink: ['devices'],
          },
        ]
      }

    ];
  }

  ngOnInit() {

  }

}
