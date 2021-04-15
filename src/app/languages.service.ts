import { Injectable } from '@angular/core';
import { Languages } from './languages';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  private languagesUrl = 'api/languages';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private httpClient: HttpClient) { }
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getLanguages(): Observable<Languages[]> {
    return this.httpClient.get<Languages[]>(this.languagesUrl)
      .pipe(
        // tap(_ => this.log('got skills'))
        catchError(this.handleError<Languages[]>('getLanguages', []))
      )
  }
  getLanguage(id: number): Observable<Languages> {
    const url = `${this.languagesUrl}/${id}`;
    return this.httpClient.get<Languages>(url).pipe(
      catchError(this.handleError<Languages>(`getLanguage id=${id}`))
    );
  }
}
