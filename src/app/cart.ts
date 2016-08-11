import {Component, OnInit} from '@angular/core';
import {AlbumDisplay} from './album-display';
import {Album} from './album-list';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {AlbumService} from './album-service';

@Component({
  selector: 'Cart',
  template: require('./cart.html'),
  directives: [ROUTER_DIRECTIVES, AlbumDisplay],
  providers: [AlbumService]
})
export class Cart implements OnInit {
  public albums: Album[];
  public album: Album;
  public cartTotal: number = 0;

  constructor(private albumService: AlbumService){}

  getAlbums() {
    this.albumService.getAlbums().then((albums) => {
      this.albums = albums;
      this.total();
    });

  }

  ngOnInit() {
    this.getAlbums();
  }

  total(){
    this.albums.forEach((album) => {
      if(album.inCart) {
        this.cartTotal += parseFloat(album.price);
      }
    });
    ;
  }
}
