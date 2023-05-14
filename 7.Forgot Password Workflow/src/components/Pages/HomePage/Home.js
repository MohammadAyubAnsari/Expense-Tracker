import "./Home.css";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";

import { AppContext } from "../../Context/AppContext";

function Home() {
  const ctx = useContext(AppContext);
  const params = useParams();
  const navTo = useNavigate();

  console.log(`params is ${params.idToken}`);
  console.log(ctx.idToken);

  if (params.idToken !== ctx.idToken) {
    return <p> Page Not Founnd !</p>;
  }

  const logoutHandler = () => {
    localStorage.removeItem("idToken", "");
    ctx.setIsLoggedIn(false);
    ctx.setidToken(null);
    navTo("/");
  };

  return (
    <div>
      <div className="welcome">
        Welcome To Your Expense Tracker !!!
        <button className="button-logout" onClick={logoutHandler}>
          Logout
        </button>
        <button
          className="login-card"
          onClick={() => navTo(`/profile/${ctx.idToken}`)}
        >
          {" "}
          Your Profile Is Incomplete ! Complete Now{" "}
        </button>
      </div>
    </div>
  );
}

export default Home;
