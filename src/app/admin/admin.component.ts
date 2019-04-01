import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
export class AdminComponent implements OnInit {
  avaliacao = null;
  questionarios = [];
  data: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.avalFormGroup = this.formBuilder.group({
      $key: ['0'],
      titulo: ['', Validators.required],
      questionarios: [''],
      periodo: ['', Validators.required],
      ativo: [false],
      terminado: [false],
      data_ativacao: [''],
      data_limite: ['', Validators.required],
      observacao: [''],
      publico_alvo: ['', Validators.required]
    });

    this.questForm = this.formBuilder.group({
      topico: ['', Validators.required],
      publico_alvo: ['', Validators.required],
      por_disciplina: [false],
      tipo_resposta: ['', Validators.required],     
      labels_respostas: [''],
      possiveis_respostas: [''],      
      questoes: [''],
      valQuest: this.formBuilder.array([this.createQuest()]),
      valResp: this.formBuilder.array([this.createValResp()])
    });

    this.data = this.getData();
  }


  //---------------------------------------------- FORMARRAY E FORMGROUP
  avalFormGroup: FormGroup //FormGroup
  questForm: FormGroup //FormGroup
  valQuest: FormArray //FormArray
  valResp: FormArray //FormArray
  



  //---------------------------------------------- VARIÁVEIS
  date = new FormControl(new Date())
  serializedDate = new FormControl((new Date()).toISOString())

  step = 0 //Layout - Expansion Panel
  panelOpenState = false //Layout - Expansion Panel



  //---------------------------------------------- ARRAYS
  //Layout - List - Publicos
  tipoPublicos: Publico[] = [
    { value: '0', viewValue: 'Discentes' },
    { value: '1', viewValue: 'Docentes' },
    { value: '2', viewValue: 'Técnicos' }
  ];

  //Layout - List - Respostas
  tipoRespostas: Resposta[] = [
    { value: '0', viewValue: 'Objetiva' },
    { value: '1', viewValue: 'Texto Curto' },
    { value: '2', viewValue: 'Texto Longo' }
  ];



  //---------------------------------------------- AÇÕES
  createQuest(): FormGroup {
    return this.formBuilder.group({
      questoes: ''
    });
  }

  createValResp(): FormGroup {
    return this.formBuilder.group({
      labels_respostas: '',
      possiveis_respostas: ''
    });
  }

 

  //---------------------------------------------- AÇÕES
  setStep(index: number) {//Layout - Expansion Panel
    this.step = index
  }

  nextStep() {//Layout - Expansion Panel
    this.step++
  }

  prevStep() {//Layout - Expansion Panel
    this.step--
  }

  //---------------------------------------------- AÇÕES
  addQuest(): void {//Adicionar novos campos de questões
    this.valQuest = this.questForm.get('valQuest') as FormArray
    this.valQuest.push(this.createQuest())
  }

  addValResp(): void {//Adicionar novos campos de possiveis respostas
    this.valResp = this.questForm.get('valResp') as FormArray
    this.valResp.push(this.createValResp())
  }

  saveAval() {
    const {periodo, ativo, terminado, data_ativacao, data_limite, titulo, publico_alvo, observacao} = this.avalFormGroup.value;
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
    const {topico, publico_alvo, por_disciplina, tipo_resposta, valQuest, valResp} = this.questForm.value;
    this.questionarios.push({
      topico,
      publico_alvo,
      por_disciplina,
      tipo_resposta,
      questoes: valQuest.map(vq => vq.questoes),
      respostas: valResp.map(p => p.possiveis_respostas),
      labels: valResp.map(v => v.labels_respostas)
    })

    this.questForm.reset()
    this.questForm.get('por_disciplina').setValue(false)

    let zeraValResp = this.questForm.get('valResp') as FormArray
    while (zeraValResp.length > 1) zeraValResp.removeAt(0)

    let zeraValQues = this.questForm.get('valQuest') as FormArray
    while (zeraValQues.length > 1) zeraValQues.removeAt(0)
    
  }

  finalizandoStep() {
    console.log(this.questionarios)
    this.step++
  }

  getData() {
    return this.questionarios
  }

  delQuest(questoes){
    console.log(questoes)

    for(var i=0; i < this.questionarios.length; i++){
      if(this.questionarios[i]["questoes"] == questoes){
        this.questionarios.splice(i, 1)
      }
    }
  }
  

}
