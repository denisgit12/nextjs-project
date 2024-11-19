import React from 'react';

import {SlScreenSmartphone} from "react-icons/sl";
import {IoIosTabletPortrait, IoMdLaptop} from "react-icons/io";
import {HiOutlineTv} from "react-icons/hi2";
import {IoGameControllerOutline} from "react-icons/io5";
import {GiVrHeadset} from "react-icons/gi";

import Devices from "@/app/components/devices/Devices";

import './ProvideVariousDevices.css'

const ProvideVariousDevices = () => {
    return (
        <main>

            <section className={'mainBlockTextProvide'}>
                <h2>
                    We Provide you streaming experience across various devices.
                </h2>
                <p>
                    With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is
                    designed to be compatible with a wide range of devices, ensuring that you never miss a moment of
                    entertainment.
                </p>
            </section>
            <section className={'mainBoxWithAllDevices'}>
                <Devices
                    device={'SmartPhones'}
                    description={'StreamVibe is optimized for both Android and iOS smartphones. Download our app from ' +
                        'the Google Play Store or the Apple App Store'}>
                    <SlScreenSmartphone />
                </Devices>
                <Devices
                    device={'Tablet'}
                    description={'StreamVibe is optimized for both Android and iOS smartphones. Download our app from ' +
                        'the Google Play Store or the Apple App Store'}>
                    <IoIosTabletPortrait />
                </Devices>
                <Devices
                    device={'Smart TV'}
                    description={'StreamVibe is optimized for both Android and iOS smartphones. Download our app from ' +
                        'the Google Play Store or the Apple App Store'}>
                    <HiOutlineTv />
                </Devices>
                <Devices
                    device={'Laptops'}
                    description={'StreamVibe is optimized for both Android and iOS smartphones. Download our app from ' +
                        'the Google Play Store or the Apple App Store'}>
                    <IoMdLaptop />
                </Devices>
                <Devices
                    device={'Gaming Consoles'}
                    description={'StreamVibe is optimized for both Android and iOS smartphones. Download our app from ' +
                        'the Google Play Store or the Apple App Store'}>
                    <IoGameControllerOutline />
                </Devices>
                <Devices
                    device={'VR Headsets '}
                    description={'StreamVibe is optimized for both Android and iOS smartphones. Download our app from ' +
                        'the Google Play Store or the Apple App Store'}>
                    <GiVrHeadset />
                </Devices>



            </section>
        </main>

    );
};

export default ProvideVariousDevices;