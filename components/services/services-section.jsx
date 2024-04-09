import Link from 'next/link';
import React, {useState} from 'react';
import ServicesList from '../../data/services-data';
import Modal from '../model';

const ServicesSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };


    return (
        <>
        <section className="services-area pt-120 pb-90">
         <div className="container">
            <div className="services-wrapper">
                {ServicesList &&
                    <div className="row">
                        {ServicesList.slice(17, 23).map((item, num) => (
                            <div className="col-lg-4 col-md-6" key={num}>
                                <div className="single-service single-service-default mb-30">
                                    <div className="service-icon">
                                        <img src={item.serviceIcon} alt="service icon" />
                                    </div>
                                    <div className="single-service-content">
                                        {/* <span className="service-number"></span> */}
                                        <h4 className="service-title"><Link href={`/services/${item.id}`}><a>{item.serviceTitle}</a></Link></h4>
                                        <p>{item.serviceDesc}</p>
                                        <Link href={`/services/${item.id}`}><a className='text-btn'><i className="fal fa-long-arrow-right"></i>{item.serviceBtn}<i className="fal fa-long-arrow-right"></i></a></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="col-lg-4 col-md-6" >
                                <div className="single-service single-service-default mb-30 backgroundGreen">
                                   
                                    <div className="single-service-content">
                                        {/* <span className="service-number"></span> */}
                                        <h4 className="service-title"><Link href=""><a>Get a Quote</a></Link></h4>
                                        <p>Kindly complete the form to unlock tailored solutions, setting the stage for personalized assistance and meaningful connections.</p>
                                        <a onClick={handleOpenModal} className='text-btn'><i className="fal fa-long-arrow-right"></i>Click Here<i className="fal fa-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                    </div>
                }
            </div>
         </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      </>
    );
};

export default ServicesSection;