import React, { useState } from 'react';
import people from './ReviewsData';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const Reviews = () => {
const [index, setIndex] = useState(0)
const {name, job, image, text} = people[index]


const checkNumber = (number)=> {
    if (number > people.length - 1){
        return 0;
    } else if (number < 0) {
        return people.length - 1;
    }
    return number
}


const prevReview = () => {
    setIndex((index) => {
        let newIndex = index - 1
        return checkNumber(newIndex)
    })
}

const nextReview = () => {
    setIndex((index) => {
        let newIndex = index + 1
        return checkNumber(newIndex)
    })
}


const randomReview = () => {
  let newIndex = Math.floor(Math.random() * people.length)

if (newIndex === index) {
    newIndex = index + 1
}
setIndex(checkNumber(newIndex))
}


return (
    <div>
        <div className='section-review'>
            <div className='container-review'>
                <header className='rev-header'>
                    <div className='img-container'>
                        <img className='rev-image' src={image} alt={name} />
                    </div>
                    <h2 className='rev-name'>{name}</h2>
                    <p className='rev-job'>{job}</p>
                </header>
                <p className='rev-text'>{text}</p>
                <div className='rev-btn'>
                    <button onClick={()=> prevReview()} className='prev-btn'>
                        <FaChevronLeft />
                    </button>
                    <button onClick={()=> nextReview()} className='next-btn'>
                        <FaChevronRight />
                    </button>
                </div>
                <div>
                    <button onClick={() => randomReview()} className='random-btn'>
                    Random Review
                    </button>
                </div>
            </div>
        </div> 
    </div>
)
}

export default Reviews
