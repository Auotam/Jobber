import React from 'react';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import Career from './career';


const index = () => {
    return (
        <main>
            <HeaderOne />
            <Breadcrumb breadTitle={'Career'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'Career'} />
            <Career />
            <FooterOne />
        </main>
    );
};

export default index;