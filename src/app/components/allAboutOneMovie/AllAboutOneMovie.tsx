import React, {FC} from 'react';

import Link from "next/link";

import {FaYoutube} from "react-icons/fa";
import {HiOutlinePlusSmall} from "react-icons/hi2";
import {AiOutlineLike,} from "react-icons/ai";
import {IoIosNotificationsOutline, IoMdTime} from "react-icons/io";

import './styleAllAboutOneMovie.css'
import {movieServer} from "@/app/services/movie";
import CenterMode from "@/app/(clients)/SliderWithCompanies ";
import ReviewAboutMovie from "@/app/components/reviewAboutMovie/ReviewAboutMovie";
import {CiCalendar, CiStar} from "react-icons/ci";
import {HiOutlineTranslate} from "react-icons/hi";
import RatingStars from "@/app/(clients)/ratingStar/RatingStars";

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
                     src={`https://image.tmdb.org/t/p/original${detailMovie?.backdrop_path}`}
                     alt={''}
                />
                <div className={"baseBoxDescription"}>
                    <h1>{detailMovie?.title}</h1>
                    <p>{detailMovie?.tagline
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
                        <h3>{detailMovie?.overview}</h3>
                    </section>

                    <div className={'mainSectionCast'}>
                        <h4>Production companies:</h4>
                        <CenterMode key={detailMovie?.id} detailMovie={detailMovie}/>
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

                    <div className={'boxDescriptionDetails'}>

                        <div className={'boxLogoData marginTop'}>

                            <div className={'boxLogo'}>
                                <CiCalendar className={'logosDescriptionDetails'}/>
                                <h3>Released Year</h3>
                            </div>
                            <div className={'boxData'}>
                                {detailMovie?.release_date}
                            </div>

                        </div>

                        <div className={'boxLogoData marginTop'}>

                            <div className={'boxLogo'}>
                                <IoMdTime className={'logosDescriptionDetails'}/>
                                <h3>Runtime</h3>
                            </div>
                            <div className={'boxData'}>
                                {detailMovie?.runtime} min
                            </div>

                        </div>


                        <div className={'boxLogoData marginTop'}>

                            <div className={'boxLogo'}>
                                <HiOutlineTranslate className={'logosDescriptionDetails'}/>
                                <h3>Available Languages</h3>
                            </div>
                            <div className={'boxData boxSpokenLanguages'}>
                                {detailMovie?.spoken_languages.map((value, index) => <div key={index}
                                                                                         className={'spokenLanguage'}>
                                    {value?.name}
                                </div>)}
                            </div>

                        </div>

                        <div className={'boxLogoData marginTop'}>

                            <div className={'boxLogo'}>
                                <CiStar className={'logosDescriptionDetails'}/>
                                <h3>Rating</h3>
                            </div>
                            <div className={'boxData boxBorderStar'}>
                                <RatingStars number={detailMovie.vote_average}/>

                            </div>

                        </div>

                        <div className={'boxLogoData marginTop'}>

                            <div className={'boxLogo'}>
                                <CiStar className={'logosDescriptionDetails'}/>
                                <h3>Genres</h3>
                            </div>
                            <div className={'boxData boxSpokenLanguages'}>
                                {detailMovie.genres.map((value, index) => <div key={index}
                                                                               className={'spokenLanguage'}>
                                    <Link className={'linkByGenre'} href={`/homes/${value.id}`}>
                                        {value.name}
                                    </Link>

                                </div>)}
                            </div>

                        </div>

                    </div>
                </section>
            </section>

        </main>
    )
        ;
};

export default AllAboutOneMovie;