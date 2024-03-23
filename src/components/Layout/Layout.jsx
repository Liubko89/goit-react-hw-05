import { lazy } from "react";
import css from "./Layout.module.css";

const Navigation = lazy(() => import("../Navigation/Navigation"));

const Layout = ({ children }) => {
  return (
    <>
      <header className={css.header}>
        <Navigation />
      </header>

      <main>{children}</main>
    </>
  );
};

export default Layout;
