/**
 * This component provides the header for the application, and the login modal.
 * The login modal is an uncontrolled form, for simplicity and because we do not really
 * want to retain the password in the state - it is retained only as long as required
 * for authentication.
 */

import React, { Component } from "react";
import {
  Button,
  Collapse,
  Form,
  Input,
  Modal,
  ModalBody,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavbarToggler
} from "reactstrap";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { baseUrl } from "../../shared/baseUrl";
import "./HeaderComponent.scss";

const LoginButton = ({ label, handler }) => {
  return (
    <Button outline onClick={handler}>
      <span className="fa fa-sign-in fa-lg"> {label} </span>
    </Button>
  );
};

const loginSettings = (label, handler, confirmation) => {
  return {
    label,
    handler,
    confirmation
  };
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isConfirmOpen: false,
      isLoggedIn: false,
      isLoginModalOpen: false,
      isNavOpen: false,
      userRole: null, // place holder
      userName: null
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    this.toggleModal(); // Close the modal
    // alert("Username: " + this.userName.value + " Password: " + this.password.value);
    this.setState({
      isConfirmOpen: true,
      isLoggedIn: true,
      userName: this.userName.value
    });
    setTimeout(() => {
      this.setState({ isConfirmOpen: false });
    }, 1500);
  }

  handleLogout(event) {
    event.preventDefault();
    this.setState({ isConfirmOpen: true, isLoggedIn: false, userName: null });
    setTimeout(() => {
      this.setState({ isConfirmOpen: false });
    }, 1500);
  }

  toggleModal() {
    this.setState({ isLoginModalOpen: !this.state.isLoginModalOpen });
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    const { isLoggedIn } = this.state;

    // Note: the confirmation message on settings is a little tricky due to timing.
    // After a login/logout, we will changing the button settings before showing
    // the confirmation in render -> the confirmation messages need to be
    // with the just changed login state, not the new button render state for what
    // a user can do next.
    const loginBtnSettings = isLoggedIn
      ? loginSettings(
          "Logout",
          this.handleLogout,
          `Welcome to the garden, ${this.state.userName}.`
        )
      : loginSettings("Login", this.toggleModal, "Bye for now.");

    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto">
              <img
                id="hdr-logo"
                src={baseUrl + "assets/images/logo-nav-brand.png"}
                alt="flower logo"
              />
            </NavbarBrand>

            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/blog">
                    <span className="fa fa-home fa-lg" />
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/recipeTypes">
                    <span className="fa fa-list fa-lg" />
                    Recipes
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/feedback">
                    <span className="fa fa-home fa-lg" />
                    Feedback
                  </NavLink>
                </NavItem>
              </Nav>

              <Nav className="ml-auto" navbar>
                <NavItem>
                  <LoginButton
                    label={loginBtnSettings.label}
                    handler={loginBtnSettings.handler}
                  />
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>

        <Modal isOpen={this.state.isLoginModalOpen} toggle={this.toggleModal}>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <Input
                type="text"
                id="userName"
                name="userName"
                className="hdr-login-input"
                placeholder="User Name"
                innerRef={input => (this.userName = input)}
              />

              <Input
                type="password"
                id="password"
                name="password"
                className="hdr-login-input"
                placeholder="Password"
                innerRef={input => (this.password = input)}
              />

              <Button
                id="hdr-modal-login-btn"
                outline
                type="submit"
                value="submit"
              >
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>

        <Modal
          id="hdr-confirm-modal"
          isOpen={this.state.isConfirmOpen}
          toggle={this.handleConfirm}
        >
          <ModalBody id="hdr-confirm-modal-msg">
            {loginBtnSettings.confirmation}
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

LoginButton.propTypes = {
  label: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
};

export default Header;
