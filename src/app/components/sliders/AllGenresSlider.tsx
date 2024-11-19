'use client'

import React, {FC} from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

import {FaArrowRightLong} from "react-icons/fa6";

import {IGenreWithPhoto} from "@/app/models/IGenreWithPhoto";

import './TrendingSlider.cs.css'


interface Props {
    genre: IGenreWithPhoto[]
}

const AllGenresSlider: FC<Props> = ({genre}) => {
    console.log(genre)
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
                    {genre.map((value, index) =>

                        <div key={index}>

                            <Link href={`/homes/${value.genre.id}`}>
                                <Image className={'photoGenre'} src={value.photoGenre.img} alt={''}/>

                                <div className={'boxWithOneSlide'}>

                                    <h3 className={'genderName'}>{value.genre.name}</h3>
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

export default AllGenresSlider;
