import Link from 'next/link';
import React, {useState} from 'react';
import ServicesList from '../../data/services-data';
import Modal from '../../components/model';

const ServiceSection = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
     

    const handleOpenModal = () => {
      console.log("Opening modal");
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      console.log("Closing modal");
      setIsModalOpen(false);
    };
  
    console.log("isModalOpen:", isModalOpen);

    return (
        <>
        <section className="services-area services-area-2">
         <div className="container">
            <div className="services-wrapper services-wrapper-2">
            {ServicesList &&
                <div className="services-inner services-inner-2 wow fadeInUp" data-wow-delay=".3s">
                    <div className="row g-0">
                    {ServicesList.slice(0, 4).map ((item, num) => (
                        <div className="col-lg-3 col-md-6" key={num}>
                            <div className="single-service style-2">
                            <div className="service-img">
                                <img src={item.serviceImg} alt="service-img"/>
                            </div>
                            <div className="single-service-content">
                                <div className="service-icon">
                                    <i className={item.serviceIcon}></i>
                                </div>
                                <h4 className="service-title"><Link href={`/service-details/${item.id}`}><a>{item.serviceTitle}</a></Link></h4>
                                <p>{item.serviceDesc}</p>
                            </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            }
               <div className="services-action-wrapper wow fadeInUp" data-wow-delay=".3s">
                  <div className="service-action-bg-shape">
                     <img src="/assets/img/shape/pattern-1270.png" alt="shape-img"/>
                  </div>
                  <h3>GIVE YOUR LAWN THE VIP TREATMENT.</h3>
                     <a className="fill-btn-rounded" onClick={handleOpenModal} ><i className="fal fa-farm"></i><span>Get a Quote</span></a>
                     {/* <Link href="/contact"><a className="fill-btn-rounded"><i className="fal fa-farm"></i><span>Get a Quote</span></a></Link> */}
               </div>
            </div>
         </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      </>
      
    );
};

export default ServiceSection;