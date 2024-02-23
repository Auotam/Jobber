import React from 'react';
import ServicesList from '../../data/services-data';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';
import ServiceDetailsArea from './service-details-area';





const index = ({id}) => {

    const item = ServicesList.find(service => service.id === id);
    
    return (
        <main>
            <HeaderOne />
            {item && <ServiceDetailsArea item={item} />}
            <FooterOne />
        </main>
    );
};

export default index;