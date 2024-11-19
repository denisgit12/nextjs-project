import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: '=One Movie',
    description: 'All About One Movie'
}
type Props = { children: React.ReactNode }
    ;

const OneMovieLayout = ({children}: Props) => {
    return (
        <div>

            {children}
        </div>
    );
};
export default OneMovieLayout;