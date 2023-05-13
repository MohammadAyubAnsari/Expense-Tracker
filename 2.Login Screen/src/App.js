import SignupForm from "./components/LoginSignUp/Sign Up";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignupForm />}></Route>
        <Route path="/home/:idToken" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
