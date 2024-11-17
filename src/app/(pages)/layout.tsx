import {Metadata} from "next";
import React from "react";
import Header from "@/app/components/header/Header";

export const metadata: Metadata = {
    title: 'PublicLayout',
    description: 'PublicLayout'
}
type Props = { children: React.ReactNode }
    ;

const MainLayout = ({children}: Props) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
};
export default MainLayout;