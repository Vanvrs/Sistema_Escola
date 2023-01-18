import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InclusaoCurso } from 'src/app/views/home/home.component';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.scss']
})
export class ElementDialogComponent implements OnInit {
element!: InclusaoCurso;
isChange!: boolean;

constructor(
  @Inject(MAT_DIALOG_DATA) 
  public data: InclusaoCurso,
  public dialogRef: MatDialogRef<ElementDialogComponent>, 
) {}


  ngOnInit(): void {
    if(this.data.codigo != null){
      this.isChange =true;
    } else{
      this.isChange =false;
    }
  }
  
  onCancel(): void {
    this.dialogRef.close();
  }
}

