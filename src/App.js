import React, { useState, useEffect } from "react";
import "./App.css";
import { Homepage } from "./pages/homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUp";
import { auth } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const authentication = async () => {
      await auth.onAuthStateChanged(user => {
        setCurrentUser(user);
        console.log(user)
      });
    };
    authentication();
  });
  return (
    <div>
      <Header currentUser={currentUser}  />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/crown-clothing" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
