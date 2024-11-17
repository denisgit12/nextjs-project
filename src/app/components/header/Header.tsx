import React from 'react';
import Image from "next/image";
import Link from "next/link";

import {CiSearch, CiBellOn} from "react-icons/ci";


import NavLinkComponent from "@/app/components/nav-link/NavLinkComponent";

import logo from './logo.png'
import './style.css'
import GetFirstLetterFromLocal from "@/app/components/getFirstLetterFromLocal/GetFirstLetterFromLocal";
import LogOut from "@/app/components/logOut/LogOut";


const Header = () => {
    return (
        <header className={'mainHeadBox'}>
            <div>
                <Link href={'/homes'} className={'mainLogoLink'}>
                    <Image className={'logo'} src={logo} alt={'logo'}/>
                </Link>
            </div>

            <ul className={'mainNavBox'}>
                <li className={'linkLi'}>
                    <NavLinkComponent path={'/homes'}>Home</NavLinkComponent>

                </li>
                <li className={'linkLi'}>
                    <NavLinkComponent path={'/movies'}>Movie & Shows</NavLinkComponent>
                </li>
                <li className={'linkLi'}>
                    <NavLinkComponent path={'/support'}>Support</NavLinkComponent>
                </li>
                <li className={'linkLi'}>
                    <NavLinkComponent path={'/mov'}>Subscriptions</NavLinkComponent>
                </li>
            </ul>

            <div className={'mainIconLink'}>
                <Link href={''} className={'icon'}>
                    <CiSearch/>
                </Link>
                <Link href={''} className={'icon'}>
                    <CiBellOn/>
                </Link>
                <div className={'icon'}>
                    <LogOut/>
                </div>
            </div>

            <div className={'mainLogOut'}>
                <GetFirstLetterFromLocal/>
            </div>

        </header>
    );
};

export default Header;