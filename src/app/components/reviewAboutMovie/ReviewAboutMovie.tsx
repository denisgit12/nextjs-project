import React, {FC} from 'react';
import {movieServer} from "@/app/services/movie";

import './ReviewAboutMovie.css'
import RatingStars from "@/app/(clients)/ratingStar/RatingStars";

type Props = {
    id: string | number
}

const ReviewAboutMovie: FC<Props> = async ({id}: { id: string | number }) => {
    const {results} = await movieServer.getReview(id)
    return (
        <main className={'mainReviewBox'}>
            {results.length >= 0 &&
                <section className={'firstReviewBox'}>

                        <div className={'mainBoxUserRating'}>

                            <div className={'boxUserName'}>
                                {results[0]?.author}
                            </div>

                            <div className={'boxRating'}>
                               <RatingStars number={results[0]?.author_details.rating}/>
                            </div>

                        </div>
                    <div className={'boxContent'}>
                        {results[0]?.content}
                    </div>
                </section>
            }
            {results.length > 1 &&
                <section className={'firstReviewBox'}>
                    <div className={'mainBoxUserRating'}>
                        <div className={'boxUserName'}>
                            {results[1].author}
                        </div>
                        <div className={'boxRating'}>
                            <RatingStars number={results[1].author_details.rating
                            }/>
                        </div>

                    </div>
                    <div className={'boxContent'}>
                        {results[1].content}
                    </div>
                </section>
            }
            {/*{results.length >= 2 &&*/}
            {/*    <section className={'firstReviewBox'}>*/}

            {/*    </section>*/}
            {/*}*/}

        </main>
    );
};

export default ReviewAboutMovie;