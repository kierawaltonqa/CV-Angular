import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from './projects';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsUrl = 'api/projects'
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

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.projectsUrl)
      .pipe(
        catchError(this.handleError<Project[]>('getProjects', []))
      )
  }

  getProject(id: number): Observable<Project> {
    const url = `${this.projectsUrl}/${id}`;
    return this.httpClient.get<Project>(url).pipe(
      catchError(this.handleError<Project>(`getProject id=${id}`))
    );
  }

  addProject(project: Project): Observable<Project> {
    return this.httpClient.post<Project>(this.projectsUrl, project, this.httpOptions).pipe(
      catchError(this.handleError<Project>('addProject'))
    )
  }

  deleteProject(id: number): Observable<Project> {
    const url = `${this.projectsUrl}/${id}`;
    return this.httpClient.delete<Project>(url, this.httpOptions).pipe(
      catchError(this.handleError<Project>('deleteProject'))
    );
  }

  updateProject(project: Project): Observable<any> {
    return this.httpClient.put(this.projectsUrl, project, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateProject'))
    );
  }
}
