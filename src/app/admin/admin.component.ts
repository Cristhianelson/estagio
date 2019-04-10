import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

export interface Resposta { value: string; viewValue: string; }
export interface Publico { value: string; viewValue: string; }

@Component({
  selector: 'est-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  formulario = this.formbuilder.group({
    titulo: [''],
    questionarios: this.formbuilder.array([]),
    periodo: [''],
    ativo: [false],
    terminado: [false],
    data_ativacao: [''],
    data_limite: [''],
    observacao: [''],
    publico_alvo: [''],    
    possiveis_respostas: this.formbuilder.array(['']), 
    labels_respostas: this.formbuilder.array(['']), 
    questoes: this.formbuilder.array(['']), 
  });

  questionarios = this.formulario.get('questionarios') as FormArray
  possiveis_respostas = this.formulario.get('possiveis_respostas') as FormArray
  labels_respostas = this.formulario.get('labels_respostas') as FormArray
  questoes = this.formulario.get('labels_respostas') as FormArray

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
  }

  //Layout - Expansion Panel -----------------------------------------------------------------------------------------------------------------------------------------
  step = 0 
  panelOpenState = false //Layout - Expansion Panel
  setStep(index: number) {//Layout - Expansion Panel
    this.step = index
  }
  nextStep() {//Layout - Expansion Panel
    this.step++
  }
  prevStep() {//Layout - Expansion Panel
    this.step--
  }
  //Layout - Expansion Panel -----------------------------------------------------------------------------------------------------------------------------------------

  novoQuestionario() {
    this.questionarios.push(this.formbuilder.group({      
      topico: this.formbuilder.control(''),
      publico_alvo: this.formbuilder.control(''),
      por_disciplina: this.formbuilder.control(''),
      tipo_resposta: this.formbuilder.control(''),
      possiveis_respostas: this.formbuilder.control(''),
      labels_respostas: this.formbuilder.control(''),
      questoes: this.formbuilder.control(''),
    }));
  }

  tipoPublicos: Publico[] = [
    { value: '0', viewValue: 'Docente' }, { value: '1', viewValue: 'Discente' }, { value: '2', viewValue: 'Tecnico' }
  ];
  tipoRespostas: Resposta[] = [
    { value: '0', viewValue: 'Objetiva' }, { value: '1', viewValue: 'Texto Curto' }, { value: '2', viewValue: 'Texto Longo' }
  ];
  
 
  salvar() {
    console.log(this.formulario.value);
    this.step++
  }  
  addTipoResposta() {    
    this.possiveis_respostas.push(this.formbuilder.control(''))
    this.labels_respostas.push(this.formbuilder.control(''))
  }
  addQuestao() {    
    this.questoes.push(this.formbuilder.control(''))
  }

  teste(){
    console.log(this.questionarios.value.possiveis_respostas);
  }

}
