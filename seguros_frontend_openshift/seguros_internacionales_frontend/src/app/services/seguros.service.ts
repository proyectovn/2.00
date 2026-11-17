import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Seguro {
  id?: number;
  nombreTitular: string;
  tipoSeguro: string;
  montoCobertura: number;
  estado: string;
}

@Injectable({
  providedIn: 'root'
})
export class SegurosService {
  private apiUrl = `${environment.apiUrl}/seguros`;

  constructor(private http: HttpClient) { }

  getSeguros(): Observable<Seguro[]> {
    return this.http.get<Seguro[]>(this.apiUrl);
  }

  getSeguroById(id: number): Observable<Seguro> {
    return this.http.get<Seguro>(`${this.apiUrl}/${id}`);
  }

  crearSeguro(seguro: Seguro): Observable<Seguro> {
    return this.http.post<Seguro>(this.apiUrl, seguro);
  }
}
