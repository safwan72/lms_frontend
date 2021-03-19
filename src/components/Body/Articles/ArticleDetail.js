import React, { useEffect, useState } from "react";
import axios from "axios";
import Comment from "./Comment";
// import Moment from "moment";

const ArticleDetail = (props) => {
  const [article, setarticle] = useState();
  useEffect(() => {
    async function getArticle() {
      if (props.location.state.url !== null) {
        const req = await axios.get(props.location.state.url);
        setarticle(req.data);
      }
    }
    getArticle();
  }, [props.location.state.url]);

  let show = null;
  if (article && article.comments !== null && article.comments.length != null) {
    show = article.comments.map((item) => {
      return (
        <li className="list-group-item" key={item.id}>
          {item.comment} ------- {item.commenter}
        </li>
      );
    });
  }

  return (
    <div className="container my-3">
      <h1 className="my-3 text-center">{article?.blog_title}</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src={article?.blog_image}
            alt={article?.blog_title}
            className="img-thumbnail"
          />
        </div>
        <div className="col-md-6">
          <ul className="list-group">{show}</ul>
          <Comment id={article?.id} />
        </div>
      </div>
      <div className="row my-4">
        <h5>{article?.blog_content}</h5>
      </div>
    </div>
  );
};

export default ArticleDetail;
