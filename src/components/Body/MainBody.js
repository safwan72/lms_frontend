import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import Login from "./Authorization/Login";
import Signup from "./Authorization/Signup";
import Home from "./Home";
import Profile from "./Profile";
import Quiz from "./Quiz";
import Logout from "./Authorization/Logout";
import QuizDetail from "./QuizDetail";
import TakeQuiz from "./StudentView/TakeQuiz";
import TakeQuizDetail from "./StudentView/TakeQuizDetail";
import GradedQuiz from "./StudentView/GradedQuiz";
import ArticleDetail from "./Articles/ArticleDetail";
import AddArticle from "./Articles/AddArticle";
const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

class MainBody extends Component {
  render() {
    let show = null;
    if (this.props.token) {
      show = (
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/quiz" exact component={Quiz} />
          <Route path="/article/:name" exact component={AddArticle} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/quiz_detail/:id" exact component={QuizDetail} />
          <Route path="/article_detail/:str" exact component={ArticleDetail} />
          <Route
            path="/take_quiz_detail/:id"
            exact
            component={TakeQuizDetail}
          />
          <Route path="/take_quiz" exact component={TakeQuiz} />
          <Route path="/graded_quiz" exact component={GradedQuiz} />
          <Redirect to="/" />
        </Switch>
      );
    } else {
      show = (
        <Switch>
          <Route path="/" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return <div>{show} </div>;
  }
}

export default connect(mapStateToProps)(MainBody);
