"use client";


import React, {useEffect, useState} from 'react';

import './styleLatter.css'

const GetFirstLetterFromLocal = () => {
    const [letter, setLetter] = useState('')
  useEffect(() => {
      const value = localStorage.getItem('email');
      if (value){
          const letter = value.charAt(0).toUpperCase();
          setLetter(letter)
      }
  },[])
    return (
        <div className={'divLatter'}>
            <span>
                {letter}
            </span>

        </div>
    );
};

export default GetFirstLetterFromLocal;