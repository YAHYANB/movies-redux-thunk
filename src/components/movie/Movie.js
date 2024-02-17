import { useParams } from "react-router-dom";
import "./Movie.scss";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "../../images/not-found.jpg";
import { useEffect } from "react";
import { fetchMovie } from "../../redux/movieAction";
import { FiPlayCircle } from "react-icons/fi";


function Movie() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((items) => items.Movie.movie);

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch]);
  useEffect(() => {
    console.log(movie);
  }, [movie]);
  return (
    <div className="details">
      {movie && (
        <>
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : NotFound}
            alt=""
            className="details-img"
          />
          <div className="details-body">
            <h1>{movie.Title}</h1>
            <div className="details-body-date">
              <span>{movie.imdbRating * 10}%</span>
              <span>|</span>
              <span>{movie.Released}</span>
              <span>|</span>
              <span>{movie.Actors}</span>
            </div>
            <p className="details-body-content">{movie.Plot}</p>
            <h3 className="h3-1">Long time no spree</h3>
            <div className="details-body-more">
              <div className="left">
                <h3 className="h3-2">Director</h3>
                <span className="span-2">{movie.Director}</span>
              </div>
              <div className="right">
                <h3 className="h3-2">Country</h3>
                <span className="span-2">{movie.Country}</span>
              </div>
            </div>
            <button className="btn">
              <FiPlayCircle className="icons"/>
              <span>Play Trailer</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Movie;
