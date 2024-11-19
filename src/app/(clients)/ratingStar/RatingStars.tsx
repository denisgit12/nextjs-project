'use client'

import React, {FC, useState} from 'react'
import { Rating } from 'react-simple-star-rating'

type Props = {
    number:number
}
const RatingStars:FC<Props> = ({number}:{number:number}) => {
    const [rating, setRating] = useState(Math.round(number/2))

    console.log(number);

    const handleRating = (rate: number) => {
        setRating(rate)
    }

    return (
        <div className={'mainBoxStar'}>
            {/* set initial value */}
            <Rating onClick={handleRating} initialValue={rating} />

            {/*<button onClick={handleReset}>reset</button>*/}
        </div>
    )
};

export default RatingStars;
