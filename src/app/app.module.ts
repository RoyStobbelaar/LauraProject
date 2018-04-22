import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {DaphneComponent} from './daphne/daphne.component';
import {GiuliaComponent} from './giulia/giulia.component';
import {LauraComponent} from './laura/laura.component';
import {ReserveComponent} from './reserve/reserve.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from '../environments/environment';
import {AngularFirestore} from 'angularfire2/firestore';
import {ResponsiveService} from './services/responsive/responsive.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModalDialogModule} from 'ngx-modal-dialog';
import {MyModalComponent} from './modal/my-modal.component';
import {ImageService} from './image/image.service';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'daphne', component: DaphneComponent},
  {path: 'giulia', component: GiuliaComponent},
  {path: 'laura', component: LauraComponent},
  {path: 'reserveren', component: ReserveComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DaphneComponent,
    GiuliaComponent,
    LauraComponent,
    ReserveComponent,
    LayoutComponent,
    MyModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ModalDialogModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  entryComponents: [
    MyModalComponent
  ],
  providers: [AngularFirestore, ResponsiveService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
