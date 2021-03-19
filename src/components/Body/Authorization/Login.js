import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { HOSTURL } from "../../hostURL";
import axios from "axios";
import * as actions from "../../redux/actioncreator";
import Spinner from "../../Utility/Spinner/Spinner";
const mapStateToProps = (state) => {
  return {
    authloading: state.authloading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authstore: (token) => dispatch(actions.authstore(token)),
  };
};

const Login = (props) => {
  const { register, handleSubmit } = useForm();

  const loginfunc = (data) => {
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const url = `${HOSTURL}auth/token/`;
    axios
      .post(url, data, header)
      .then((res) => {
        props.authstore(res.data.access);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (data, e) => {
    const submitdata = {
      email: data["email"],
      password: data["password"],
    };
    loginfunc(submitdata);
    e.target.reset();
  };

  return (
    <div className="container my-3">
      {props.authloading ? (
        <Spinner />
      ) : (
        <div>
          <h2 className="text-center mb-4"> Login </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="email"
              type="email"
              ref={register}
              className="form-control mb-3"
              placeholder="Enter Your Email"
            />
            <input
              name="password"
              type="password"
              ref={register}
              className="form-control mb-3"
              placeholder="Input Your Password"
            />

            <input type="submit" value="Login" className="btn btn-secondary" />
          </form>
          <Link to="/"> Dont Have An Account ? Sign Up </Link>
        </div>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
