import { useEffect } from 'react';
import './MoviesList.scss';
import NotFound from '../../images/not-found.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { FaHeartCirclePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { fetchMovie } from '../../redux/movieAction';

function MoviesList({search}) {
  const dispatch = useDispatch()
  const state = useSelector((items) => items.Movies)
  const countMovies = useSelector((items) => items.Favorites.favorites)

  const handleCount = (movie) => {
    dispatch({ type: 'add-favorites', payload: movie })
  }

  // useEffect(()=>{
  //   console.log(countMovies)
  // },[countMovies])
  
  return (
    <div className='movies'>
      <h2>Movies List</h2>

      { state.loading && <h3 className='actions'> loading... </h3> }
      { state.error && <h3 className='actions'> { state.error } </h3> }
      <div className="list">
        {state.movies && state.movies.filter((movie)=> movie.Title.toUpperCase().includes(search.toUpperCase()))
        .map((movie, i)=> 
          <div className="card" key={i}>
            <Link to={`/${movie.imdbID}`} ><img src={movie.Poster !=='N/A' ? movie.Poster  : NotFound} alt={ movie.Title } /></Link>
            <div className="card-body">
                <h3>{ movie.Title }</h3>
                <span>{ movie.Type }: { movie.Year }</span><br />
                <div className="plus">
                  <span>
                    count: {countMovies && countMovies.map((i)=>i.imdbID === movie.imdbID && i.count)}
                  </span>
                  <FaHeartCirclePlus className='plus-icone' onClick={ ()=> handleCount(movie) }/>
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default MoviesList
