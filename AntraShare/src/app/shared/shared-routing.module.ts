import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes),
  ReactiveFormsModule],
  exports: [RouterModule,
  FormsModule,
ReactiveFormsModule]
})
export class SharedRoutingModule { }
