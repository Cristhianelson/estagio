import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalQuestionarioComponent } from './modal/questionario/questionario.component';
import { ModalObjetivaComponent } from './modal/objetiva/objetiva.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalQuestionarioComponent,
    ModalObjetivaComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
  ],
  entryComponents: [
    ModalQuestionarioComponent,
    ModalObjetivaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
