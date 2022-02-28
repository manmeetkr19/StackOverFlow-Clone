import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswers from './DisplayAnswers'
import up from '../../Assets/up.png'
import down from '../../Assets/down.png'

const QuestionDetails = () => {

    const { id } = useParams()

    var questionList = [{
        id: '1',
        upvotes: 3,
        downvotes: 1,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questonBody: "It meant to be",
        questionTags: ["java", "node.js", "react"],
        userPosted: "mano",
        askedOn: "jan 1",
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: "kumar",
            answeredOn: "jan 2",
            userId: 2,
        }]
    },
    {
        id: '2',
        upvotes: 8,
        downvotes: 2,
        noOfAnswers: 3,
        questionTitle: "What is use of lambda function?",
        questonBody: "It meant to be",
        questionTags: ["java", "node.js", "html"],
        userPosted: "nina",
        askedOn: "jan 1",
        userId: 2,
        answer: [{
            answerBody: "Answer",
            userAnswered: "rk",
            answeredOn: "april 13",
            userId: 1,
        }]
    },
    {
        id: '3',
        upvotes: 5,
        downvotes: 0,
        noOfAnswers: 2,
        questionTitle: "How to use tag in react?",
        questonBody: "It meant to be",
        questionTags: ["java", "node.js", 'react', "javascript"],
        userPosted: "ritesh",
        askedOn: "jan 1",
        userId: 3,
        answer: [{
            answerBody: "Answer",
            userAnswered: "mohit",
            answeredOn: "dec 12",
            userId: 2,
        }]
    }
    ]

    return (
        <div className='question-details-page'>
            {
                questionList === null ?
                    <h1>Loading...</h1> :
                    <>
                        {
                            questionList.filter(question => question.id === id).map(question => (
                                <div key={question.id}>
                                    <section className='question-details-container'>
                                        <h1>{question.questionTitle}</h1>
                                        <div className='question-details-container-2'>
                                            <div className="question-votes">
                                                <img src={up} alt="" width="18" />
                                                <p>{question.upvotes - question.downvotes}</p>
                                                <img src={down} alt=""  width="18"/>
                                            </div>
                                            <div style={{ width: "100%" }}>
                                                <p className='question-body'>{question.questonBody}</p>
                                                <div className="question-details-tags">
                                                    {
                                                        question.questionTags.map((tag) => (
                                                            <p key={tag}>{tag}</p>
                                                        ))
                                                    }
                                                </div>
                                                <div className="question-actions-user">
                                                    <div>
                                                        <button type='button'>Share</button>
                                                        <button type='button'>Delete</button>
                                                    </div>
                                                    <div>
                                                        <p>asked {question.askedOn}</p>
                                                        <Link to={`/user/${question.userId}`} className='user-link'
                                                            style={{ color: '#0086d8' }}>

                                                            <Avatar backgroundColor="orange" px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                            <div>
                                                                {question.userPosted}
                                                            </div>
                                                        </Link>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    {
                                        question.noOfAnswers !== 0 && (
                                            <section>
                                                <h3>
                                                    {question.noOfAnswers} answers
                                                </h3>
                                                <DisplayAnswers key={question.id} question={question} />
                                            </section>
                                        )
                                    }
                                    <section className='post-ans-container'>
                                        <h3>
                                            Your Answer
                                        </h3>
                                        <form >
                                            <textarea name="" id="" cols="30" rows="10"></textarea><br />
                                            <input type="submit" className='post-ans-btn' value='Post Your Answer' />
                                        </form>
                                    </section>
                                    <p>
                                        Browse another Question tagged
                                        {
                                            question.questionTags.map((tag) => (
                                                <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                            ))
                                        } or
                                        <Link to='/AskQuestion' style={{ textDecoration: "none", color: "#009dff" }} >Ask your own question</Link>
                                    </p>
                                </div>
                            ))
                        }
                    </>
            }
        </div>
    )
}

export default QuestionDetails