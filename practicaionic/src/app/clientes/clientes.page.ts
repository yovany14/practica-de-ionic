import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  componentes: Componente[]=[
    {
    icon: 'basketball',
    name: 'Inicio',
    redirectTo: '/alert',
  },
  {
    icon: 'boat',
    name: 'Botes',
    redirectTo: '/inicio',
  },
  {icon:'basketball',
    name:'Accion',
    redirectTo:'/actions',
  }
  

  ];

  constructor() { }

  ngOnInit() {
  }

}
