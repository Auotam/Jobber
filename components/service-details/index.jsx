import React from 'react';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import BlogSection from '../home/blog-section';
import ServicesSection from '../services/services-section';
import ServiceChooseSection from '../services/service-choose-section';
// import ServiceChooseSection from './service-choose-section';
// import ServicesSection from '../services-section';
import ContactFormSection from '../contact/contact-form-section';



const index = () => {
    return (
        <main>
            <HeaderOne />
            <Breadcrumb breadTitle={'services'}  breadHome={'Home'} breadMenu={'services'} />
            <ServicesSection />
            <ServiceChooseSection />
            <ContactFormSection />
            <FooterOne />
        </main>
    );
};

export default index;