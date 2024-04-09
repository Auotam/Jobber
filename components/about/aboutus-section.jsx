import Link from 'next/link';
import React, {useState} from 'react';
import Modal from '../../components/model';

const AboutUsSection = () => {
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
        <section className="about-area pt-120 pb-90">
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-6">
                        <div className="about-thumb mb-30">
                            <img src="/assets/img/about/about-thumb.jpeg" alt=""/>
                            <div className="about-thumb-meta">
                                <p>since 2019</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content mb-30">
                            <div className="section-title">
                                <span className="section-subtitle">about us</span>
                                <h2 className="section-main-title mb-20">Premier Garden and Lawn Care Service Provider</h2>
                            </div>
                            <p className="mb-30">Welcome to Clay Pot Botanical. We focus on top-quality lawn care and beautiful garden installations to enhance outdoor space. Our dedicated team provides expert lawn maintenance services to keep your yard looking its best throughout the year. Additionally, we offer customized garden installations to create a captivating outdoor setting that reflects your unique style. Let Clay Pot Botanical bring your outdoor vision to life</p>
                            
                            <div className="about-btn">
                                <a className="fill-btn" onClick={handleOpenModal}>get in touch<i className="fal fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
    );
};

export default AboutUsSection;
