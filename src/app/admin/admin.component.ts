import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

export interface Publico {
  value: string;
  viewValue: string;
}

export interface Resposta {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'est-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: []
})
export class AdminComponent {

  formulario = this.fb.group({
    titulo: ['', Validators.required],
    questionarios: this.fb.array([this.createQuestionario2()
    ]),
    periodo: ['', Validators.required],
    ativo: [false],
    terminado: [false],
    data_ativacao: [''],
    data_limite: ['', Validators.required],
    observacao: [''],
    publico_alvo: ['', Validators.required]
  });

  avaliacao = null;
  questionario = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  //---------------------------------------------- FORMARRAY e VARIÁVEIS
  valResp: FormArray //FormArray
  valQuest: FormArray //FormArray 
  date = new FormControl(new Date())
  serializedDate = new FormControl((new Date()).toISOString())
  step = 0 //Layout - Expansion Panel
  panelOpenState = false //Layout - Expansion Panel

  //---------------------------------------------- ARRAYS  
  tipoPublicos: Publico[] = [//Layout - List - Publicos
    { value: '0', viewValue: 'Discentes' }, { value: '1', viewValue: 'Docentes' }, { value: '2', viewValue: 'Técnicos' }
  ];
  tipoRespostas: Resposta[] = [//Layout - List - Respostas
    { value: '0', viewValue: 'Objetiva' }, { value: '1', viewValue: 'Texto Curto' }, { value: '2', viewValue: 'Texto Longo' }
  ];


  //---------------------------------------------- AÇÕES
  createValResp(): FormGroup {//Adicionar novos campos de possiveis respostas
    return this.fb.group({
      labels_respostas: '',
      possiveis_respostas: ''
    });
  }
  createQuest(): FormGroup {//Adicionar novos campos de questões
    return this.fb.group({
      questoes: ''
    });
  }
  createQuestionario(questionario): FormGroup {
    return this.fb.group({
      topico: [questionario.topico],
      publico_alvo: [questionario.publico_alvo],
      por_disciplina: [questionario.por_disciplina],
      tipo_resposta: [questionario.tipo_resposta],
      labels: [questionario.labels],
      respostas: [questionario.respostas],
      questoes: [questionario.questoes],
      valQuest: this.fb.array([this.createQuest()]),
      valResp: this.fb.array([this.createValResp()]),
    });
  }

  createQuestionario2(): FormGroup {
    return this.fb.group({
      topico: [''],
      publico_alvo: [''],
      por_disciplina: [''],
      tipo_resposta: [''],
      labels: [''],
      respostas: [''],
      questoes: [''],
      valQuest: this.fb.array([this.createQuest()]),
      valResp: this.fb.array([this.createValResp()]),
    });
  }

  get questionarios() {
    return this.formulario.get('questionarios') as FormArray;
  }

  //---------------------------------------------- AÇÕES STEP
  setStep(index: number) {//Layout - Expansion Panel
    this.step = index
  }
  nextStep() {//Layout - Expansion Panel
    this.step++
  }
  prevStep() {//Layout - Expansion Panel
    this.step--
  }
  finalizandoStep() { //DUVIDA AQUI   
    // this.formulario.controls.questionarios = this.formulario.get('questionarios') as FormArray 
    // this.questionario.push(this.createQuestionario(this.questionario))
    let form = this.formulario.get('questionarios') as FormArray 
    form.push(this.createQuestionario2())

    console.log(this.formulario)    
    this.step++
  }
  finalizar(){

  }

  //---------------------------------------------- ADD CAMPOS
  addValResp(): void {//Adicionar novos campos de possiveis respostas
    this.valResp = this.formulario.controls.questionarios.get('valResp') as FormArray 
    this.valResp.push(this.createValResp())
  }
  addQuest(): void {//Adicionar novos campos de questões
    this.valQuest = this.formulario.controls.questionarios.get('valQuest') as FormArray
    this.valQuest.push(this.createQuest())
  }

  //---------------------------------------------- SALVAR INFORMAÇÕES
  saveAval() {
    const { periodo, ativo, terminado, data_ativacao, data_limite, titulo, publico_alvo, observacao } = this.formulario.value;
    this.avaliacao = {
      periodo,
      ativo,
      terminado,
      data_ativacao,
      data_limite,
      titulo,
      publico_alvo,
      observacao
    }
    console.log(this.avaliacao)
    this.step++
  }

  saveQuest() {    
    const i = this.questionarios.length -1
    const { topico, publico_alvo, por_disciplina, tipo_resposta, valQuest, valResp } = this.questionarios.value[i];
    this.questionario.push({
      topico,
      publico_alvo,
      por_disciplina,
      tipo_resposta,
      questoes: valQuest.map(vq => vq.questoes),
      respostas: valResp.map(p => p.possiveis_respostas),
      labels: valResp.map(v => v.labels_respostas)
    })
    this.questionarios.push(this.createQuestionario2())
    //this.formulario.controls.questionarios.reset()
    //this.questionarios.get('por_disciplina').setValue(false)

    // let zeraValResp = this.formulario.controls.questionarios.get('valResp') as FormArray
    // while (zeraValResp.length > 1) zeraValResp.removeAt(0)

    // let zeraValQues = this.formulario.controls.questionarios.get('valQuest') as FormArray
    // while (zeraValQues.length > 1) zeraValQues.removeAt(0)
  }

  teste(){
    console.log(this.questionario)
  }

  //-----------------------------------------------------------------------------------------------------------------------------------

  /*

  delQuest(questoes) {
    console.log(questoes)

    for (var i = 0; i < this.questionarios.length; i++) {
      if (this.questionarios[i]["questoes"] == questoes) {
        this.questionarios.splice(i, 1)
      }
    }
  }*/


}
