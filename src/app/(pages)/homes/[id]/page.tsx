import React from 'react';

import {movieServer} from "@/app/services/movie";
import {IMovie} from "@/app/models/IMovie";
import MapMoviesByGenre from "@/app/helpers/MapMovies";

type Params = { id: string }
const PageWithGenres = async ({params}: { params: Params }) => {
    const {id} = await params;

    const newArray:IMovie[] = []

        for (let i = 0; newArray.length < 30; i++) {

            const {results} = await movieServer.getAllMovies(i);
            if (results){
                MapMoviesByGenre({newArray, results, id})
            }


        }


    console.log(newArray)
    return (
        <div>

        </div>
    );
};

export default PageWithGenres;