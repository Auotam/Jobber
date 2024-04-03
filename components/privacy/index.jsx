import React from 'react';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';

import Privacy from './privacy';


const index = () => {
    return (
        <main>
            <HeaderOne />
            <Breadcrumb breadTitle={'Privacy Policy'} breadSubtitle={''} breadHome={'Home'} breadMenu={'Privacy'} />
            <Privacy />
            <FooterOne />
        </main>
    );
};

export default index;