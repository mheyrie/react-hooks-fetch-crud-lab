import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const[questions, setQuestions] =useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(response => response.json())
    .then(questions => setQuestions(questions))
  }, [page])

  console.log(questions)

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm setPage={setPage} /> : <QuestionList questions={questions} />}
    </main>
  );
}

export default App;
