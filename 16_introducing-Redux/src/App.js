import { Fragment } from "react";
import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const mainContent = isAuthenticated ? <UserProfile /> : <Auth />;

  return (
    <Fragment>
      <Header />
      {mainContent}
      <Counter />
    </Fragment>
  );
}

export default App;
