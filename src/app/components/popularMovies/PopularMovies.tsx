import React from 'react';

import {movieServer} from "@/app/services/movie";

import './stylePopularMovies.css'
import PopularMoviesSlider from "@/app/components/sliders/PopularMoviesSlider";

const PopularMovies = async () => {
    const popularMovies = await movieServer.getPopularMovie();
    return (
        <main>
            <section>
                <div className={'divWithTrendingMovies'}>
                    <h2 className={'trendingNowH2'}>
                        Trending Now:
                    </h2>
                    <p>
                        Whether you are looking for a comedy to make you laugh, a drama to make you think, or a
                        documentary
                        to learn something new

                    </p>
                </div>

            </section>
            <section>

                <PopularMoviesSlider popularMovies={popularMovies}/>
            </section>
        </main>
    );
};

export default PopularMovies