import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ moviesList }) => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/" && (
        <h1 className={css.heading}>Underrated films you should not miss</h1>
      )}
      <ul className={css.list}>
        {moviesList !== null &&
          Array.isArray(moviesList) &&
          moviesList.map(
            ({ id, title, poster_path, release_date, vote_average }) => {
              const urlImage = `https://image.tmdb.org/t/p/w500${poster_path}`;
              return (
                <li className={css.listItem} key={id}>
                  <Link
                    className={css.link}
                    state={location}
                    to={`/movies/${id}`}
                  >
                    <div className={css.imageContainer}>
                      {poster_path !== null ? (
                        <img
                          className={css.image}
                          src={urlImage}
                          alt={title}
                          width="150"
                        />
                      ) : (
                        <div className={css.changeImg}>{title}</div>
                      )}
                    </div>
                    <div className={css.descrContiner}>
                      <h2 className={css.title}>{title}</h2>
                      <p>
                        {release_date && release_date.slice(0, 4)}
                        {release_date && vote_average !== 0 && ", "}
                        {vote_average !== 0 &&
                          vote_average &&
                          "rating: " + vote_average.toFixed(1)}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            }
          )}
      </ul>
    </div>
  );
};

export default MovieList;
