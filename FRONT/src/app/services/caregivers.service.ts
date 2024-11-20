import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IApiResponse } from '../models/IApiResponse.interface';
import { IResCita } from '../models/citas/IResCitas.interface';
import { IResCollab } from '../models/collab/IResCollab.interface';
import { IResPaciente } from '../models/paciente/IResPaciente.interface';
import { IReqPaciente } from '../models/paciente/IReqPaciente.interface';
import { IReqCollab } from '../models/collab/IReqCollab.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioCuidadoresService {
  private apiUrl = 'http://localhost:3200';

  constructor(private http: HttpClient) {}
  
  getVisitas(): Observable<IApiResponse<IResCita[]>> {
    let url = `${this.apiUrl}/citas/consulta`;
    return this.http.get<IApiResponse<IResCita[]>>(url);
  }

  getCollab(): Observable<IApiResponse<IResCollab[]>> {
    let url = `${this.apiUrl}/empleados/consulta`;
    return this.http.get<IApiResponse<IResCollab[]>>(url);
  }

  setCollab(data: IReqCollab): Observable<IApiResponse<IResCollab[]>> {
    let url = `${this.apiUrl}/empleados/create`;
    return this.http.post<IApiResponse<IResCollab[]>>(url,data);
  }

  getPaciente(): Observable<IApiResponse<IResPaciente[]>> {
    let url = `${this.apiUrl}/pacientes/consulta`;
    return this.http.get<IApiResponse<IResPaciente[]>>(url);
  }

  setPaciente(data: IReqPaciente): Observable<IApiResponse<IResPaciente[]>> {
    let url = `${this.apiUrl}/pacientes/create`;
    return this.http.post<IApiResponse<IResPaciente[]>>(url,data);
  }

}
