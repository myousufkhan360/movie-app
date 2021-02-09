import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { MovieService, SearchType } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  results: Observable <any>;
  searchTerm = '';
  type: SearchType = SearchType.all;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  searchChanged(){

    this.results = this.movieService.searchData(this.searchTerm, this.type);

    // this.results.subscribe( res =>{

    // })

  }

}
