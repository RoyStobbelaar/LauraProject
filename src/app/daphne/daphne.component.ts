import {AfterViewInit, Component, ElementRef, ViewChild, ViewContainerRef} from '@angular/core';
import {MyModalComponent} from '../modal/my-modal.component';
import {ImageService} from '../image/image.service';
import {ModalDialogService} from 'ngx-modal-dialog';


@Component({
  selector: 'daphne',
  template: `
    <div #container class="fade-in">
    <h2>
      Meeslepend Totaal Theater
    </h2>
      <p>

        <div class="image-container" (click)="openDialog()">
          <img class="image" src="../../assets/daphne.jpeg" style="max-height: none">
        </div>
        <p>

  Genevieve staat op het punt te trouwen, maar de twijfel slaat toe, wil ze dit wel? Want ze heeft altijd geroepen IK ga nooit trouwen.

  Tijdens de voorstelling wordt het publiek mee genomen in haar verleden en hoe ze gekomen is op het punt waar ze nu is. Wordt duidelijk waarom ze twijfelt? Wat kiest ze uit eindelijk?

  Daphne Fernhout is 3e jaars theaterstudent aan de podiumacademie Twente. Als kleine meisje deed ze al Pia Douwes als Keizerin Elisabeth na in een grote witte jurk midden in de woonkamer. Het toneel riep haar gewoon, van weeksluitingen, dansvoorstellingen tot de kunstklas. Haar grote liefde is theater. Ze is haar hele leven al op het toneel te vinden en heeft o.a. gespeelt in Van Katoen en Nu, Hamelen en Het Verzet Kraakt. Met Nog; hoopt zij af te studeren, daarna wil ze verder studeren voor docent theater. Als Genevieve in Nog; wil ze het publiek meenemen op een reis van liefde, hoop en doorzettingsvermogen. Want wat er ook gebeurd het is nog niet het einde. Nog; is gebaseerd op verhalen uit haar leven. Waardoor het verhaal dichtbij haar zelf ligt, ook al gaat zij nog niet trouwen hoor ;)</p>
      </div>
  `,
  styleUrls: ['./daphne.component.scss']
})

export class DaphneComponent implements AfterViewInit {



  @ViewChild('container') ref: ElementRef;

  constructor(
    private _imageService: ImageService,
    private _modalService: ModalDialogService,
    private _viewRef: ViewContainerRef
  ) {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.ref.nativeElement.classList.add('fade-out');
    },0);
  }

  public openDialog() {
    this._imageService.setPath('./assets/daphne.jpeg');
    this._modalService.openDialog(this._viewRef, {
      title: 'Poster',
      childComponent: MyModalComponent
    });
  }

}
