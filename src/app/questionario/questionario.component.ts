import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'; //Layout - Stepper
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper'; //Layout - Stepper - Icon Concluido

export interface Publico {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'est-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]//Layout - Stepper - Icon Concluido
})
export class QuestionarioComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { } //Layout - Stepper

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({ //Layout - Stepper
      $key: ['0'],
      topico: ['', Validators.required],
      publico_alvo: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      por_disciplina:  [true],
      tipo_resposta:  ['', Validators.required],
      questoes:  ['']
    });
    this.thirdFormGroup = this._formBuilder.group({
      possiveis_respostas: [''],
      labels_respostas: ['']
    });
  }

  //Layout - Stepper
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  step = 0; //Layout - Expansion Panel

  //Layout - List
  tipoPublicos: Publico[] = [
    {value: '0', viewValue: 'Discentes'},
    {value: '1', viewValue: 'Docentes'},
    {value: '2', viewValue: 'Técnicos'}
  ]; 

  onSubmit() {
    alert(JSON.stringify(this.firstFormGroup.value, 
                         this.secondFormGroup.value, 
                         this.thirdFormGroup.value));

    console.log(this.firstFormGroup.value, 
                this.secondFormGroup.value, 
                this.thirdFormGroup.value);
  }

}
