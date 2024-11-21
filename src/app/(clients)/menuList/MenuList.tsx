'use client'

import React, {useState} from 'react';
import {BsFilter} from "react-icons/bs";

import './MenuList.css'
import {VscFilter} from "react-icons/vsc";
import Link from "next/link";

const MenuList = () => {
    const [isOpenByGenre, setOpenByGenre] = useState<boolean>(false);
    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <div className={'buttonFilter'}>
            <section>
                <div><BsFilter className={'imgFilter'} onClick={() => setOpenByGenre(!isOpenByGenre)}/></div>

                <nav className={`${isOpenByGenre ? 'menu' : 'activeMenu'}`}>
                    <h3>Filter By Genre:</h3>

                    <ul className={"menuList"}>
                        <Link className={'linkSortByGenre'} href={`/homes/28`}>
                            <li className={"menuItem"}>Action</li>
                        </Link>

                        <Link className={'linkSortByGenre'} href={`/homes/35`}>
                            <li className={"menuItem"}>comedy 35</li>

                        </Link>
                        <Link className={'linkSortByGenre'} href={`/homes/12`}>
                            <li className={"menuItem"}>Adventure</li>

                        </Link>
                        <Link className={'linkSortByGenre'} href={`/homes/80`}>
                            <li className={"menuItem"}>Crime</li>

                        </Link>
                        <Link className={'linkSortByGenre'} href={`/homes/99`}>
                            <li className={"menuItem"}>Documentary</li>
                        </Link>
                        <Link className={'linkSortByGenre'} href={`/homes/18`}>
                            <li className={"menuItem"}>Drama</li>
                        </Link>
                        <Link className={'linkSortByGenre'} href={`/homes/10751`}>
                            <li className={"menuItem"}>Family</li>
                        </Link>
                        <Link className={'linkSortByGenre'} href={`/homes/14`}>
                            <li className={"Fantasy"}>log</li>
                        </Link>
                        <Link className={'linkSortByGenre'} href={`/homes/36`}>
                            <li className={"menuItem"}>History</li>
                        </Link>
                        <Link className={'linkSortByGenre'} href={`/homes/9648`}>
                            <li className={"menuItem"}>Mystery</li>
                        </Link>
                        <Link className={'linkSortByGenre'} href={`/homes/10749`}>
                            <li className={"menuItem"}>Romance</li>
                        </Link>
                        <Link className={'linkSortByGenre'} href={`/homes/53`}>
                            <li className={"menuItem"}>Thriller</li>
                        </Link>
                        <Link className={'linkSortByGenre'} href={`/homes/10752`}>
                            <li className={"menuItem"}>War</li>
                        </Link>
                    </ul>
                </nav>
            </section>
            <section>
                <div className={'line'}></div>
            </section>
            <section>
                <div><VscFilter className={'imgFilter'} onClick={() => setOpen(!isOpen)}/></div>

                <nav className={`${isOpen ? 'menu' : 'activeMenu'}`}>
                    <h3>Filter By Genre:</h3>

                    <ul className={"menuList"}>
                        <Link className={'linkSortByGenre'} href={`/homes/28`}>
                            <li className={"menuItem"}>Action</li>
                        </Link>

                        <Link className={'linkSortByGenre'} href={`/homes/35`}>
                            <li className={"menuItem"}>comedy 35</li>

                        </Link>
                        <Link className={'linkSortByGenre'} href={`/homes/12`}>
                            <li className={"menuItem"}>Adventure</li>

                        </Link>
                        <Link className={'linkSortByGenre'} href={`/homes/80`}>
                            <li className={"menuItem"}>Crime</li>

                        </Link>
                        <Link className={'linkSortByGenre'} href={`/homes/99`}>
                            <li className={"menuItem"}>Documentary</li>
                        </Link>
                        <Link className={'linkSortByGenre'} href={`/homes/18`}>
                            <li className={"menuItem"}>Drama</li>
                        </Link>
                        <Link className={'linkSortByGenre'} href={`/homes/10751`}>
                            <li className={"menuItem"}>Family</li>
                        </Link>
                        <Link className={'linkSortByGenre'} href={`/homes/14`}>
                            <li className={"Fantasy"}>log</li>
                        </Link>
                        <Link className={'linkSortByGenre'} href={`/homes/36`}>
                            <li className={"menuItem"}>History</li>
                        </Link>
                        <Link className={'linkSortByGenre'} href={`/homes/9648`}>
                            <li className={"menuItem"}>Mystery</li>
                        </Link>
                        <Link className={'linkSortByGenre'} href={`/homes/10749`}>
                            <li className={"menuItem"}>Romance</li>
                        </Link>
                        <Link className={'linkSortByGenre'} href={`/homes/53`}>
                            <li className={"menuItem"}>Thriller</li>
                        </Link>
                        <Link className={'linkSortByGenre'} href={`/homes/10752`}>
                            <li className={"menuItem"}>War</li>
                        </Link>
                    </ul>
                </nav>
            </section>

        </div>
    );
};

export default MenuList;