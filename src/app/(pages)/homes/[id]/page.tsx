import React from 'react';

import {movieServer} from "@/app/services/movie";

type Params = { id: string }
const PageWithGenres = async ({params}: { params: Params }) => {
    const {id} = await params;
    console.log(id);

    const newArray:[] = []

        for (let i = 0; newArray.length < 60; i++) {

            const {results} = await movieServer.getAllMovies(i)
            results && results.length>=0 && newArray.length < 60 && results.map(value => {
              value.genre_ids.map(value1 => !(value1 !== +id || !newArray.push(value))) ;


            })


        }
    console.log(newArray)
    return (
        <div>

        </div>
    );
};

export default PageWithGenres;