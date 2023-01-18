import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InclusaoCursoServece {
    elementApiUrl = "https://localhost:44366/api/IncluisaoCusrso";
  constructor(private http: HttpClient) { }
}