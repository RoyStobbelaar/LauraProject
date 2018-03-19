import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';


@Component({
  selector: 'giulia',
  template: `
    <div #container class="fade-in">
      <h2>
        Samenvatting Propaganda geschreven door André Gijssel
      </h2>

      <p>
        Dit stuk gaat over een vrouw die zichzelf kwijt en is en twijfelt of ze zichzelf ooit heeft gekend.
        In tegenstelling tot het spel dat haar fascineert.
        Ze blikt terug op haar leven en dat wat onvermijdelijk zal zijn.
        Net als de 52 kaarten die allemaal hun onvermijdelijke plek krijgen.
        Had ze met meer zelfkennis andere of betere keuzes gemaakt?
        Patience gaat over keuzes maken. Welke kaart leg ik waar neer. Daar kom je niet voor verrassingen te staan.
        Anders dan in het leven. Haar leven.
      </p>
      <p>
        Dit stuk gaat over Johanna Maria Magdalena Behrend, beter bekent als Magda Goebbels, echtgenote van Joseph Goebbels.
        Een belangrijk en bekend man in Duitseland in de jaren 30. voornamelijk propagandaleider.
        Magda verteld over haar verleden en wat er in de toekomst zal gebeuren.
        Dit aangrijpende verhaal dat zich afspeelt in 1945 wordt op 5 juni 2018 om 19.30 opgevoerd in de Kleine Willem te Enschede en wordt
        gespeeld door Giulia Radulescu.
      </p>
    </div>
  `,
  styleUrls: ['./giulia.component.scss']
})

export class GiuliaComponent implements AfterViewInit {


  @ViewChild('container') ref: ElementRef;

  constructor() {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.ref.nativeElement.classList.add('fade-out');
    }, 0);
  }

}
