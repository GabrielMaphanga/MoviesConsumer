import { Injectable } from '@angular/core';    
import {HttpClient} from '@angular/common/http';    
import {HttpHeaders} from '@angular/common/http';    
import { Observable } from 'rxjs'; 
import {Movie} from 'app/movie/movie'

@Injectable(
  
)
export class MovieServiceService {

  Url = "https://localhost:44315/api/Movies";

  constructor(private http:HttpClient) { }

  public getMovies():Observable<Movie[]>    
  {    
    return this.http.get<Movie[]>(this.Url +'/Get');    
  } 

  public CreateMovie(movie:Movie):Observable<Movie[]>    
  {    
   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };    
    return this.http.post<Movie[]>(this.Url + '/Add/', movie, httpOptions)    
  }

  public DeleteMovie(movieId:string):Observable<number>    
  {    
    return this.http.delete<number>(this.Url + '/Delete/'+movieId);    
  }    
  public getMovieById(movieId:string): Observable<Movie> {    
    return this.http.get<Movie>(this.Url + '/Get/' +movieId);    
  }  

}
