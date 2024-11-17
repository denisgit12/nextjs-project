import React from 'react';

import Image from "next/image";
import Link from "next/link";

import imgLineaOne from './image/imgLineaOne.png'
import imgLineaTwo from './image/imgLineaTwo.png'
import imgLineaThree from './image/imgLineaThree.png'
import imgLineaFour from './image/imgLineaFour.png'

import { GoTriangleRight } from "react-icons/go";

import imgLogo from './image/imgLogo.png'
import './styleHomePage.css'
import GenresCategories from "@/app/components/genresCategories/GenresCategories";
// import {movieServer} from "@/app/services/movie";

const HomePage = async () => {
    // const data = await movieServer.getAllMovies(1)
    // console.log(data.results);
    // console.log(genres)
    return (
        <main className={'mainBlockHomePage'}>
            <section className={'mainBlockImg'}>
                <Image className={'image'} src={imgLineaOne} alt={'photo'}/>
                <Image className={'image'} src={imgLineaTwo} alt={'photo'}/>
                <Image className={'imageLogo'} src={imgLogo} alt={'logo'}/>
                <Image className={'image'} src={imgLineaThree} alt={'photo'}/>
                <Image className={'image'} src={imgLineaFour} alt={'photo'}/>
            </section>
            <section className={'sectionAboutExperience'}>
                <h1 className={'geist-mono'}>The Best Streaming Experience</h1>
                <p>
                    StreamVibe is the best streaming experience for watching your favorite movies and shows on demand,
                    anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters,
                    classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content
                    you want to watch.
                </p>
                <Link href={'/movies'} className={'linkWatchingNow'}>
                    <GoTriangleRight className={'GoTriangleRight'} />
                    <span>Start watching Now</span>
                </Link>
            </section>
            <section>
                <GenresCategories/>
            </section>
        </main>

    );
};

export default HomePage;