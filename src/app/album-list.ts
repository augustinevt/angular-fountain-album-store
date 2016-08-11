import {Component, OnInit} from '@angular/core';
import {AlbumDisplay} from './album-display';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {AlbumService} from './album-service';

export class Album {
  public inCart: boolean = false;
  constructor(public name: string, public price: string, public genre: string, public artist: string){}
}

@Component({
  selector: 'Album-List',
  template: require('./album-list.html'),
  directives: [AlbumDisplay, ROUTER_DIRECTIVES],
  providers: [AlbumService]
})
export class AlbumList implements OnInit {
  public albums: Album[];
  public album: Album;

  constructor(private albumService: AlbumService){}

  getAlbums() {
    this.albumService.getAlbums().then(albums => this.albums = albums);
  }

  ngOnInit() {
    this.getAlbums();
  }
}
