import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { HOSTURL } from "../../hostURL";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const Comment = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    const newdata = {
      ...data,
      blog: props.id,
      commenter: props.token?.username,
    };
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(`${HOSTURL}blog/comment/`, newdata, header)
      .then((res) => {
        e.target.reset();
      })
      .catch((err) => {
        e.target.reset();
      });
    e.preventDefault();
  };
  return (
    <div className="my-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="comment"
          type="text"
          ref={register({ required: true })}
          className="form-control mb-3"
          placeholder="Add Your Comment"
        />
        <input type="submit" className="btn btn-success" />
      </form>
    </div>
  );
};

export default connect(mapStateToProps)(Comment);
