import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmissionFormComponent } from './submission-form/submission-form.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';
import { GridDataComponent } from './grid-data/grid-data.component';
import { SubmissionModalComponent } from './submission-modal/submission-modal.component';
import { DataSharingService } from './data-sharing.service';

@NgModule({
  declarations: [
    AppComponent,
    SubmissionFormComponent,
    SubmissionModalComponent,
    GridDataComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AgGridModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DataSharingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
