import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actioncreator";
import { HOSTURL } from "../hostURL";
// import Moment from "moment";

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadprofile: (token, role) => dispatch(actions.loadprofile(token, role)),
  };
};

class Home extends Component {
  state = {
    articles: [],
  };
  async componentDidMount() {
    if (this.props.token !== null) {
      const role = {
        is_student: this.props.token.is_student,
        is_teacher: this.props.token.is_teacher,
      };
      await this.props.loadprofile(this.props.token.id, role);
    }
    const request = await axios.get(`${HOSTURL}blog/blog/`);
    this.setState({
      articles: request.data,
    });
  }

  render() {
    let show = null;
    if (this.state.articles !== null && this.state.articles.length !== 0) {
      show = this.state.articles.map((item, i) => {
        return (
          <div
            className="col mb-2"
            key={i}
            onClick={() => {
              this.props.history.push({
                pathname: `article_detail/${item.blog_title}`,
                state: { url: item.url },
              });
            }}
            style={{ cursor: "pointer" }}
          >
            <div className="card">
              <div
                className="card-head px-2"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <img
                  src={item.blog_author?.profile_pic}
                  alt={item.blog_title}
                  width="30"
                  height="30"
                  style={{ borderRadius: "50%" }}
                />
                <h5 className="text-center my-3">{item.blog_title}</h5>
              </div>
              <img
                src={item.blog_image}
                className="card-img-top"
                alt={item.blog_title}
              />
              <div className="card-body">
                <p className="card-text">
                  {`${item.blog_content}`.substr(0, 80) + "......."}
                </p>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <div className="container p-4">
        <div className="row row-cols-1 row-cols-md-2 g-4">{show}</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
