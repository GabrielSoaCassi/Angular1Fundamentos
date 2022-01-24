import { Observable } from 'rxjs';
import { Photo } from './Photo';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const api = "http://localhost:3000";

@Injectable({
  providedIn: "root",
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  listFromUser(userName: string):Observable<Photo[]> {
    return this.http.get<Photo[]>(`${api}/flavio/photos`);
  }
}
