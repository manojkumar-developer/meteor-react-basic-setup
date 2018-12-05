/*
   Menu

 */
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Session } from "meteor/session";

/** ****************************** Import components *************************** */
import Button from "/imports/ui/components/FormElements/Button";
import MainMenu from "/imports/ui/components/MainMenu";

/** ****************************** Import Constants **************************** */
import { MyAccountConstants } from "/imports/constants/menu";

/** ****************************** Import libraries **************************** */
import { getLocalUser, deleteLocalUser } from "/imports/utils/auth";
import History from "/imports/utils/History";

class Menu extends Component {
  _checkLogin = () => {
    History.push("/login");
  };

  _displayDefaultMenu = () => (
    <li className="nav-item">
      <Button
        type="button"
        title={MyAccountConstants.myAccountButton.btnText}
        icon="user-white"
        btnClass="nav-link btn btn-custom"
        onClick={this._checkLogin}
      />
    </li>
  );

  _displayDashBoard = () => (
    <li className="nav-item">
      <NavLink
        to="/account/dashboard"
        className="nav-link dashboard-link"
        activeclassname="active"
      >
        {MyAccountConstants.dashboard.name}
      </NavLink>
    </li>
  );

  _displayUserMenu = currentUser => (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle text-capitalize"
        activeclassname="active"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
      >
        <img
          className="rounded-circle mr-2"
          src={currentUser.profileImage || "/image/profile/default.png"}
          width="50"
          height="50"
          alt=""
        />
        {currentUser ? currentUser.lastName : null}
        {", "}
        {currentUser ? currentUser.firstName : null}
      </a>
      <div className="dropdown-menu">
        <NavLink to="/settings/profile" className="dropdown-item">
          {MyAccountConstants.settings.title}
        </NavLink>
        <NavLink
          to="#"
          className="dropdown-item"
          onClick={() => {
            deleteLocalUser();
            History.push("/login");
          }}
        >
          {MyAccountConstants.logout.title}
        </NavLink>
      </div>
    </li>
  );

  render() {
    const { currentUser } = this.props;
    return (
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <MainMenu />
        <ul className="navbar-nav profile-menu">
          {!currentUser ? this._displayDefaultMenu() : null}
          {currentUser ? this._displayDashBoard() : null}
          {currentUser ? this._displayUserMenu(currentUser) : null}
        </ul>
      </div>
    );
  }
}

Menu.defaultProps = {
  currentUser: []
};

Menu.propTypes = {
  currentUser: PropTypes.object
};

const MenuContainer = withTracker(() => {
  const currentUser = getLocalUser();
  if (currentUser) {
    Session.set("currenUserId", currentUser._id);
    Session.set("currenUser", currentUser);
  }
  return {
    currentUser
  };
})(Menu);

export default withRouter(MenuContainer);
