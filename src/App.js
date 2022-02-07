import React, {Component} from 'react';
import LandingPage from "./components/landingpage/LandingPage";
import SignUp from "./components/signup/SignUp";
import{BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component{
  render(){
  return (<Router>
          <div>
              <Switch>
                  <Route exact path={"/"}>
                      <LandingPage/>
                  </Route>
                  <Route path={"/sign-up"}>
                      <SignUp/>
                  </Route>
              </Switch>

          </div>
      </Router>
  );
}
}

export default App;
