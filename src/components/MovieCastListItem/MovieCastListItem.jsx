import css from "./MovieCastListItem.module.css";

const MovieCastListItem = ({ imageUrl, name, character }) => {
  return (
    <div className={css.wrap}>
      <img className={css.img} src={imageUrl} alt={name} width="150" />
      <h3>{name}</h3>
      {character !== "" && <p>Character: {character}</p>}
    </div>
  );
};

export default MovieCastListItem;
