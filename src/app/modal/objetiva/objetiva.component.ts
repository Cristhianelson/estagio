import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

interface DialogData {
  valor?: any
  label?: string
  indice: number
}

@Component({
  selector: 'app-objetiva',
  templateUrl: './objetiva.component.html',
  styleUrls: ['./objetiva.component.css']
})
export class ModalObjetivaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalObjetivaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
