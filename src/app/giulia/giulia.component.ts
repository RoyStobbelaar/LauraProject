import {AfterViewInit, Component, ElementRef, ViewChild, ViewContainerRef} from '@angular/core';
import {MyModalComponent} from '../modal/my-modal.component';
import {ImageService} from '../image/image.service';
import {ModalDialogService} from 'ngx-modal-dialog';


@Component({
  selector: 'giulia',
  template: `
    <div #container class="fade-in">
      <h2>
        Samenvatting Propaganda geschreven door André Gijssel
      </h2>

      <div>
      <div class="image-container" (click)="openDialog()">
        <img class="image" src="../../assets/giulia.jpeg" style="max-width: none">
      </div>

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
    </div>
  `,
  styleUrls: ['./giulia.component.scss']
})

export class GiuliaComponent implements AfterViewInit {


  @ViewChild('container') ref: ElementRef;

  constructor(
    private _imageService: ImageService,
    private _modalService: ModalDialogService,
    private _viewRef: ViewContainerRef)
  {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.ref.nativeElement.classList.add('fade-out');
    }, 0);
  }

  public openDialog() {
    this._imageService.setPath('../../assets/giulia.jpeg');
    this._modalService.openDialog(this._viewRef, {
      title: 'Poster',
      childComponent: MyModalComponent
    });
  }

}
