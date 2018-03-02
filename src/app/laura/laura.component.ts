import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';


@Component({
  selector: 'laura',
  template: `
    <div #container class="fade-in">
    <h2>
      Waar kan ik het vinden?
    </h2>
<p>
    Er zijn vele variaties van passages van Lorem Ipsum beschikbaar maar het merendeel heeft te lijden gehad van wijzigingen in een of andere vorm, door ingevoegde humor of willekeurig gekozen woorden die nog niet half geloofwaardig ogen. Als u een passage uit Lorum Ipsum gaat gebruiken dient u zich ervan te verzekeren dat er niets beschamends midden in de tekst verborgen zit. Alle Lorum Ipsum generators op Internet hebben de eigenschap voorgedefinieerde stukken te herhalen waar nodig zodat dit de eerste echte generator is op internet. Het gebruikt een woordenlijst van 200 latijnse woorden gecombineerd met een handvol zinsstructuur modellen om een Lorum Ipsum te genereren die redelijk overkomt. De gegenereerde Lorum Ipsum is daardoor altijd vrij van herhaling, ingevoegde humor of ongebruikelijke woorden etc.
</p>
    </div>
  `,
  styleUrls: ['./laura.component.scss']
})

export class LauraComponent implements AfterViewInit {


  @ViewChild('container') ref: ElementRef;

  constructor() {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.ref.nativeElement.classList.add('fade-out');
    },0);
  }

}
