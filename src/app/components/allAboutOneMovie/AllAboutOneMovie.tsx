import React, {FC} from 'react';

import Link from "next/link";

import {FaYoutube} from "react-icons/fa";
import {HiOutlinePlusSmall} from "react-icons/hi2";
import {AiOutlineLike,} from "react-icons/ai";
import {IoIosNotificationsOutline} from "react-icons/io";

import './styleAllAboutOneMovie.css'
import {movieServer} from "@/app/services/movie";
import CenterMode from "@/app/(clients)/SliderWithCompanies ";
import ReviewAboutMovie from "@/app/components/reviewAboutMovie/ReviewAboutMovie";

type Props = {
    id: string | number,
}
const AllAboutOneMovie: FC<Props> = async ({id}: Props) => {
    const detailMovie = await movieServer.getOneMovie(id)
    console.log(detailMovie)
    return (
        <main style={{height: '2000px'}}>
            <section className={'mainBoxWithImg'}>
                <img className={'mainBoxImg'}
                     src={`https://image.tmdb.org/t/p/original${detailMovie.backdrop_path}`}
                     alt={''}
                />
                <div className={"baseBoxDescription"}>
                    <h1>{detailMovie.title}</h1>
                    <p>{detailMovie.tagline
                    }</p>
                    <div className={'boxWatchNow'}>
                        <Link href={'/movies'} className={'linkBoxImgWatchingNow'}>
                            <FaYoutube className={'boxImgGoTriangleRight'}/>
                            <span>Play Now</span>
                        </Link>
                        <div className={'mainBoxIcons'}>
                            <div className={'boxWithIcon'}>
                                <HiOutlinePlusSmall className={'PlayNowIvon'}/>
                            </div>
                            <div className={'boxWithIcon'}>
                                <AiOutlineLike className={'PlayNowIvon'}/>
                            </div>
                            <div className={'boxWithIcon'}>
                                <IoIosNotificationsOutline className={'PlayNowIvon'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={'mainDescriptionSection'}>

                <section className={'mainSectionWithDescImgComment'}>

                    <section className={'mainSectionShortDesc'}>
                        <h4>Description:</h4>
                        <h3>{detailMovie.overview}</h3>
                    </section>

                    <div className={'mainSectionCast'}>
                        <h4>Production companies:</h4>
                        <CenterMode key={detailMovie.id} detailMovie={detailMovie}/>
                    </div>

                    <section className={'mainSectionComment'}>

                        <div className={'SectionComment'}>
                            <h4>Reviews</h4>
                            <div className={'boxAddReview'}>
                                <HiOutlinePlusSmall className={'PlayNowIvon'}/>
                                <span>Add Your Review</span>
                            </div>

                        </div>
                        <ReviewAboutMovie id={id}/>
                    </section>
                </section>

                <section className={'mainBoxDescription'}>

                </section>
            </section>

        </main>
    );
};

export default AllAboutOneMovie;