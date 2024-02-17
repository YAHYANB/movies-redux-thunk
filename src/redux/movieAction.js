import axios from "axios";
import { FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE } from "./ActionTypes"; 

const fetchMovieRequest = () => {
  return {
    type: FETCH_MOVIE_REQUEST
  }
}
const fetchMovieSuccess = (movie) => {
  return {
    type: FETCH_MOVIE_SUCCESS,
    payload: movie
  }
}

const fetchMovieFailure = (error) => {
  return {
    type: FETCH_MOVIE_FAILURE,
    payload: error
  }
}

export const fetchMovie = (id) => {
  return async (dispatch) => {
    dispatch(fetchMovieRequest())
    try{
      const movie = await axios.get(`https://www.omdbapi.com/?apikey=6e30c4b4&i=${id}`)
      dispatch(fetchMovieSuccess(movie.data))
    }catch(error){
      dispatch(fetchMovieFailure(error.message))
    }
  }
}