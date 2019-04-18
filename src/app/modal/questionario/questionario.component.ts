import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

interface DialogData {
  topico?: string
  publico_alvo?: any[]
  por_disciplina?: boolean
  tipo_resposta?: number
  questoes?: any[]
  possiveis_respostas?: any[]
  labels_respostas?: string[]
}

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class ModalQuestionarioComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalQuestionarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  change(){
    this.data.por_disciplina = !this.data.por_disciplina
  }
}
