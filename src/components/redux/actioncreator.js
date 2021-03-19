import * as action from "./actiontypes";
import axios from "axios";
import * as hosturl from "../hostURL";
import jwt_decode from "jwt-decode";
export const addquestionstate = (question) => {
  return {
    type: action.ADDQUESTOSTATE,
    payload: question,
  };
};

export const removequestionstate = () => {
  return {
    type: action.REMOVEQUESTIONS,
  };
};

export const authloading = (bool) => {
  return {
    type: action.AUTHLOADING,
    payload: bool,
  };
};

export const authuser = (data, mode) => (dispatch) => {
  let url = "";
  let mydata = {
    user: {
      ...data,
    },
  };
  if (mode === "Student") {
    url = `${hosturl.HOSTURL}auth/newstudent/`;
    mydata = {
      user: {
        ...mydata.user,
        is_student: true,
      },
    };
  } else {
    url = `${hosturl.HOSTURL}auth/newteacher/`;
    mydata = {
      user: {
        ...mydata.user,
        is_teacher: true,
      },
    };
  }
  const header = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post(url, mydata, header)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const authsuccess = (data, authtoken) => {
  return {
    type: action.AUTHSUCCESS,
    payload: {
      token: data,
      authtoken: authtoken,
    },
  };
};

export const authstore = (token) => (dispatch) => {
  const tok = token;
  const decoded_token = jwt_decode(token);
  const data = {
    email: decoded_token.email,
    id: decoded_token.user_id,
    username: decoded_token.username,
    token: decoded_token.jti,
    is_teacher: decoded_token.is_teacher,
    is_student: decoded_token.is_student,
  };
  const exptime = new Date(decoded_token.exp * 1000);
  localStorage.setItem("data", JSON.stringify(data));
  localStorage.setItem("authtoken", JSON.stringify(tok));
  localStorage.setItem("exp_time", JSON.stringify(exptime));
  dispatch(authsuccess(data, tok));
};

export const logout = () => {
  localStorage.removeItem("data");
  localStorage.removeItem("exp_time");
  localStorage.removeItem("authtoken");
  return {
    type: action.AUTHLOGOUT,
  };
};

export const authcheck = () => (dispatch) => {
  let data = localStorage.getItem("data");
  let authtoken = localStorage.getItem("authtoken");
  data = JSON.parse(data);
  if (data) {
    const expiretime = JSON.parse(localStorage.getItem("exp_time"));
    if (expiretime <= new Date()) {
      dispatch(logout());
    } else {
      dispatch(authsuccess(data, authtoken));
    }
  } else {
    console.log("logout");
    dispatch(logout());
  }
};

export const profileloading = () => {
  return {
    type: action.PROFILELOADING,
  };
};

export const profileloadingsuccess = (profile) => {
  return {
    type: action.PROFILELOADINGSUCCESS,
    payload: profile,
  };
};

export const loadprofile = (id, role) => (dispatch) => {
  dispatch(profileloading());
  let url = null;
  if (role.is_student) {
    url = `${hosturl.HOSTURL}auth/studentupdate/${id}`;
  }
  if (role.is_teacher) {
    url = `${hosturl.HOSTURL}auth/teacherupdate/${id}`;
  }
  // const header = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };
  axios
    .get(url)
    .then((res) => {
      dispatch(profileloadingsuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
