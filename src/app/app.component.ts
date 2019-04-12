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
      
      title: '控制系统',
      url: '/home',
      icon: 'home'
    },
    // {
    //   title: '控制列表',
    //   url: '/list',
    //   icon: 'list'
    // },
    // {
    //   title: '实时采集',
    //   url: '/collect',
    //   icon: 'list'
    // },
    {
      title: '报警设置',
      url: '/alarm',
      icon: 'list'
    },
    // {
    //   title: '历史数据',
    //   url: '/history',
    //   icon: 'list'
    // },
    // {
    //   title: '自动控制',
    //   url: '/contrl-time',
    //   icon: 'list'
    // },
    // {
    //   title: '条件控制',
    //   url: '/contrl-condition',
    //   icon: 'list'
    // },
    {
      title: '系统设置',
      url: '/contrl-condition',
      icon: 'list'
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
