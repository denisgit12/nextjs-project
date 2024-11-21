import React from 'react';

import './SearchForm.css'
import Form from "next/form";
import {CiSearch} from "react-icons/ci";

const SearchForm = () => {


    return (
        <main className={'mainSearchFormBox'}>
            <div className="searchBox">
                <Form action={'/movies'} replace={false} scroll={true}>
                    <input className="searchInput" type="text" name={'dataSearch'}/>

                    <button className="searchButton">
                        <CiSearch className={'iconSearchMovies'}/>
                    </button>
                </Form>
            </div>


        </main>
    );
};

export default SearchForm;