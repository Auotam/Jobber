import Link from 'next/link';
import React, {useEffect} from 'react';
import { useRouter } from 'next/router';

const ServiceDetailsArea = ({ item }) => {
    const backgroundImageUrl = `${item.serviceImgNew}`;
    const backgroundImageUrl2 = `${item.serviceImgNew2}`;
    
    
    const router = useRouter();
    const { id } = router.query;
    const isCommercialService = id === 'residential';


    console.log(router.pathname)
    return (
        <>
            <section className="page-title-area bannerout" style={{ background: `url(${backgroundImageUrl}) center`, backgroundSize: "cover" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-title-wrapper">
                                
                                <h1 className="page-title mb-10">{item.serviceTitle}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="breadcrumb-menu">
                            <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                                <ul className="trail-items">
                                    <li className="trail-item trail-begin"><Link href="/"><a><span>Home</span></a></Link></li>
                                    <li className="trail-item trail-end"><span>Service Details</span></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-details pt-120 pb-60">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-lg-9 col-md-12">
                            <div className="service-details-main mb-60">
                                <div className="service-image">
                                    <img src={backgroundImageUrl2} alt="" />
                                </div>
                                <h3 className="mb-15">{item.paraone && item.paraone.para1 && item.paraone.para1.title}</h3>
                                 <p className="mb-15">{item.paraone && item.paraone.para1 && item.paraone.para1.content}</p>
                                

                                 <h3 className="mb-15">{item.paraone && item.paraone.para2 && item.paraone.para2.title}</h3>
                                 <p className="mb-15">{item.paraone && item.paraone.para2 && item.paraone.para2.content}</p>
                                

                                 <h3 className="mb-15">{item.paraone && item.paraone.para3 && item.paraone.para3.title}</h3>
                                 <p className="mb-15">{item.paraone && item.paraone.para3 && item.paraone.para3.content}</p>
                                
                                 {isCommercialService && (
                                    <>
                                <h3 className="mb-25">how we work</h3>
                                <div className="how-works-wrapper">
                                    <div className="working-steps">
                                        <div className="work-step">
                                            <div className="work-step-icon">
                                                <img src="/assets/img/icon/work-icon1.png" alt="" />
                                            </div>
                                            <h4>GARDEN DESIGN</h4>
                                            <p>Plan your service how you like it.</p>
                                        </div>
                                        <div className="work-step">
                                            <div className="work-step-icon">
                                                <img src="/assets/img/icon/work-icon2.png" alt="" />
                                            </div>
                                            <h4>SOIL PREPARATION</h4>
                                            <p>Balance Your soil for maximum plant potential.</p>
                                        </div>
                                        <div className="work-step">
                                            <div className="work-step-icon">
                                                <img src="/assets/img/icon/work-icon3.png" alt="" />
                                            </div>
                                            <h4>READY TO PLANT</h4>
                                            <p>Careful installation of cultivars.</p>
                                        </div>

                                        
                                    </div>
                                </div>
                                </>

                                 )}
                               
                                
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-8">
                            <div className="service-sidebar-wrapper mb-60">
                                <div className="sidebar-widget sidebar-service mb-50">
                                    <h4 className="sidebar-widget-title">Our Services</h4>
                                    <div className="sidebar-service-list">
                                        <ul>
                                            <li><Link href="javascript:"><a>RESIDENTIAL LAWN CARE </a></Link></li>
                                            <li><Link href="javascript:"><a>COMMERCIAL MOWING</a></Link></li>
                                            <li><Link href="javascript:"><a>VEGETATION CONTROL</a></Link></li>
                                            <li><Link href="javascript:"><a>EDIBLE GARDEN INSTALLATION</a></Link></li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                {/* <div className="sidebar-widget sidebar-materials mb-50">
                                    <h4 className="sidebar-widget-title">Our Materials</h4>
                                    <div className="sidebar-materials-list">
                                        <ul>
                                            <li><a href="#"><i className="fas fa-file-pdf"></i>Company Profile</a></li>
                                            <li><a href="#"><i className="fas fa-file-image"></i>Service Details</a></li>
                                            <li><a href="#"><i className="fas fa-file-prescription"></i>Service Technician</a></li>
                                        </ul>
                                    </div>
                                </div> */}
                                {/* <div className="sidebar-widget sidebar-adv mb-50">
                                    <img src="/assets/img/service/service-sidebar-adv.jpg" alt="" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceDetailsArea;