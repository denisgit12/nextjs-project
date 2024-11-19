import React, {FC, ReactNode} from 'react';

import './Devices.css'

type NavLinkComponentProps = {
    children: ReactNode;
    device: string;
    description: string
}
const Devices: FC<NavLinkComponentProps> = ({children, device, description}) => {
    return (
        <main className={'mainOneBoxDevice'}>
            <section className={'mainBoxIconDevice'}>
                <div className={'boxIconDevice'}>
                    <span className={'span'}>
                        {children}
                    </span>
                </div>
                <span>
                    {device}
                </span>
            </section>
            <section className={'boxDeviceDescription'}>
                <h4>
                    {description}
                </h4>
            </section>
        </main>
    );
};

export default Devices;