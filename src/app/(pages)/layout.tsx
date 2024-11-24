import {Metadata} from "next";
import React from "react";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";

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
            <Footer/>
        </div>
    );
};
export default MainLayout;