import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms'; //FormArray

  /*
  export interface Publico {
    value: string;
    viewValue: string;
  }

  export interface Resposta{
    value: string;
    viewValue: string;
  }
  */

@Component({
  selector: 'est-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css'],
  providers: []
})
export class QuestionarioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    
      /*topico: ['', Validators.required],
      publico_alvo: ['', Validators.required],
      por_disciplina:  [true],
      tipo_resposta:  ['', Validators.required],
      possiveis_respostas: [''],
      questoes:  ['', Validators.required],
      labels_respostas: [''],*/
    
      this.orderForm = this.formBuilder.group({
        customerName: '',
        email: '',
        items: this.formBuilder.array([ this.createItem() ])
      });
  }

  orderForm: FormGroup; //FormArray
  items: FormArray; //FormArray

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: ''
    });
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  /*
  step = 0; //Layout - Expansion Panel

  //Layout - List
  tipoPublicos: Publico[] = [
    {value: '0', viewValue: 'Discentes'},
    {value: '1', viewValue: 'Docentes'},
    {value: '2', viewValue: 'Técnicos'}
  ]; 

  //Layout - List
  tipoRespostas: Resposta[] = [
    {value: '0', viewValue: 'Objetiva'}, 
    {value: '1', viewValue: 'Texto Curto'}, 
    {value: '2', viewValue: 'Texto Longo'}
  ];
  */
}
