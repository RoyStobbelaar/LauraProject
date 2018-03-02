import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';


@Component({
  selector: 'reserve',
  template: `    
    
    <div #container class="fade-in">
    
    <h2>Reservatie</h2>
    
    <p>
      Hier onder kunt u kaartjes reserveren voor de show.
    </p>
    <div class="group">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Aantal</span>
        </div>
        <input type="number" min="1" value="1" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">E-mail</span>
        </div>
        <input type="text" [placeholder]="'example@gmail.com'" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
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
    </div>
    </div>
    
  `,
  styleUrls: ['./reserve.component.scss']
})

export class ReserveComponent implements AfterViewInit {

  @ViewChild('container') ref: ElementRef;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.ref.nativeElement.classList.add('fade-out');
    },0);
  }


  items: any;
  constructor(public db: AngularFireDatabase) {

    this.getItems().subscribe(result => {
      console.log(result);
      this.items = result;
    })

  }

  public getItems() {
    return this.db.list('/test').valueChanges();
  }

}
