import React from 'react';
import Link from "next/link";

import OneMovie from "@/app/components/oneMovie/OneMovie";
import {movieServer} from "@/app/services/movie";
import PaginationComponent from "@/app/(clients)/paginationComponent/PaginationComponent";

import './PageWithGenres.css'

const PageWithGenres = async (props: {

    searchParams?: Promise<{ page?: string }>, params?: Promise<{ id?: string }>

}) => {
    const searchParams = await props.searchParams;
    const currentPage = Number((await searchParams)?.page) || 1;

    const searchId = await props.params;
    const id = Number((await searchId)?.id) || 1;

    const getMoviesByGenre = await movieServer.getMoviesByGenres(currentPage, id);
    const {results, total_pages} = getMoviesByGenre;
    return (
        <main>
            <section className={'mainBoxGenre'}>
                <section className={'sectionOneMovie'}>
                    {
                        results && results.map((movie, index) => <Link key={index} href={`/aboutOneMovie/${movie.id}`}>
                                <OneMovie key={movie.id}
                                          movie={movie}/>

                            </Link>
                        )
                    }
                </section>
            </section>
            {
                total_pages <= 500
                    ?
                    < PaginationComponent totalPage={total_pages}/>
                    :
                    <PaginationComponent totalPage={500}/>

            }
        </main>
    )
        ;
};

export default PageWithGenres;