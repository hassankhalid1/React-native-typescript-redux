export interface MovieObj {
  vote_average: string;
  id: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
}

export interface IReduxMoviesState {
  movies: MovieObj[];
  moviesLoaded: boolean;
  moviesLoadedAt?: number;
  movie?: MovieObj;
  movieLoaded: boolean;
  movieUpdated: boolean;
}
