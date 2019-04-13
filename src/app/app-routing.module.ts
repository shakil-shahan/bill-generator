import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MatTableModule} from '@angular/material/table';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatTableModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
