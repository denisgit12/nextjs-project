'use client'
import React, {FC} from "react";
import Slider from "react-slick";
import {IDetailMovie} from "@/app/models/IDetailMovie";

import './styleSliderWithCompanies.css'

type Props = {
    detailMovie: IDetailMovie
}
const SliderWithCompanies: FC<Props> = ({detailMovie}: { detailMovie: IDetailMovie }) => {

    const {production_companies} = detailMovie;

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "100px",
        slidesToShow: 3,
        speed: 500
    };
    return (
        <div className="slider-container && container">
            <div>
                {production_companies.length >= 2 ?

                    <Slider {...settings}>
                        {
                            production_companies.map((value, index) => <div key={index}>
                                <img className={'img'} src={`https://image.tmdb.org/t/p/original${value.logo_path}`}
                                     alt=""/>
                            </div>)
                        }
                    </Slider>


                    : <img className={'img'}
                    src={`https://image.tmdb.org/t/p/original${production_companies[0].logo_path}`}
                alt=""/>

            }
        </div>

            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
            />
        </div>

    );
};

export default SliderWithCompanies;
