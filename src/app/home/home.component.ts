import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';


@Component({
  selector: 'homepage',
  template: `
    <div #container class="fade-in">
  <h2>
  Op 5 Juni is het zover
  </h2>
  <p>
  Dan mogen Daphne, Giulia en Laura hun afstudeervoorstellingen presenteren. Elke voorstelling gaat over een vrouw die staat voor een moeilijke keuze, bij elke vrouw een andere keuze. Hun voorstellingen laten zien wat er om gaat in de hoofden van deze vrouwen en hoe ze uit eindelijk tot een besluit komen of niet. De stukken van Daphne en Laura zijn autobiografisch en Giulia speelt een vrouw uit de geschiedenis. Lees meer informatie over de individuele voorstelling door op die namen in het menu te klikken. Lijkt het u na het lezen van deze pagina’s leuk om te komen kijken? Reserveer dan kaartjes en wordt verwonderd

  “She believed she could, so she did”  </p>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements AfterViewInit{

  @ViewChild('container') ref: ElementRef;

  constructor() {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.ref.nativeElement.classList.add('fade-out');
    },0);
  }
}
