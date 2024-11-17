import React from 'react';
import Image from "next/image";
import Link from "next/link";

import logo from './logo.png'
import './style.css'
import NavLinkComponent from "@/app/components/nav-link/NavLinkComponent";

const Header = () => {
    return (
        <header className={'mainHeadBox'}>
            <div>
                <Link href={'/movies'} className={'mainLogoLink'}>
                    <Image className={'logo'} src={logo} alt={'logo'}/>
                </Link>
            </div>
                    <ul className={'mainNavBox'}>
                        <li className={'linkLi'}>
                            <NavLinkComponent path={'/movies'}>Home</NavLinkComponent>

                        </li>
                        <li className={'linkLi'}>
                            <NavLinkComponent path={'/movi'}>Movie & Shows</NavLinkComponent>
                        </li>
                        <li className={'linkLi'}>
                            <NavLinkComponent path={'/support'}>Support</NavLinkComponent>
                        </li>
                        <li className={'linkLi'}>
                            <NavLinkComponent path={'/mov'}>Subscriptions</NavLinkComponent>
                        </li>
                    </ul>

            <div className={'mainLogoLink'}></div>
        </header>
    );
};

export default Header;