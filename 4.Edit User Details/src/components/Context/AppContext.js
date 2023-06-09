import React, { useState } from "react";

export const AppContext = React.createContext({
  idToken: "",
  isLoggedIn: false,
  email: "",
  displayName: "",
  displayImage: "",
  setEmail: () => {},
  setDisplayName: () => {},
  setDisplayImage: () => {},
  setidToken: () => {},
  setIsLoggedIn: () => {},
});

function ContextProvider(props) {
  const useridToken = localStorage.getItem("idToken")
    ? localStorage.getItem("idToken")
    : "";
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [idToken, setidToken] = useState(useridToken);

  const [email, setEmail] = useState("youremail@email.com");
  const [displayName, setDisplayName] = useState("Display Name");
  const [displayImage, setDisplayImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKo76YVrnnPieB27rFfO4k43aaWCgI0o4Dr3WC8TNVvU4wDS-s7c1vcXk6CpO5S9zOtuA&usqp=CAU"
  );

  const ctxObj = {
    idToken: idToken,
    isLoggedIn: isLoggedIn,
    setidToken: setidToken,
    setIsLoggedIn: setIsLoggedIn,

    email: email,
    displayName: displayName,
    displayImage: displayImage,
    setEmail: setEmail,
    setDisplayName: setDisplayName,
    setDisplayImage: setDisplayImage,
  };
  return (
    <AppContext.Provider value={ctxObj}>{props.children}</AppContext.Provider>
  );
}

export default ContextProvider;
