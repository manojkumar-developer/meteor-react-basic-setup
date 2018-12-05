/* AppContainer */
/** ****************************** Import packages *************************** */
import React from "react";
import { Router, Switch } from "react-router-dom";

/** ****************************** Import containers *************************** */
import Header from "/imports/ui/containers/Header";
import Footer from "/imports/ui/containers/Footer";

/** ****************************** Import pages **************************** */
import Home from "/imports/ui/pages/Home";
import NotFound from "/imports/ui/pages/Not-Found";

/** ****************************** Import libraries **************************** */
import History from "/imports/utils/History";
import PropsRoute from "/imports/utils/PropsRoute";

const App = props => (
  <Router history={History}>
    <div>
      <PropsRoute component={Header} {...props} />
      <Switch>
        <PropsRoute exact path="/" component={Home} {...props} />
        <PropsRoute component={NotFound} {...props} />
      </Switch>
      <PropsRoute component={Footer} {...props} />
    </div>
  </Router>
);

export default App;
