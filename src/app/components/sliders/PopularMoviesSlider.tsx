'use client'
import React, {FC} from "react";
import Slider from "react-slick";

import {FaArrowRightLong} from "react-icons/fa6";
import Link from "next/link";

import {IMovie} from "@/app/models/IMovie";

import './TrendingSlider.cs.css'

interface Props {
    popularMovies: IMovie[]
}

const PopularMoviesSlider: FC<Props> = ({popularMovies}:{popularMovies:IMovie[]} ) => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 8000,
        cssEase: "linear",
        // width: 90
    };
    return (
        <div>
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <div className="slider-container">

                <Slider {...settings}>
                    {popularMovies && popularMovies.map((value, index) =>

                        <div key={index}>

                            {/*<Link href={`/homes/${value.id}`}>*/}
                                <Link href={`/aboutOneMovie/${value.id}`}>
                                <img className={'photoGenre'}
                                       src={`https://image.tmdb.org/t/p/original${value.poster_path}`}
                                       alt={''}
                                />

                                <div className={'boxWithOneSlide'}>
                                    <h3 className={'genderName'}>{value.original_title}</h3>
                                    <FaArrowRightLong className={'FaArrowRightLong'}/>
                                </div>
                            </Link>

                        </div>
                    )}
                </Slider>
            </div>
        </div>

    );
};

export default PopularMoviesSlider;
