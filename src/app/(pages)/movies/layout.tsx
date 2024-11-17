import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'PublicLayout',
    description: 'PublicLayout'
}
type Props = { children: React.ReactNode }
    ;

const LayoutMovies = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};
export default LayoutMovies;