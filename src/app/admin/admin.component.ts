import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Avaliacao } from '../services/avaliacao.service';
import { ModalQuestionarioComponent } from '../modal/questionario/questionario.component'
import { ModalObjetivaComponent } from '../modal/objetiva/objetiva.component'

@Component({
  selector: 'est-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  status: 'loading' | 'view' = 'loading'
  step = 0;
  avaliacao: Avaliacao
  indice: number

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.avaliacao = {
      ativo: false,
      titulo: '',
      observacao: '',
      publico_alvo: [false, false, false],
      questionarios: [],
      periodo: 20191,
      data_ativacao: null,
      data_limite: null,
    }

    this.status = 'view'
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  change() {
    this.avaliacao.ativo = !this.avaliacao.ativo
  }

  salvarAvaliacao() {
    console.log(this.avaliacao)
    this.nextStep()
  }

  selecionarQuestao(i) {
    this.indice = i
  }

  newQuestao() {
    const data = {
      topico: '',
      publico_alvo: [false, false, false],
      por_disciplina: false,
      tipo_resposta: "curta",
      questoes: [],
      possiveis_respostas: [],
      labels_respostas: [],
    }
    const dialogRef = this.dialog.open(ModalQuestionarioComponent, {
      width: '550px',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.avaliacao.questionarios.push(result)
      }
    });

  }

  editQuest() {
    const dialogRef = this.dialog.open(ModalQuestionarioComponent, {
      width: '550px',
      data: this.avaliacao.questionarios[this.indice]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    });
  }

  delQuest() {
    this.avaliacao.questionarios.splice(this.indice, 1)
  }

  addObjetiva(i) {
    this.indice = i
    const q = this.avaliacao.questionarios[i]
    const indice = q.labels_respostas ? q.labels_respostas.length : 0

    const dialogRef = this.dialog.open(ModalObjetivaComponent, {
      width: '260px',
      data: { label: `Opção ${indice + 1}`, valor: indice, indice }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (!q.labels_respostas) {
          q.labels_respostas = []
          q.possiveis_respostas = []
        }

        q.labels_respostas.push(result.label)
        q.possiveis_respostas.push(result.valor)
      }
    });
  }

  delObjetiva(i, indice) {
    const q = this.avaliacao.questionarios[i]
    q.possiveis_respostas.splice(indice, 1)
    q.labels_respostas.splice(indice, 1)
  }

  salvarQuestionario() {
    console.log(this.avaliacao.questionarios)
    this.nextStep()
  }

  addQuestao(i) {
    let q = this.avaliacao.questionarios[i].questoes
    q.push("Pergunta " + (q.length + 1))
  }

  finalizar() {
    this.step++;
    console.log("Salva no BD")
  }

}
