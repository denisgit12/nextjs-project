import React from 'react';

import './Footer.css'
import {FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
        <main>
            <section className={'mainFooterSection'}>
                <section>
                    <h3>Home</h3>
                    <h4>Categories</h4>
                    <h4>Devices</h4>
                    <h4>Pricing</h4>
                    <h4>FAQ</h4>
                </section>
                <section>
                    <h3>Movies</h3>
                    <h4>Genres</h4>
                    <h4>Trending</h4>
                    <h4>New Release</h4>
                    <h4>Popular</h4>
                </section>
                <section>
                    <h3>Shows</h3>
                    <h4>Genres</h4>
                    <h4>Trending</h4>
                    <h4>New Release</h4>
                    <h4>Popular</h4>
                </section>
                <section>
                    <h3>Support</h3>
                    <h4>Contact Us</h4>
                </section>
                <section>
                    <h3>Subscription</h3>
                    <h4>Plans</h4>
                    <h4>Features</h4>
                </section>
                <section>
                    <h3>
                        Connect With Us
                    </h3>
                    <div className={'mainBoxLinkToNetwork'}>
                        <div className={'boxFacebook'}><FaFacebook/></div>
                        <div className={'boxFacebook'}><FaTwitter/></div>
                        <div className={'boxFacebook'}><FaLinkedin/></div>
                    </div>
                </section>
            </section>
            <section className={'mainFooterSectionSecond'}>
                <h3>@2024 streamvib, All Rights Reserved</h3>
                <div className={'allRightsReserved'}>
                        <h3>Terms of Use</h3>
                        <h3>Privacy Policy</h3>
                        <h3>Cookie Policy</h3>


                </div>

            </section>
        </main>
    );
};

export default Footer;