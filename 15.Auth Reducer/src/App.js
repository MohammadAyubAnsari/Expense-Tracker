import Counter from "./components/Counter";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      {/* <Counter> */}
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      {/* </Header> */}
      <Counter />
    </Fragment>
  );
}

export default App;
