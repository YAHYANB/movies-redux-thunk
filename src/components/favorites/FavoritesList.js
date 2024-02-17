import { useDispatch, useSelector } from "react-redux";
import NotFound from "../../images/not-found.jpg";
import "./Favorites.scss";
import { FaHeartCircleMinus } from "react-icons/fa6";

function FavoritesList() {
  const dispatch = useDispatch()
  const state = useSelector((items) => items.Favorites);
  const handleMinus = (id) => {
    dispatch({type:'minus-favorites', payload: id})
  }
  return (
    <div className="movies-f">
      <h2>Favorites List</h2>
      <div className="list-f">
        {state.favorites &&
          state.favorites.map((movie, i) => (
            <div className="card-f" key={i}>
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : NotFound}
                alt={movie.Title}
              />
              <div className="card-body-f">
                <h3>{movie.Title}</h3>
                <span>
                  {movie.Type}: {movie.Year}
                </span>
                <br />
                <div className="minus">
                  <span>count: {movie.count}</span>
                  <FaHeartCircleMinus
                    className="icone"
                    onClick={() => handleMinus(movie.imdbID)}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FavoritesList;
