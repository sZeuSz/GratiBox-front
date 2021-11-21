import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignInPage from "./Components/SignIn/SignInPage";
import SignUpPage from "./Components/SignUp/SignUpPage";
import UserContext from "./Contexts/UserContext";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import { getUserData } from "./Services/Login";
function App() {

  const localUserData = getUserData();
  const [userData, setUserData] = useState({ ...localUserData });

  useEffect(() => {
    setUserData({ ...localUserData });
  }, [localUserData]);

  return (
    <UserContext.Provider value={{userData, setUserData}}>
      <BrowserRouter>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/sign-in' component={SignInPage} exact />
            <Route path='/sign-up' component={SignUpPage} exact />
          </Switch>
          <GlobalStyle />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;