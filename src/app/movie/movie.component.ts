import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {Movie} from 'app/movie/movie'
import { MovieServiceService } from 'app/service/movie-service.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  dataSaved = false;    
massage:string;    
FromMovie: any;    
MovieId:string = "0";
   
allMovie:Observable<Movie[]>;
  constructor(private formbulider: FormBuilder,private MovieService:MovieServiceService) { }

  ngOnInit(): void {  
    this.FromMovie = this.formbulider.group({  
     name: ['', [Validators.required]],  
     category: ['', [Validators.required]],        
     rating: ['', [Validators.required]],  
});  
  this.GetMovies();  
}

GetMovies( )    
{      
     this.allMovie=this.MovieService.getMovies();    
}

Reset()    
{    
   this.FromMovie.reset();    
} 


AddMovie(MovieAd: Movie) {  
 
  debugger;  
  this.MovieService.CreateMovie(MovieAd).subscribe(  
      () => {  
          this.dataSaved = true;  
          this.massage = 'Record saved Successfully';  
          this.GetMovies();  
          this.Reset();  
          this.MovieId = "0";  
      });

    }

    MovieEdit(MovieId: string) {  
      debugger;  
      this.MovieService.getMovieById(MovieId).subscribe(Response => {  
          this.massage = null;  
          this.dataSaved = false;  
          debugger;  
          this.MovieId = Response.id;  
          this.FromMovie.controls['name'].setValue(Response.name);  
          this.FromMovie.controls['category'].setValue(Response.category);          
          this.FromMovie.controls['rating'].setValue(Response.rating);  
      });  
  }

  DeleteMovie(MovieId: string) {  
    if (confirm("Are You Sure To Delete this Movie")) {  
        this.MovieService.DeleteMovie(MovieId).subscribe(  
            () => {  
                this.dataSaved = true;  
                this.massage = "Deleted Successfully";  
                this.GetMovies();  
            });  
    }  
}





}
