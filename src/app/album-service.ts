import {Injectable} from '@angular/core';
import {ALBUMS} from './mock-albums';

@Injectable()
export class AlbumService {
  getAlbums() {
    return Promise.resolve(ALBUMS);
  }
}
