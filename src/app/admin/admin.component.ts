import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms'; //FormArray

export interface Publico {
  value: string;
  viewValue: string;
}

export interface Resposta{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'est-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: []
})
export class AdminComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { } 

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({ 
      $key: ['0'],
      titulo: ['', Validators.required],
      questionarios: [''],
      periodo: ['', Validators.required],
      ativo: [true],
      terminado: [false],    
      data_ativacao:  [''],
      data_limite:  ['', Validators.required],
      observacao:  ['', Validators.required],    
      publico_alvo: ['', Validators.required]
    });

    this.orderForm = this.formBuilder.group({
      topico: ['', Validators.required],
      publico_alvo: ['', Validators.required],
      por_disciplina:  [true],
      tipo_resposta:  ['', Validators.required],
      possiveis_respostas: [''],
      questoes:  ['', Validators.required],
      labels_respostas: [''],
      items: this.formBuilder.array([ this.createItem() ])
    });
  }


  //---------------------------------------------- FORMARRAY E FORMGROUP
  orderForm: FormGroup; //FormArray
  items: FormArray; //FormArray

  //Layout - Stepper
  firstFormGroup: FormGroup;



  //---------------------------------------------- VARIÁVEIS
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  step = 0; //Layout - Expansion Panel



  //---------------------------------------------- ARRAYS
  //Layout - List - Publicos
  tipoPublicos: Publico[] = [
    {value: '0', viewValue: 'Discentes'},
    {value: '1', viewValue: 'Docentes'},
    {value: '2', viewValue: 'Técnicos'}
  ]; 

  //Layout - List - Respostas
  tipoRespostas: Resposta[] = [
    {value: '0', viewValue: 'Objetiva'}, 
    {value: '1', viewValue: 'Texto Curto'}, 
    {value: '2', viewValue: 'Texto Longo'}
  ];

  

  //---------------------------------------------- AÇÕES
  createItem(): FormGroup {
    return this.formBuilder.group({
      questoes: ''
    });
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  onSubmit() {
    alert(JSON.stringify(this.firstFormGroup.value));

    console.log(this.firstFormGroup.value);
  }

}
