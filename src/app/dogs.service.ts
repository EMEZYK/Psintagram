import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, tap, catchError, of, BehaviorSubject } from 'rxjs';
import { Dog, DogImage } from './dog';
import { MessageService } from './message.service';

interface DogHTTPResult {
  message: Record<string, string[]>;
}

function mapResult(results: DogHTTPResult): Dog[] {
  return Object.keys(results.message).map((key) => ({
    breed: key,
    subTypes: results.message[key],
  }));
}

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  private dogsUrl = 'https://dog.ceo/api/breeds/list/all';
  // private dogImageUrl = `https://dog.ceo/api/breed/${breed}/image/random`;
  private dogImageUrl = `https://dog.ceo/api/breeds/image/random`;

  private dogBehavioralSubject = new BehaviorSubject<Dog | undefined>(
    undefined
  );
  dog = this.dogBehavioralSubject.asObservable();

  setDog(dog: Dog) {
    this.dogBehavioralSubject.next(dog);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getDogs(): Observable<Dog[]> {
    return this.http.get<any>(this.dogsUrl).pipe(
      map(mapResult),
      tap((val) => {
        val;
        console.log(val);
      }),

      catchError(this.handleError<Dog[]>('getDogs', []))
    );
  }

  getImage(breed: string): Observable<DogImage> {
    return this.http
      .get<any>(`https://dog.ceo/api/breed/${breed}/images/random`)
      .pipe(
        tap((val) => {
          console.log(`image ${val}`);
        })
      );
  }
}
