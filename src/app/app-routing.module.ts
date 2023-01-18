import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateActorsComponent } from './actors/create-actors/create-actors.component';
import { EditActorsComponent } from './actors/edit-actors/edit-actors.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { HomeComponent } from './home/home.component';
import { CreateMovieTheatersComponent } from './movie-theaters/create-movie-theaters/create-movie-theaters.component';
import { IndexMovieTheatersComponent } from './movie-theaters/index-movie-theaters/index-movie-theaters.component';
import { CreateMoviesComponent } from './movies/create-movies/create-movies.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'genres', component: IndexGenresComponent },
  { path: 'genres/create', component: CreateGenreComponent },
  { path: 'genres/edit/:id', component: EditActorsComponent },
  { path: 'actors', component: IndexActorsComponent },
  { path: 'actors/create', component: CreateActorsComponent },
  { path: 'actors/edit/:id', component: EditActorsComponent },
  { path: 'movietheaters', component: IndexMovieTheatersComponent },
  { path: 'movietheaters/create', component: CreateMovieTheatersComponent },
  { path: 'movietheaters/edit/:id', component: EditActorsComponent },
  { path: 'movies/create', component: CreateMoviesComponent },
  { path: 'movies/edit/:id', component: EditActorsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
