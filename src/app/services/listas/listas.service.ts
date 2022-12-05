import { Injectable } from '@angular/core';
import { Time } from 'src/app/model/times';
import { PaginaTime } from 'src/app/model/paginaTime';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  private apiUrl = environment.apiUrl;

  constructor(private httpCliente: HttpClient) {
   }

  deleteTime(id: number)
  {
    return this.httpCliente.delete<Time>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<PaginaTime>
  {
    return this.httpCliente.get <PaginaTime> (this.apiUrl);
  }

  findById(id: number): Observable<Time>
  {
    return this.httpCliente.get<Time> (this.apiUrl+"/findById/"+id)
  }

  createTime(time :Time)
  {
    //const cabecalho = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpCliente.post<Time>(this.apiUrl,time);
  }

  updateTime(time: Time)
  {
    console.log(time);
    return this.httpCliente.put<Time>(this.apiUrl,time);
  }

}
