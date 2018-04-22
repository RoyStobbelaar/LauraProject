import {Injectable} from '@angular/core';


@Injectable()
export class ImageService {

  public path: string;

  constructor() {

  }

  public getPath(): string {
    return this.path;
  }

  public setPath(path: string) {
    this.path = path;
  }
 }
