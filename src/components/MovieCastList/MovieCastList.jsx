import MovieCastListItem from "../MovieCastListItem/MovieCastListItem";

const MovieCastList = ({ cast }) => {
  return (
    <ul>
      {cast.map(({ cast_id, profile_path, name, character }) => {
        const imageUrl = `https://image.tmdb.org/t/p/w500${profile_path}`;
        return (
          <li key={cast_id}>
            <MovieCastListItem
              imageUrl={imageUrl}
              name={name}
              character={character}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default MovieCastList;
