import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, Form, FormGroup } from '@angular/forms'
import { Aliment } from '../model/aliment.model';

@Component({
  selector: 'app-aliment-list',
  templateUrl: './aliment-list.component.html',
  styleUrls: ['./aliment-list.component.css']
})
export class AlimentListComponent implements OnInit {

  aliments = this.dataService.aliments;
  alimentForm: FormGroup;

  attributes = ['Nom', 'IG', 'Proportion de glucides']

  constructor(private dataService: DataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.alimentForm = this.formBuilder.group({
      name: '',
      ig: 0,
      carbs: 0
    });

  }

  onSubmit(newAliment: Aliment) {
    this.aliments.push(newAliment);
  }

  onDelete(alimentToDelete: Aliment) {
    this.aliments = this.aliments.filter(aliment => aliment !== alimentToDelete)
  }
}
