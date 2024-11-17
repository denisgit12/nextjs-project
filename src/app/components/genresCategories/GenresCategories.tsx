import React from 'react';
import {movieServer} from "@/app/services/movie";

const GenresCategories = async () => {
    const genres = await movieServer.getAllGenre()
    console.log(genres)
    return (
        <div>

        </div>
    );
};

export default GenresCategories;