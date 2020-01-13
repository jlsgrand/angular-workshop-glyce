import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Portion } from '../model/portion.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  aliments = this.dataService.aliments; 
  portions: Portion[] = [];

  portionForm: FormGroup

  constructor(private dataService: DataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.aliments = this.aliments.sort( (a, b) => a.name.localeCompare(b.name));

    this.portionForm = this.formBuilder.group({
      aliment: this.aliments.length > 0 ? this.aliments[0] : null,
      portion: 0
    });
  }

  getLoad(portion: Portion) {
    return this.calculateLoad(portion);
  }

  getTotalLoad() {
    return this.portions.reduce((total, current) => total + this.calculateLoad(current), 0)
  }

  getLoadClass(): string {
    const totalLoad = this.getTotalLoad();
    if (totalLoad > 20)
      return 'high-load';
    else if (totalLoad > 10)
      return 'medium-load';
    else
      return 'low-load';
  }

  private calculateLoad(portion: Portion): number {
    return portion.aliment.ig * portion.portion * portion.aliment.carbs / 100 / 100;
  }

  onSubmit(newPortion: Portion) {
    this.portions.push(newPortion);
  }

  onDelete(portionToDelete: Portion) {
    this.portions = this.portions.filter(portion => portion !== portionToDelete)
  }
}
