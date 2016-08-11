import {Component} from '@angular/core';
import {Album} from './album-list';

@Component({
  selector: 'Album-Display',
  inputs: ['album'],
  template: require('./album-display.html')
})

export class AlbumDisplay {
  public album: Album;

toCart(albumInCart: boolean) {
    this.album.inCart = albumInCart;
    console.log(this.album.inCart);
  }
}
