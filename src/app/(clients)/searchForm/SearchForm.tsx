'use client'
import React, {FC, useEffect, useState} from 'react';

import {CiSearch} from "react-icons/ci";
import Form from "next/form";
import {movieServer} from "@/app/services/movie";
import {IMovie} from "@/app/models/IMovie";

import './SearchFormStyle.css'

type Props = {
    dataSearchMovie: string | false
}
const SearchForm: FC<Props> = (dataSearch) => {

    const [input, setInput] = useState<string>('');
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [state, setState] = useState<boolean>(false);

    useEffect(() => {
        if (!input && dataSearch.dataSearchMovie) {
            setInput(dataSearch.dataSearchMovie)
        }
    }, []);

    const onChange:React.ChangeEventHandler<HTMLInputElement> = (event) => {

        setState(true)
        const searchString = event.target.value
        setInput(searchString)
        movieServer.searchMovies(1, searchString).then(value => setMovies(value.results))

    }

    return (
        <main className={'mainSearchFormBox'} onClick={()=>setState(false)}>
            <div className="searchBox">
                <Form action={'/movies'} replace={false} scroll={true}>
                    <input value={input} onChange={event => onChange(event)} className="searchInput" type="text"
                           name={'dataSearch'}/>
                    <div className={'searchList'}>{
                        movies.length >= 1 && state && movies.map(movie => <div key={movie.id}>
                            <h2 className={"searchedDate"} onClick={() => {
                                setInput(movie.title)
                                setState(false)
                            }}>{movie.title}</h2>
                        </div>)
                    }</div>
                    <button className="searchButton" onClick={() => {

                        setState(false)
                    }}>
                        <CiSearch className={'iconSearchMovies'}/>
                    </button>
                </Form>
            </div>


        </main>
    );
};

export default SearchForm;