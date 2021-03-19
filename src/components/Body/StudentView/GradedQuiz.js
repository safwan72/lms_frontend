import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOSTURL } from "../../hostURL";
import { connect } from "react-redux";
import Moment from "moment";

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const GradedQuiz = (props) => {
  const [graded, setgraded] = useState([]);
  useEffect(() => {
    async function getquestions() {
      const request = await axios.get(
        `${HOSTURL}work2/graded_quiz/${props.token.id}/`
      );
      setgraded(request.data);
    }
    getquestions();
  }, [props.token.id]);
  let show = null;
  if (graded !== null && graded.length !== 0) {
    show = graded.map((item, i) => {
      return (
        <div className="col mb-4" key={i}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{item.quiz?.title}</h5>
              <p className="card-text">
                Total Questions: {item.quiz?.question_count}
              </p>
              <p className="card-text">Marks: {item.marks}</p>
              <p className="card-text">
                Graded At :
                {Moment(item.quiz_graded).format(`DD-MM-YYYY, HH:mm:ss`)}
              </p>
            </div>
          </div>
        </div>
      );
    });
  } else {
    show = (
      <div>
        <h1> No Graded Quiz Yet</h1>
      </div>
    );
  }
  return (
    <div className="container my-3">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
        {show}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(GradedQuiz);
