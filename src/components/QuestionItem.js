import React from "react";

function QuestionItem({ question, handleSetPage, questionNumbering }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteBtn(e) {
    fetch(`http://localhost:4000/questions/${e.target.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }).then(response => response.json())
  .then (data => handleSetPage())
}


function handleChange (e){
  fetch(`http://localhost:4000/questions/${e.target.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({correctIndex})
  }).then(response => response.json())
  .then(data => {console.log(data); handleSetPage()})
}

 

  return (
    <li>
      <h4>Question {questionNumbering}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleChange} id={id} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteBtn} id={id}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
