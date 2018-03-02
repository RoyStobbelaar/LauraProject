import {Component} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'layout',
  template: `
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-12">


          <div class="row">
            <div class="col-3">

              <div class="slide-menu">
                <div class="slide-menu-box">
                  <div class="slide-menu-item" (click)="navigate('home')">
                    Home
                  </div>

                  <div class="slide-menu-item" (click)="navigate('daphne')">
                    Daphne
                  </div>

                  <div class="slide-menu-item" (click)="navigate('giulia')">
                    Giulia
                  </div>

                  <div class="slide-menu-item" (click)="navigate('laura')">
                    Laura
                  </div>

                  <div class="slide-menu-item" (click)="navigate('reserveren')">
                    Reserveren
                  </div>
                </div>
              </div>
            </div>

            <div class="col-9">
              <div class="header">
                Hier een header
              </div>

              <div class="content">
                <ng-content></ng-content>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  `,
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent {

  public isOpen: boolean;

  constructor(private _router: Router) {

  }

  public openMenu() {
    this.isOpen = true;
  }

  public closeMenu() {
    this.isOpen = false;
  }

  public navigate(path: string) {
    this._router.navigateByUrl(path);
  }

}
