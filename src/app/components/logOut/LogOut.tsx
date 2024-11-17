'use client'

import React from 'react';
import {useRouter} from "next/navigation";

import {CiLogout} from "react-icons/ci";

import './styleLogOut.css'

const LogOut = () => {
    const router = useRouter()

    const logOut = () => {
      localStorage.removeItem('email');
      router.push('/')
    }
    return (
        <div className={'logOut'} onClick={()=>logOut()}>
            <CiLogout />
        </div>
    );
};

export default LogOut;