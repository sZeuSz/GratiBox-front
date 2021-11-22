import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import PlansPage from "./Components/Plans/PlansPage";
import SignInPage from "./Components/SignIn/SignInPage";
import SignUpPage from "./Components/SignUp/SignUpPage";
import SubscribePlanPage from "./Components/SubscribePlan/SubscribePlanPage";
import SubscribePlanPageNext from "./Components/SubscribePlanNext/SubscribePlanPageNext";
import PlanContext from "./Contexts/PlanContext";
import UserContext from "./Contexts/UserContext";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import { getUserData } from "./Services/Login";
import { getPlanData } from "./Services/Plan";

function App() {

  const localUserData = getUserData();
  const localPlanData = getPlanData();
  const [userData, setUserData] = useState(localUserData);
  const [planData, setPlanData] = useState(localPlanData);
  
  useEffect(() => {
    setUserData(localUserData);
    setPlanData(localPlanData);
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <PlanContext.Provider value={{planData, setPlanData}}>
        <BrowserRouter>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/sign-in' component={SignInPage} exact />
              <Route path='/sign-up' component={SignUpPage} exact />
              <Route path='/plans' component={PlansPage} exact />
              <Route path='/subscribe-plan' component={SubscribePlanPage} exact />
              <Route path='/subscribe-plan/next' component={SubscribePlanPageNext} exact />
            </Switch>
            <GlobalStyle />
        </BrowserRouter>
      </ PlanContext.Provider>
    </UserContext.Provider>
  );
}

export default App;