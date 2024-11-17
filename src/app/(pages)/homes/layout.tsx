import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'Home page',
    description: 'All genres'
}
type Props = { children: React.ReactNode }
    ;

const layout = ({children}: Props) => {
    return (
        <div>
            
            {children}
        </div>
    );
};
export default layout;