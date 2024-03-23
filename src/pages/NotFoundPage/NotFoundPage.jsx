import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");
  return (
    <div>
      <Link className={css.backLink} to={backLinkRef.current}>
        Go back
      </Link>
      <p className={css.text}>
        We could not find the page you were looking for. It may be misspelled or
        no longer available.
      </p>
      <p className={css.span}>404</p>
    </div>
  );
};

export default NotFoundPage;
