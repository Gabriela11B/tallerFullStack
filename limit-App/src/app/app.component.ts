import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient){};
  title = 'limit-app';

  dataMovies: any= [];
  movies: number = 0;
  conteo = 0;
  categories = "";
  options = ['Comedy', 'Romance', 'Fantasy', 'Western','Drama','Crime','Short','Family', 'Adventure',];
  categoriesGene="";


  ngOnInit(){
   
}

reset(){
  console.log("Behavior called and on!")
  this.dataMovies = []
  this.movies = 0
  };

 sendMovies(){
  
  this.conteo= this.movies
  this.categories = this.categoriesGene
  
 console.log(this.conteo);
 console.log(this.categories);

      this.http.post(`http://localhost:5000/api/2`, {conteo: this.conteo, categories: this.categories}).subscribe((result:any)=>{
       this.dataMovies = result.data;
      });
  }
  

}
