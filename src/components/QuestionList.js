import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setPage}) {


  function handleSetPage(){
    setPage("List")
    setPage("Form")
  }
 let count = 1;
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) =>{
      return <QuestionItem handleSetPage={handleSetPage} 
      key={question.id} 
      question={question}
      questionNumbering = {count++}/>
      })
      }
      
      </ul>
      
    </section>
  );
}

export default QuestionList;
