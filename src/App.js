import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignInPage from "./Components/SignIn/SignInPage";
import SignUpPage from "./Components/SignUp/SignUpPage";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
function App() {

  return(
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/sign-in' component={SignInPage} exact />
          {/* <Route path='/sign-up' component={SignUpPage} exact /> */}
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
  );
}

export default App;