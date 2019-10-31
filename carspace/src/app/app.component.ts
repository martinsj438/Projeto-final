import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
 
export class AppComponent {
  public appPages = [
    {
      title: 'Estacionamentos favoritos',
      url: '/login-usuario',
      icon: 'heart'
    },
   
    {
      title: 'Formas de pagamento',
      url: '/pagina-contato',
      icon: 'cash'
    },
    {
      title: 'Cupons de descontos',
      url: '/lista-de-noticias',
      icon: 'list-box'
    },
    {
      title: 'Sugerir estacionamentos',
      url: '/filmes',
      icon: 'videocam'
    },
    {
      title: 'Notificações',
      url: '/filmes',
      icon: 'chatboxes'
    },
    {
      title: 'Seja parceiro',
      url: '/filmes',
      icon: 'contacts'
    },
    {
      title: 'Ajuda',
      url: '/filmes',
      icon: 'help'
    },
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
