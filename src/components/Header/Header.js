import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
const mapStateToProps = (state) => {
  return {
    token: state.token,
    profile: state.profile,
  };
};

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              C-LMS
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                {this.props.token ? (
                  <>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item mx-2">
                      <NavLink className="nav-link" to="/profile">
                        <img
                          src={this.props.profile?.profile_pic}
                          style={{ width: "30px", height: "30px" }}
                          className="rounded-circle"
                          alt={this.props.token?.username}
                          title={`${this.props.token?.username}'s profile`}
                        />
                        &nbsp;&nbsp;
                        {this.props.token?.username}
                      </NavLink>
                    </li>
                    {this.props.token.is_teacher ? (
                      <>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/quiz">
                            Quiz
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            className="nav-link"
                            to={`/article/${this.props.token?.username}`}
                          >
                            Add Article
                          </NavLink>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/graded_quiz">
                            Graded Quizes
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/take_quiz">
                            Quizes
                          </NavLink>
                        </li>
                      </>
                    )}
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/logout">
                        Logout
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        Signup
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/login">
                        Login
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Header);
