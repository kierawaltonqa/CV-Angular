import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IDEs, DevOpsTech, databaseTech, cloudPlatformsAndOS, fullStack, other } from './skills';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private languagesUrl = 'api/skills';
  private IDEsUrl = 'api/IDEs';
  private devOpsURL = 'api/DevOpsTech';
  private dbURL = 'api/databaseTech';
  private cloudOSURL = 'api/cloudPlatformsAndOS';
  private fullStackURL = 'api/fullStack';
  private otherURL = 'api/other';

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


  getIDEs(): Observable<IDEs[]> {
    return this.httpClient.get<IDEs[]>(this.IDEsUrl)
      .pipe(
        // tap(_ => this.log('got skills'))
        catchError(this.handleError<IDEs[]>('getIDEs', []))
      )
  }
  getIDE(id: number): Observable<IDEs> {
    const url = `${this.IDEsUrl}/${id}`;
    return this.httpClient.get<IDEs>(url).pipe(
      catchError(this.handleError<IDEs>(`getIDE id=${id}`))
    );
  }

  getDevOps(): Observable<DevOpsTech[]> {
    return this.httpClient.get<DevOpsTech[]>(this.devOpsURL)
      .pipe(
        // tap(_ => this.log('got skills'))
        catchError(this.handleError<DevOpsTech[]>('getDevOps', []))
      )
  }
  getDevOp(id: number): Observable<DevOpsTech> {
    const url = `${this.devOpsURL}/${id}`;
    return this.httpClient.get<DevOpsTech>(url).pipe(
      catchError(this.handleError<DevOpsTech>(`getDevOps id=${id}`))
    );
  }

  getDbs(): Observable<databaseTech[]> {
    return this.httpClient.get<databaseTech[]>(this.dbURL)
      .pipe(
        // tap(_ => this.log('got skills'))
        catchError(this.handleError<databaseTech[]>('getDatabases', []))
      )
  }
  getCloudOS(): Observable<cloudPlatformsAndOS[]> {
    return this.httpClient.get<cloudPlatformsAndOS[]>(this.cloudOSURL)
      .pipe(
        // tap(_ => this.log('got skills'))
        catchError(this.handleError<cloudPlatformsAndOS[]>('getCOS', []))
      )
  }
  getFullStack(): Observable<fullStack[]> {
    return this.httpClient.get<fullStack[]>(this.fullStackURL)
      .pipe(
        // tap(_ => this.log('got skills'))
        catchError(this.handleError<fullStack[]>('getStacks', []))
      )
  }
  getOther(): Observable<other[]> {
    return this.httpClient.get<other[]>(this.otherURL)
      .pipe(
        // tap(_ => this.log('got skills'))
        catchError(this.handleError<other[]>('getOther', []))
      )
  }
  // getSkill(id: number): Observable<Skill> {
  //   const url = `${this.skillsUrl}/${id}`;
  //   return this.httpClient.get<Skill>(url).pipe(
  //     catchError(this.handleError<Skill>(`getSkill id=${id}`))
  //   );
  // }
}
