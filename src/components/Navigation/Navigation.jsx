import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const bildLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

const Navigation = () => {
  return (
    <div className={css.navigation}>
      <NavLink to="/" className={bildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={bildLinkClass}>
        Movies
      </NavLink>
    </div>
  );
};

export default Navigation;
