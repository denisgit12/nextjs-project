import React from 'react';
import AllGenresSlider from "@/app/components/sliders/AllGenresSlider";
import {IGenreWithPhoto} from "@/app/models/IGenreWithPhoto";


import {movieServer} from "@/app/services/movie";
import {DataPhotoGenre} from "@/app/components/genresCategories/dataPhotoGenre/DataPhotoGenre";

import './styleGenresCategories.css'

const GenresCategories = async () => {
    const genres = await movieServer.getAllGenre();
    const photoGenres = DataPhotoGenre;

    const newArr:IGenreWithPhoto[] = []

    for (const genre of genres) {
        for (const photoGenre of photoGenres) {
            if (genre.id === photoGenre.id){
                newArr.push({genre, photoGenre})
            }
        }
    }
    return (
        <main>
            <section>
                <div className={'divWithWideVariety'} >
                    <h2 className={'exploreOurWideVarietyH2'}>
                        Explore our wide variety of categories:
                    </h2>
                    <p>
                        Whether you are looking for a comedy to make you laugh, a drama to make you think, or a
                        documentary
                        to learn something new

                    </p>
                </div>
                <div>

                </div>

            </section>
            <section>

                <AllGenresSlider genre={newArr}/>
            </section>
        </main>
    );
};

export default GenresCategories;