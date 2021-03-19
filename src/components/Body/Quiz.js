import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { HOSTURL } from "../hostURL";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const Quiz = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    const newdata = {
      title: data.title,
      creator: props.token.id,
    };
    const url = `${HOSTURL}work2/quiz/`;
    // return props.history.push(`/question/${data.title}`);
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(url, newdata, header)
      .then((res) => {
        props.history.push(`/quiz_detail/${res.data.id}`);
      })
      .catch((err) => {
        console.log(err.response);
      });
    e.target.reset();
  };

  const [quizes, setquizes] = useState([]);
  useEffect(() => {
    async function getData() {
      const request = await axios.get(
        `${HOSTURL}work2/quiz/${props.token.id}/`
      );
      setquizes(request.data);
    }
    getData();
  }, [props.token.id]);
  let show = null;
  if (quizes !== null && quizes.length !== 0) {
    show = quizes.map((item, i) => {
      return (
        <div
          className="card mb-3"
          key={i}
          onClick={() => props.history.push(`/quiz_detail/${item.id}`)}
          style={{ cursor: "pointer" }}
        >
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">Total Questions :{item.question_count}</p>
          </div>
        </div>
      );
    });
  } else {
    show = <h2>No Quizes Yet</h2>;
  }
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-md-6">{show}</div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="title"
              type="text"
              ref={register({ required: true })}
              className="form-control mb-3"
              placeholder="Add Your Quiz Title"
            />
            {errors.title && (
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

export default connect(mapStateToProps)(Quiz);
