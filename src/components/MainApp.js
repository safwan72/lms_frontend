import React from "react";
import { connect } from "react-redux";
import MainBody from "./Body/MainBody";
import Header from "./Header/Header";
import * as actions from "./redux/actioncreator";

const mapDispatchToProps = (dispatch) => {
  return {
    authcheck: () => dispatch(actions.authcheck()),
  };
};
class MainApp extends React.Component {
  componentDidMount() {
    this.props.authcheck();
  }
  render() {
    return (
      <div>
        <Header />
        <MainBody />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(MainApp);
