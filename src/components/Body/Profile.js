import React, { useEffect, useState } from "react";
import * as actions from ".././redux/actioncreator";
import { connect } from "react-redux";
import axios from "axios";
import { HOSTURL } from ".././hostURL";
import Spinner from "../Utility/Spinner/Spinner";
const mapStateToProps = (state) => {
  return {
    authtoken: state.authtoken,
    token: state.token,
    profile: state.profile,
    profileloading: state.profileloading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadprofile: (token, role) => dispatch(actions.loadprofile(token, role)),
  };
};

const Profile = (props) => {
  const { token, profile, loadprofile } = props;
  const [picstate, setpicstate] = useState(null);
  const [full_namestate, setfull_namestate] = useState("");
  const [phonestate, setphonestate] = useState("");
  useEffect(() => {
    setpicstate(profile?.profile_pic);
    setfull_namestate(profile?.full_name);
    setphonestate(profile?.phone);
    async function getData() {
      if (token !== null) {
        const role = {
          is_student: token.is_student,
          is_teacher: token.is_teacher,
        };
        loadprofile(token.id, role);
      }
    }
    getData();
  }, [
    loadprofile,
    token,
    profile?.full_name,
    profile?.phone,
    profile?.profile_pic,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    formdata.append("full_name", full_namestate);
    // formdata.append("phone", phonestate);
    formdata.append("user", token.id);
    const datas = formdata.get("profile_pic");
    if (datas.name === "") {
      formdata.delete("profile_pic");
    }

    const role = {
      is_student: token.is_student,
      is_teacher: token.is_teacher,
    };
    let url = null;
    if (role.is_student) {
      url = `${HOSTURL}auth/studentupdate/${token.id}/`;
    }
    if (role.is_teacher) {
      url = `${HOSTURL}auth/teacherupdate/${token.id}/`;
    }
    axios
      .put(url, formdata)
      .then((res) => {
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <div>
      <h1 className="text-center my-3">Your Profile</h1>
      <div className="container my-4">
        {props.profileloading ? (
          <Spinner />
        ) : (
          <div>
            <div className="mx-auto text-center my-3">
              {profile ? (
                <img
                  src={picstate}
                  alt={profile?.full_name}
                  width="250"
                  height="250"
                  style={{ borderRadius: "50%" }}
                />
              ) : null}
            </div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="input-div mb-2">
                <input
                  className="form-control"
                  type="file"
                  id="profile_pic"
                  name="profile_pic"
                  // value={picstate}
                  onChange={(event) => {
                    setpicstate(event.target.files[0]);
                  }}
                />
              </div>
              <div className="input-div mb-2">
                <input
                  className="form-control"
                  type="text"
                  name="full_name"
                  value={full_namestate}
                  onChange={(event) => {
                    setfull_namestate(event.target.value);
                  }}
                />
              </div>
              <div className="input-div mb-2">
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  value={token?.username}
                  disabled
                />
              </div>
              <div className="input-div mb-2">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  value={token?.email}
                  disabled
                />
              </div>
              <div className="input-div mb-2"></div>
              <div className="input-div mb-2">
                <input
                  className="form-control"
                  type="number"
                  name="phone"
                  value={phonestate}
                  onChange={(event) => {
                    setphonestate(event.target.value);
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-outline-info mx-auto my-3 w-100 btncolor"
              >
                Update
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
