import { IModalDialog, IModalDialogOptions } from "ngx-modal-dialog";
import { ComponentRef, Component } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'my-modal',
  template: `test`
})

export class MyModalComponent implements IModalDialog {

  constructor() {
  }

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<any>>) {
    // no processing needed
  }
}
