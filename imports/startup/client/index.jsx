/* 

Component : client

*/
/** ****************************** Import Packages *************************** */
import { Meteor } from "meteor/meteor";
import React from "react";
import { render } from "react-dom";

/** ****************************** Import containers *************************** */
import App from "/imports/ui/containers/App";

Meteor.startup(() => {
  render(
      <App />,
    document.getElementById("app-root")
  );
});
