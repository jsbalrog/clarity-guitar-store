import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { IFile } from '../models/file';
import {IGuitar} from '../models/guitar';
import {OldGuitar} from '../models/old-guitar';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getAllFiles(): Observable<IFile[]> {
    return this.http.get<IFile[]>('http://127.0.0.1:5000/files');
  }

  getFilesForFolder(fileId: number | string) {
    return this.http.get<IFile[]>(`http://127.0.0.1:5000/files/${fileId}`);
  }

  getAllGuitars(): Observable<IGuitar[]> {
    return this.http.get<IGuitar[]>('http://127.0.0.1:5000/guitars');
  }

  getGuitarById(id: number | string): Observable<IGuitar> {
    return this.http.get<IGuitar>(`http://127.0.0.1:5000/guitars/${id}`, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'my-token'
      }),
    });
  }

  getOldGuitarById(id: number | string): Observable<OldGuitar> {
    return this.http.get<IGuitar>(`http://127.0.0.1:5000/guitars/${id}`)
      .pipe(
        map((g) => <OldGuitar> {
          make: g.make,
          year: g.year
        }),
        tap(old => console.log(old))
      );
  }

  addGuitar(newGuitar: IGuitar): Observable<IGuitar> {
    return this.http.post<IGuitar>('http://127.0.0.1:5000/guitars', newGuitar, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  updateGuitar(updatedGuitar: IGuitar): Observable<IGuitar> {
    return this.http.put<IGuitar>('http://127.0.0.1:5000/guitars', updatedGuitar, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
