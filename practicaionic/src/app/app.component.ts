import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
   // { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    //{ title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Home', url: '/folder/home', icon: 'home' },
 { title: 'Clientes', url: '/folder/clientes', icon: 'people' },
    //{ title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    //{ title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
