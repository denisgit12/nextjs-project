import React from 'react';

import './MoviesPage.css'
import Movies from "@/app/components/movies/Movies";

const MoviesPage = async (
    props: {
    searchParams?: Promise<{
        page?: string;
        dataSearch?: string
    }>
}
) => {

    const searchParams = await props.searchParams;
    return (
        <main>
            <Movies searchParams={searchParams}/>
        </main>

    );
};

export default MoviesPage;