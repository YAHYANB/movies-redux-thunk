import { combineReducers } from "redux";
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
} from "./ActionTypes";

const initMoviesState = {
  loading: false,
  movies: [],
  error: "",
};

const moviesReducer = (state = initMoviesState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return { ...state, loading: true };
    case FETCH_MOVIES_SUCCESS:
      return { ...state, movies: action.payload, loading: false };
    case FETCH_MOVIES_FAILURE:
      return { movies: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

const initFavoritesState = {
  favorites: [],
};

const favoritesReducer = (state = initFavoritesState, action) => {
  switch (action.type) {
    case "add-favorites":
      const isThere = state.favorites.some(
        (i) => i.imdbID === action.payload.imdbID
      );
      let update;
      if (isThere) {
        update = state.favorites.map((i) =>
          i.imdbID === action.payload.imdbID ? { ...i, count: i.count + 1 } : i
        );
      } else {
        update = [...state.favorites, { ...action.payload, count: 1 }];
      }
      return { favorites: update };
    case "minus-favorites":
      const isHere = state.favorites.find((i) => i.imdbID === action.payload);
      let updateFavorites;
      if (isHere.count > 1) {
        updateFavorites = state.favorites.map((i) =>
          i.imdbID === action.payload ? { ...i, count: i.count - 1 } : i
        );
      } else {
        updateFavorites = state.favorites.filter(
          (i) => i.imdbID !== action.payload
        );
      }
      return { favorites: updateFavorites };
    default:
      return state;
  }
};

const initMovieState = {
  loading: false,
  movie: {},
  error: ''
}

const movieReducer = (state = initMovieState, action ) => {
  switch(action.type){
    case FETCH_MOVIE_REQUEST:
      return {...state, loading:true}
    case FETCH_MOVIE_SUCCESS:
      return {...state,loading:false, movie: action.payload}
    case FETCH_MOVIE_FAILURE:{
      return {loading:false, movie:{}, error:action.payload}
    }
    default:
      return state ;
  }
}

const Reducer = combineReducers({
  Movies: moviesReducer,
  Favorites: favoritesReducer,
  Movie: movieReducer
});
export default Reducer;
