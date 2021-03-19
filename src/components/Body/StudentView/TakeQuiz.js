import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOSTURL } from "../../hostURL";
// import Spinner from "../../Utility/Spinner/Spinner";
import Moment from "moment";
const TakeQuiz = (props) => {
  const [quizes, setquizes] = useState([]);
  useEffect(() => {
    async function getData() {
      const request = await axios.get(`${HOSTURL}work2/quiz/`);
      setquizes(request.data);
    }
    getData();
  }, []);
  let show = null;
  if (quizes !== null && quizes.length !== 0) {
    show = quizes.map((item, i) => {
      return (
        <div
          className="col mb-4"
          key={i}
          onClick={() => props.history.push(`/take_quiz_detail/${item.id}`)}
          style={{ cursor: "pointer" }}
        >
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
                Total Questions: {item.questions?.length}
              </p>
              <p className="card-text">
                Created :
                {Moment(item.quiz_created).format(`DD-MM-YYYY, HH:mm:ss`)}
              </p>
            </div>
          </div>
        </div>
      );
    });
  } else {
    show = (
      <div>
        <h1 className="text-center d-block w-100">Wait For More Quizes</h1>
      </div>
    );
  }
  return (
    <div className="container my-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
        {show}
      </div>
    </div>
  );
};

export default TakeQuiz;
