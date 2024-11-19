import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";

type  Props = {
    results:IMovie[], newArray:IMovie[], id:string
}

const MapMoviesByGenre:FC<Props> = ({results, newArray, id}:{results:IMovie[], newArray:IMovie[], id:string}) => {
    results.map(value => {
        value.genre_ids.map(value1 => value1 === +id && newArray.push(value));
    })
        return (
        <div>

        </div>
    );
};

export default MapMoviesByGenre;