import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { AlimentListComponent } from './aliment-list/aliment-list.component';


const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: 'aliments', component: AlimentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
