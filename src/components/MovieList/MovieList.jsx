import { Link } from "react-router-dom";

const MovieList = ({ moviesList }) => {
  return (
    <ul>
      {moviesList !== null &&
        Array.isArray(moviesList) &&
        moviesList.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
