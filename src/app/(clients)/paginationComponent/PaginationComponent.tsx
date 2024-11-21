'use client'

import React, {FC, useCallback} from 'react';
import {Pagination} from "@mui/material";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

import './PaginationComponent.css'

type Props = {
    totalPage: string | number
}

const PaginationComponent:FC<Props> = ({totalPage}:{totalPage:string | number}) => {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const page = useSearchParams().get('page')


    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const change = (page: number) => {
        router.push(pathname + '?' + createQueryString('page', page.toString()))

    }

    return (
        <div className={"mainBoxPaginationComponent"}>
            {
                page
                    ?
                    <Pagination className={'pagination'} onChange={(event, page) => change(page)} page={+page} count={+totalPage} variant="outlined"/>
                    :
                    <Pagination onChange={(event, page) => change(page)} page={1} count={+totalPage} variant="outlined"/>
            }

        </div>
    );
};

export default PaginationComponent;