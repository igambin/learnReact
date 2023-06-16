import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const onLogoutHandler = (event) => {
    dispatch(authActions.logout());
  };

  const headerContent = (isAuthenticated && (
    <nav>
      <ul>
        <li>
          <a href="/">My Products</a>
        </li>
        <li>
          <a href="/">My Sales</a>
        </li>
        <li>
          <button onClick={onLogoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  )) || <nav></nav>;

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {headerContent}
    </header>
  );
};

export default Header;
