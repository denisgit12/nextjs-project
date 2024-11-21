import React, {FC} from 'react';
import {FaStar} from "react-icons/fa";


import {IMovie} from "@/app/models/IMovie";

import './OneMovie.css'

type Props = {
    movie: IMovie
}

const OneMovie: FC<Props> = ({movie}: { movie: IMovie }) => {
    // console.log(movie);
    return (
        <div>
            <section className={'MainBoxOneMovie'}>
                <section className={'boxMovie'}>
                    <img className={'poster'} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={''}/>
                    <h2>{movie.title}</h2>
                    <div>
                        <h3><FaStar className={'starStyle'} /> {movie.vote_average}</h3>
                        <div className={'lineTwo'}></div>
                        <h3>{movie.release_date}</h3>

                    </div>
                </section>
            </section>
        </div>
    );
};

export default OneMovie;