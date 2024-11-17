'use client';
import React, {FC, ReactNode} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import '@/app/components/nav-link/NavLinkComponent.css'

type NavLinkComponentProps = {
    children: ReactNode;
    path: string;
}
const NavLinkComponent: FC<NavLinkComponentProps> = ({path, children}) => {
    const pathname = usePathname();
    return (
        <div className={'linkLi'}>
            <Link href={path} className={pathname === path ? 'active && linkLi' : 'linkLi'}>{children}</Link>
        </div>
    );
};

export default NavLinkComponent;