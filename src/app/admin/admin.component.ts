import { Component, OnInit } from '@angular/core';
import {AdminService} from './admin.service';
import {FormControl} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'; //Layout - Stepper
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper'; //Layout - Stepper - Icon Concluido

export interface Publico {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'est-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]//Layout - Stepper - Icon Concluido
})
export class AdminComponent implements OnInit {

  constructor(private service: AdminService, private _formBuilder: FormBuilder) { } //Layout - Stepper

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({ //Layout - Stepper
      $key: ['0'],
      titulo: ['', Validators.required],
      questionarios: ['', Validators.required],
      periodo: ['', Validators.required],
      ativo: [true],
      terminado: [false]
    });
    this.secondFormGroup = this._formBuilder.group({
      data_ativacao:  [''],
      data_limite:  ['', Validators.required],
      observacao:  ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      publico_alvo: ['', Validators.required]
    });
  }

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  step = 0; //Layout - Expansion Panel

  //Layout - List
  tipoPublicos: Publico[] = [
    {value: '0', viewValue: 'Discentes'},
    {value: '1', viewValue: 'Docentes'},
    {value: '2', viewValue: 'Técnicos'}
  ]; 

  //Layout - Stepper
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  model: any = {};

  onSubmit() {
    alert(JSON.stringify(this.firstFormGroup.value, 
                         this.secondFormGroup.value, 
                         this.thirdFormGroup.value));

    console.log(this.firstFormGroup.value, 
                this.secondFormGroup.value, 
                this.thirdFormGroup.value);
  }

}
