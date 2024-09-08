import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiUsers } from '../interfaces/iapi-users.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  private baseUrl: string="https://peticiones.online/api/users";
  //inyectamos
  http = inject(HttpClient)

  getAllObservable():Observable<IApiUsers>{
    return this.http.get<IApiUsers>(this.baseUrl)
  }

}

