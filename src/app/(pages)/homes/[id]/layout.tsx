import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'PublicLayout',
    description: 'PublicLayout'
}
type Props = { children: React.ReactNode }
    ;

const Layout = ({children}: Props) => {
    return (
        <div>
            
            {children}
        </div>
    );
};
export default Layout;