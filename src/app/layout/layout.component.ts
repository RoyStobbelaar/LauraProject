import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ResponsiveService} from '../services/responsive/responsive.service';
import {animate, style, transition, trigger} from '@angular/animations';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'layout',
  template: `
    <img [src]="'./assets/1.png'" style="z-index: 22" *ngIf="!responsiveService.isMobile">
    <img [src]="'./assets/2.png'" style="right: 0; z-index: 22" *ngIf="!responsiveService.isMobile">
    <div class="container">
      <div class="row justify-content-md-center">

        <div class="col-12">

        <div class="header" [ngClass]="{'mobile-header': responsiveService.isMobile}" (click)="closeMenu()">
          <div style="padding-top: 120px; color: white">Afstuderen 5 Juni</div>
      </div>

          <div class="row">

            <div class="slide-menu" style="width: 200px" *ngIf="openMobile && responsiveService.isMobile" [@enterAnimation]>
              <div class="slide-menu-box" style="top: 50px">
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

            <div class="closed" (click)="openMenu()" *ngIf="!openMobile && responsiveService.isMobile">
              <img [src]="'http://www.stickpng.com/assets/images/588a64d2d06f6719692a2d0e.png'"
                   style="width: 32px; height: 32px; position: absolute; top: 6px; left: 6px; cursor: pointer">
            </div>


            <div class="col-3" *ngIf="!responsiveService.isMobile">

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

            <div [ngClass]="{'col-9': !responsiveService.isMobile}">
              <div class="content" (click)="closeMenu()">
                <ng-content></ng-content>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(-100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(-100%)', opacity: 0}))
        ])
      ]
    )
  ],
})

export class LayoutComponent {

  public isOpen: boolean;
  public openMobile: boolean;

  constructor(private _router: Router, public responsiveService: ResponsiveService) {
    console.log(responsiveService.isMobile);
  }

  public openMenu() {
    this.openMobile = true;
  }

  public closeMenu() {
    this.openMobile = false;
  }

  public navigate(path: string) {
    this.closeMenu();
    this._router.navigateByUrl(path);
  }

}
