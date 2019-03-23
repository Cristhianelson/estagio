import { Component, OnInit } from '@angular/core';
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
  selector: 'est-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css'],
  providers: [],
})
export class QuestionarioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {  
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

  orderForm: FormGroup; //FormArray
  items: FormArray; //FormArray

  createItem(): FormGroup {
    return this.formBuilder.group({
      questoes: ''
    });
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

 


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


  

}
