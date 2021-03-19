import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { HOSTURL } from "../../hostURL";
const mapStateToProps = (state) => {
  return {
    //   authtoken: state.authtoken,
    token: state.token,
  };
};

const AddArticle = (props) => {
  const [picstate, setpicstate] = useState(null);
  const [detail, setdetail] = useState({
    blog_title: "",
    blog_content: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    formdata.append("blog_title", detail.blog_title);
    formdata.append("blog_content", detail.blog_content);
    formdata.append("blog_author", props.token.id);
    formdata.append("blog_image", picstate);

    const datas = formdata.get("blog_image");
    if (datas.name === "") {
      formdata.delete("blog_image");
    }
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(`${HOSTURL}blog/blog_create/`, formdata, header)
      .then((res) => {
        props.history.push("/");
      })
      .catch((err) => {
        props.history.push("/");
      });
    formdata.forEach((item, i) => {
      console.log(item);
      console.log(i);
    });
  };

  return (
    <div className="container my-4">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="input-div mb-2">
          <input
            className="form-control"
            type="file"
            id="blog_image"
            name="blog_image"
            onChange={(event) => {
              setpicstate(event.target.files[0]);
            }}
          />
        </div>
        <div className="input-div mb-2">
          <input
            className="form-control"
            type="text"
            name="blog_title"
            placeholder="Enter Article Title"
            value={detail.blog_title}
            onChange={(event) => {
              setdetail({
                ...detail,
                blog_title: event.target.value,
              });
            }}
          />
        </div>
        <div className="input-div mb-2">
          <textarea
            placeholder="Enter Article Details"
            className="form-control"
            name="blog_content"
            value={detail.blog_content}
            onChange={(event) => {
              setdetail({
                ...detail,
                blog_content: event.target.value,
              });
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-outline-info mx-auto my-3 w-100 btncolor"
        >
          Add Article
        </button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps)(AddArticle);
