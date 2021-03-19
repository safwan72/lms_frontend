import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import * as actions from "../../redux/actioncreator";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    authloading: state.authloading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    auth: (data, mode) => dispatch(actions.authuser(data, mode)),
  };
};

const Signup = (props) => {
  const { register, handleSubmit } = useForm();
  const [mode, setmode] = useState("Student");
  const onSubmit = (data, e) => {
    const submitdata = {
      email: data["email"],
      username: data["username"],
      password: data["password"],
    };
    props.auth(submitdata, mode);
    e.target.reset();
  };

  const handlemode = () => {
    setmode(mode === "Student" ? "Teacher" : "Student");
  };
  return (
    <div className="container my-3">
      {props.authloading ? (
        <h2>Loading</h2>
      ) : (
        <div>
          <button className="btn btn-primary w-100 my-4" onClick={handlemode}>
            SIGNUP AS {mode === "Student" ? "Teacher" : "Student"}
          </button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="email"
              type="email"
              ref={register}
              className="form-control mb-3"
              placeholder="Enter Your Email"
            />
            <input
              name="username"
              type="text"
              ref={register}
              className="form-control mb-3"
              placeholder="Enter Your Username"
            />
            <input
              name="password"
              type="password"
              ref={register}
              className="form-control mb-3"
              placeholder="Input Your Password"
            />
            <input
              name="confirmpassword"
              type="password"
              ref={register}
              className="form-control mb-3"
              placeholder="Confirm Your Password"
            />
            <input
              type="submit"
              value={`SIGNUP AS ${mode}`}
              className="btn btn-secondary"
            />
          </form>
          <Link to="/login"> Already Have An Account ? Login </Link>
        </div>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
