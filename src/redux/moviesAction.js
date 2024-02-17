import axios from "axios";
import { FETCH_MOVIES_REQUEST,FETCH_MOVIES_SUCCESS,FETCH_MOVIES_FAILURE } from "./ActionTypes";

export const fetchMoviesRequest = () => {
  return {
    type: FETCH_MOVIES_REQUEST
  }
}

export const fetchMoviesSuccess = (movies) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies
  }
}

export const fetchMoviesFailure = (error) => {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error
  }
}

export const fetchApi = (search) => {
  return async (dispatch) => {
    dispatch(fetchMoviesRequest())
    try{
      const movies = await axios.get(`https://www.omdbapi.com/?apikey=6e30c4b4&s=${search}`)
      dispatch(fetchMoviesSuccess(movies.data.Search))
    }catch(error){
      dispatch(fetchMoviesFailure(error.message))
    }

  }
}