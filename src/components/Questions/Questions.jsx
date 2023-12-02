import React, { useState } from 'react'
import SingleQuestion from './SingleQuestion'
import data from './questionsData'



const Questions = () => {
    const [questions, setQuestions] = useState(data)
return (
    <main className='main-container'>
        <div className='ques-container'>
            <h1 className='ques-header'>Questions And Answers</h1>
        <div className='questions'>
    {questions.map((question) => {
        return (
            <SingleQuestion key={question.id} {...question} />
        )
    })}
    </div>
        </div>
    </main>
    
)
}

export default Questions
