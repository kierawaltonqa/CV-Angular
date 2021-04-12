import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Skill } from './skills';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skillsUrl = 'api/skills';
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

  getSkills(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.skillsUrl)
      .pipe(
        // tap(_ => this.log('got skills'))
        catchError(this.handleError<Skill[]>('getSkills', []))
      )
  }

  getSkill(id: number): Observable<Skill> {
    const url = `${this.skillsUrl}/${id}`;
    return this.httpClient.get<Skill>(url).pipe(
      catchError(this.handleError<Skill>(`getSkill id=${id}`))
    );
  }
}
