import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

  const user = 1;
  const navigate = useNavigate()

  var questionList = [{
    id: 1,
    votes: 3,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questonBody: "It meant to be",
    questionTags: ["java", "node.js", "react"],
    userPosted: "mano",
    askedOn: "jan 1"
  },
  {
    id: 2,
    votes: 1,
    noOfAnswers: 3,
    questionTitle: "What is use of lambda function?",
    questonBody: "It meant to be",
    questionTags: ["java"],
    userPosted: "nina",
    askedOn: "jan 1"
  },
  {
    id: 3,
    votes: 1,
    noOfAnswers: 2,
    questionTitle: "How to use tag in react?",
    questonBody: "It meant to be",
    questionTags: ["java", "node.js", 'react', "javascript"],
    userPosted: "ritesh",
    askedOn: "jan 1"
  }
  ]


  const location = useLocation()

  const checkAuth = () => {

    if (user === null) {
      alert("login or signup to ask question ")
      navigate('/Auth')
    }
    else {
      navigate('/AskQuestion')
    }
  }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionList === null ?
            <h1>Loading...</h1> :
            <>
              <p>{questionList.length} questions</p>
              <QuestionList questionsList={questionList} />
            </>
        }
      </div>

    </div>
  )
}

export default HomeMainbar