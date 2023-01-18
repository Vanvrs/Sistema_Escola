import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { InclusaoCurso } from 'src/app/Models/InclusaoCurso';
import { ElementDialogComponent } from 'src/app/shared/element-dialog/element-dialog.component';



const ELEMENT_DATA: InclusaoCurso[] = [
  {codigo: 1, nome: 'Angular', instrutor: 'Genival', local: 'Softex', cargaHoraria: 36, dataInicio:'03/02/2020' },
  {codigo: 2, nome: 'Java', instrutor: 'Genival', local: 'Softex', cargaHoraria: 60, dataInicio:'06/02/2020'},
  {codigo: 3, nome: 'React', instrutor: 'Genival', local: 'Softex', cargaHoraria: 48, dataInicio:'09/02/2020'},
  {codigo: 4, nome: 'JavaScript', instrutor: 'Genival', local: 'Softex', cargaHoraria: 52, dataInicio:'12/02/2020'},
  {codigo: 5, nome: 'TypeScript', instrutor: 'Genival', local: 'Softex', cargaHoraria: 36, dataInicio:'15/02/2020'},
  {codigo: 6, nome: 'HTML5', instrutor: 'Genival', local: 'Softex', cargaHoraria: 45, dataInicio:'18/02/2020'},
  {codigo: 7, nome: 'CSS3', instrutor: 'Genival', local: 'Softex', cargaHoraria: 48, dataInicio:'21/02/2020'},
  {codigo: 8, nome: 'Vue', instrutor: 'Genival', local: 'Softex', cargaHoraria: 56, dataInicio:'24/02/2020'},
  {codigo: 9, nome: 'NodeJS', instrutor: 'Genival', local: 'Softex', cargaHoraria: 60, dataInicio:'27/02/2020'},
  {codigo: 10, nome: 'Bootstrap', instrutor: 'Genival', local: 'Softex', cargaHoraria: 48, dataInicio:'30/02/2020'},
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>
  displayedColumns: string[] = ['codigo', 'nome', 'instrutor', 'local','cargaHoraria', 'dataInicio', 'actions'];
  dataSource = ELEMENT_DATA;
  
  constructor(public dialog: MatDialog) {}

  ngOnInit():void {
  }

  openDialog(element: InclusaoCurso | null): void {
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      data: element === null ? {
        codigo: null,
        nome:'',
        instrutor: '',
        local: '',
        cargaHoraria: '',
        dataInicio:'',
      } : {
        codigo: element.codigo,
        nome:element.nome,
        instrutor: element.instrutor,
        Local: element.local,
        cargaHoraria: element.cargaHoraria,
        dataInicio: element.dataInicio,

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined) {
        if(this.dataSource.map(p => p.codigo).includes(result.codigo)){
          this.dataSource[result.codigo -1] = result;
          this.table.renderRows();
        } else {
          this.dataSource.push(result);
          this.table.renderRows();
        }
        
      }
    });
  }
  editElement(element: InclusaoCurso): void {
    this.openDialog(element);
  }
  
  deleteElement(codigo: number): void{
   this.dataSource = this.dataSource.filter(p => p.codigo !== codigo);

}
}

export { InclusaoCurso };

