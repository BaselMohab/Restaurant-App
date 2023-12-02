import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import data from './questionsData'

const SingleQuestion = ({title,info}) => {
    const [showInfo, setShowInfo] = useState(false)
return (
    <section className='ques-title'>
        <header>
            <h2>{title}</h2>
            <button 
            onClick={()=> setShowInfo(!showInfo)}
            className='btn' >
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
        </header>
        <p className='answers'>
            {showInfo && info}</p>
    </section>
)
}

export default SingleQuestion
