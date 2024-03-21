const MovieCastListItem = ({ imageUrl, name, character }) => {
  return (
    <div>
      <img src={imageUrl} alt={name} width="150" />
      <h3>{name}</h3>
      {character !== "" && <p>Character: {character}</p>}
    </div>
  );
};

export default MovieCastListItem;
