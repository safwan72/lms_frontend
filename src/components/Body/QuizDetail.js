import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { HOSTURL } from "../hostURL";
import { connect } from "react-redux";

// http://127.0.0.1:8000/work/individualquiz/7/

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const QuizDetail = (props) => {
  // const [myquiz, setmyquiz] = useState({});
  const [quizquestions, setquizquestions] = useState([]);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    const newdata = {
      ...data,
      quiz: props.match.params.id,
    };
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(`${HOSTURL}work2/question/`, newdata, header)
      .then((res) => {
        props.history.goBack();
      })
      .catch((err) => {
        props.history.goBack();
      });
    e.target.reset();
  };
  useEffect(() => {
    async function getquestions() {
      const request = await axios.get(
        `${HOSTURL}work2/question/${props.match.params.id}/`
      );
      setquizquestions(request.data);
    }

    // async function getData() {
    //   const request = await axios.get(
    //     `${HOSTURL}work2/individualquiz/${props.match.params.id}/`
    //   );
    //   setmyquiz(request.data);
    // }
    // getData();
    getquestions();
  }, [props.match.params.id]);
  let show = null;
  if (quizquestions !== null && quizquestions.length !== 0) {
    show = quizquestions.map((item, i) => {
      return (
        <li className="list-group-item" key={i}>
          {item.ques_title} &nbsp;&nbsp;&nbsp;&nbsp; Answer :: {item.answer}
        </li>
      );
    });
  } else {
    show = <h2> Add Questions To Your Quiz </h2>;
  }
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group">{show}</ul>
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="question"
              type="text"
              ref={register({ required: true })}
              className="form-control mb-3"
              placeholder="Add Your Question"
            />
            {errors.question && (
              <span className="mb-3 text-danger d-block">
                This field is required
              </span>
            )}
            <input
              name="answer"
              type="text"
              ref={register({ required: true })}
              className="form-control mb-3"
              placeholder="Enter The Answer Of The Question"
            />
            {errors.answer && (
              <span className="mb-3 text-danger d-block">
                This field is required
              </span>
            )}
            <input
              name="option1"
              type="text"
              ref={register({ required: true })}
              className="form-control mb-3"
              placeholder="Enter First Option"
            />
            {errors.option1 && (
              <span className="mb-3 text-danger d-block">
                This field is required
              </span>
            )}
            <input
              name="option2"
              type="text"
              ref={register({ required: true })}
              className="form-control mb-3"
              placeholder="Enter Second Option"
            />
            {errors.option2 && (
              <span className="mb-3 text-danger d-block">
                This field is required
              </span>
            )}
            <input
              name="option3"
              type="text"
              ref={register({ required: true })}
              className="form-control mb-3"
              placeholder="Enter Third Option"
            />
            {errors.option3 && (
              <span className="mb-3 text-danger d-block">
                This field is required
              </span>
            )}
            <input
              name="option4"
              type="text"
              ref={register({ required: true })}
              className="form-control mb-3"
              placeholder="Enter Fourth Option"
            />
            {errors.option4 && (
              <span className="mb-3 text-danger d-block">
                This field is required
              </span>
            )}
            <input type="submit" className="btn btn-success" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(QuizDetail);
