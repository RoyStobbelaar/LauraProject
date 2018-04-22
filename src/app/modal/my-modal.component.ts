import {IModalDialog, IModalDialogButton, IModalDialogOptions} from 'ngx-modal-dialog';
import {ComponentRef, Component, Input, HostListener, ElementRef} from '@angular/core';
import {ImageService} from '../image/image.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'my-modal',
  template: `    
    <div class="modal-content">
      <img class="image" [src]="path">
    </div>
  `,
  styleUrls: ['my-modal.component.scss']
})

export class MyModalComponent implements IModalDialog {

  @Input() path: string;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(this.eRef.nativeElement.contains(event.target)) {
      console.log('clicked inside');
    } else {
      console.log('clicked outside');
    }
  }

  actionButtons: IModalDialogButton[];

  constructor(private _imageService: ImageService, private eRef: ElementRef) {
    this.path = this._imageService.getPath();

    this.actionButtons = [
      { text: 'Close' }, // no special processing here
    ];
  }

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<any>>) {
    // no processing needed
  }
}
