import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';

@Component({
  selector: 'reserve',
  template: `    
    
    <div #container class="fade-in">
    
    <h2>Reserveren</h2>
    
    <p>
      Hier onder kunt u kaartjes reserveren voor de show. <br>
      Selecteer het aantal kaartjes, en de student voor wie u komt. <br>
      Een bevestiging krijgt u via de mail. <br>
      <br>
    </p>
    <div class="group">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span style="width: 83px" class="input-group-text">Aantal</span>
        </div>
        <input type="number" [(ngModel)]="amount" min="1" value="1" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span style="width: 83px" class="input-group-text">E-mail</span>
        </div>
        <input type="text" [(ngModel)]="email" [placeholder]="'example@gmail.com'" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Student</span>
        </div>
        <select class="custom-select" id="inputGroupSelect01">
          <option value="1" selected>Daphne</option>
          <option value="2">Giulia</option>
          <option value="3">Laura</option>
        </select>
      </div>

      <p *ngIf="ticketsAmount < 1" style="color: red">
        Alle tickets zijn al gereserveerd!
      </p>
      <div class="input-group mb-3" style="margin-top: 42px;">
        <button type="button" [disabled]="ticketsAmount < 1" class="btn btn-primary btn-lg btn-block" (click)="updateTickets()">Reserveer</button>
      </div>
      
    </div>
    
  `,
  styleUrls: ['./reserve.component.scss']
})

export class ReserveComponent implements AfterViewInit {

  public items: AngularFireObject<any>;
  public emails: AngularFireList<any>;

  public email: string;
  public ticketsAmount: number;
  public amount: number;

  @ViewChild('container') ref: ElementRef;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.ref.nativeElement.classList.add('fade-out');
    },0);
  }

  constructor(public db: AngularFireDatabase) {

    this.items = this.db.object('/amount');
    this.items.valueChanges().subscribe((data:number) => {
      this.ticketsAmount = data;
    });

    this.emails = this.db.list('/emails');
    this.emails.valueChanges().subscribe((data: string[]) => {
    })
  }

  public updateTickets() {

    if (!this.amount) return;

    this.ticketsAmount = this.ticketsAmount - this.amount;
    this.items.set(this.ticketsAmount);

    this.emails.push(this.email);
  }

}
