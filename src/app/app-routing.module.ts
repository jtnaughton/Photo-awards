import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmissionFormComponent } from './submission-form/submission-form.component';
import { HomeComponent } from './home/home.component';
import { GridDataComponent } from './grid-data/grid-data.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'submission-form', component: SubmissionFormComponent },
  { path: 'grid-data', component: GridDataComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
