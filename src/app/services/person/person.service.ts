import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonModel } from 'src/app/models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private url = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  addPerson(user: PersonModel) {
    return this.http.post(this.url + 'persons/addPerson', user);
  }
}
