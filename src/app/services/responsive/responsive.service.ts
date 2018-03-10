import {Injectable} from '@angular/core';


@Injectable()
export class ResponsiveService {

  public isMobile: boolean;

  constructor() {
    this.isMobile = (window.screen.width < 600);
  }
}
