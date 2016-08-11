/// <reference path="../typings/index.d.ts"/>

import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouterConfig} from '@angular/router';
import {AlbumList} from './app/album-list';
import {Cart} from './app/cart';

@Component({
  selector: 'root',
  template: `
  <a routerLink="/" ><h1>Yoshioka's album shop</h1></a>
  <router-outlet [albums]="albums" ></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class Root {}

export const routes: RouterConfig = [
  {
    path: '',
    component: AlbumList
  },
  {
    path: 'cart',
    component: Cart
  }
];
