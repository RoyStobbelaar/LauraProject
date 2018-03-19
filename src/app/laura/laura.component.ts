import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';


@Component({
  selector: 'laura',
  template: `
    <div #container class="fade-in">
      <h2>
        Dromen?!
      </h2>
      <p>
        Een meisje die wil stoppen met geloven in alles waar ze ooit van dacht dat het waar was.
        Alles waar ze ooit van gedroomd had. Moet je dat kleine stukje geloof laten bestaan?
        Moet je dat kleine stukje kind van binnen gewoon laten zitten? Het is soms lastig om naar je hart te luisteren als iedereen om je
        heen iets anders zegt.
        Soms is het beter om het even te laten rusten. Maar dan wordt je weer aan herinnerd.
        Dan wordt je gepusht. Dan wordt je verteld dat je moet stoppen met geloven. Maar iedereen heeft toch een stukje geloof nodig?
        Iedereen heeft iets nodig om in te geloven! Wilt u weten wat mij heeft geholpen deze keuze te maken? Kom dan 5 juni naar de
        voorstelling Dromen?!
        In de Kleine Willem.
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
    }, 0);
  }

}
