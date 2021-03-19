import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOSTURL } from "../../hostURL";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const TakeQuizDetail = (props) => {
  const [questions, setquestions] = useState([]);
  useEffect(() => {
    async function getquestions() {
      const request = await axios.get(
        `${HOSTURL}work2/studentques/${props.match.params.id}/`
      );
      setquestions(request.data);
    }
    getquestions();
  }, [props.match.params.id]);
  let show = null;
  if (questions !== null && questions.length !== 0) {
    show = questions.map((item, i) => {
      return (
        <form
          key={i}
          className="my-3"
          onSubmit={(e) => {
            let value = null;
            const a = document.getElementsByName(`${item.id}`);
            a.forEach((items) => {
              items.disabled = true;
              if (items.checked) {
                value = items.value;
              }
            });
            const header = {
              headers: {
                "Content-Type": "application/json",
              },
            };
            const newdata = {
              text: value,
              question: item.id,
              answered_by: props.token.id,
            };
            axios
              .post(`${HOSTURL}work2/answer_quiz/`, newdata, header)
              .then((res) => {})
              .catch((err) => {
                props.history.goBack();
              });
            e.preventDefault();
          }}
        >
          <p>
            {i + 1}. {item.ques_title}
          </p>
          <input
            type="radio"
            id={item.option1}
            name={item.id}
            value={item.option1}
          />
          <label htmlFor={item.option1}>&nbsp;{item.option1}</label>
          <br></br>
          <input
            type="radio"
            id={item.option2}
            name={item.id}
            value={item.option2}
          />
          <label htmlFor={item.option2}>&nbsp;{item.option2}</label>
          <br></br>
          <input
            type="radio"
            id={item.option3}
            name={item.id}
            value={item.option3}
          />
          <label htmlFor={item.option3}>&nbsp;{item.option3}</label>
          <br></br>
          <input
            type="radio"
            id={item.option4}
            name={item.id}
            value={item.option4}
          />
          <label htmlFor={item.option4}>&nbsp;{item.option4}</label>
          <br></br>
          <button type="submit" className="btn btn-info" name={item.id}>
            Submit Answer
          </button>
          <p>Submit Your Answer First to get Grade........</p>
        </form>
      );
    });
  }
  return (
    <div className="container my-4">
      <div>
        {show}
        <button
          type="submit"
          className="btn btn-success btn-lg mt-5"
          onClick={() => {
            const data = {
              quiz: props.match.params.id,
              taken_by: props.token.id,
            };
            const header = {
              headers: {
                "Content-Type": "application/json",
              },
            };
            axios
              .post(`${HOSTURL}work2/graded_quiz/`, data, header)
              .then((res) => {
                props.history.goBack();
              })
              .catch((err) => {
                props.history.goBack();
              });
          }}
        >
          Get Grade
        </button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(TakeQuizDetail);
