import React, {FC} from 'react';
import Link from "next/link";

import SearchForm from "@/app/(clients)/searchForm/SearchForm";
import MenuList from "@/app/(clients)/menuList/MenuList";
import OneMovie from "@/app/components/oneMovie/OneMovie";
import PaginationComponent from "@/app/(clients)/paginationComponent/PaginationComponent";
import {movieServer} from "@/app/services/movie";

import {IResponseMovie} from "@/app/models/ResponseMovie";

type Props = {
    searchParams: {
        page?: string;
        dataSearch?: string
    } | undefined
}

const Movies: FC<Props> = async ({searchParams}: {
                                     searchParams?: {
                                         page?: string;
                                         dataSearch?: string
                                     }
                                 }
) => {

    const currentPage = Number((await searchParams)?.page) || 1;
    const dataSearchMovie = (await searchParams)?.dataSearch || false;
    let allMovies: IResponseMovie | '';

    if (dataSearchMovie) {
        allMovies = await movieServer.searchMovies(currentPage, dataSearchMovie);

    } else {
        if (currentPage > 500) {
            allMovies = await movieServer.getAllMovies(500);
        } else {
            allMovies = await movieServer.getAllMovies(currentPage);
        }

    }
    const {results, total_pages} = allMovies;

    return (
        <main>

            <section className={'mainSectionAllMovies'}>
                <section>
                    <SearchForm dataSearchMovie={dataSearchMovie} />
                </section>
                <section className={'SectionFilter'}>
                    <h1>All Movies</h1>
                    <div>
                        <MenuList/>
                    </div>
                </section>
                <section className={'sectionOneMovie'}>
                    {
                        results.map(movie => <Link key={movie.id} href={`/aboutOneMovie/${movie.id}`}>
                                <OneMovie key={movie.id} movie={movie}/>

                            </Link>
                        )
                    }
                </section>
            </section>

            <section className={'boxPagination'}>
                <PaginationComponent totalPage={total_pages}/>
            </section>
        </main>
    );
};

export default Movies;