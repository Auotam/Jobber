import Link from 'next/link';
import React from 'react';

const TeamDetailsArea = ({ item }) => {
    return (
        <>
            <section className="page-title-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-title-wrapper">
                                <p>Provides hassle-free backyard transformation</p>
                                <h1 className="page-title mb-10">{item.teamTitle}</h1>
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
                                    <li className="trail-item trail-end"><span>Team Details</span></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <div className="team-details-area pt-120 pb-60 mt-10">
                <div className="container">
                    <div className="team-detais-wrapper">
                        <div className="row wow fadeInUp" data-wow-delay=".3s">
                            <div className="col-xl-5">
                                <div className="member-img">
                                    <img src={item.teamImg} alt="" />

                                    <div className="member-contact mt-20">
                                        <ul>
                                            <li>
                                                <div className="single-contact">
                                                    <div className="contact-icon">
                                                        <i className="fas fa-phone"></i>
                                                    </div>
                                                    <p><a href="tel:+123-4561-5523">1800-000-0000</a></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="single-contact">
                                                    <div className="contact-icon">
                                                        <i className="fas fa-envelope-open"></i>
                                                    </div>
                                                    <p><a href="mailto:info@claypotbotanical.com">info@claypotbotanical.com</a></p>
                                                </div>
                                            </li>
                                            {/* <li>
                                                <div className="single-contact">
                                                    <div className="contact-icon">
                                                        <i className="fas fa-map-marked-alt"></i>
                                                    </div>
                                                    <p>Add: <a href="#">Flat 20, Reynolds Neck</a></p>
                                                </div>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7">
                                <div className="team-details-content-wrapper mb-60">
                                    <span className="member-designation">{item.teamSubtitle}</span>
                                    <h4 className="member-name">{item.teamTitle}</h4>
                                    <p className="mb-20">{item.content}</p>
                                                                      <div className="hr-1"></div>
                                    {/* <div className="team-details-social">
                                        <h4 className="section-widget-title">follow me on</h4>
                                        <div className="social-links team-social">
                                            <ul>
                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                            </ul>
                                        </div>
                                    </div> */}
                                    <div className="hr-1"></div>
                                    
                                    <div className="hr-1"></div>
                                    {/* <div className="team-details-contact mt-35">
                                        <h4 className="section-widget-title">Contact Me</h4>
                                        <p className="mb-25">It also symbolizes consciousness because of its enclosed characteristics, as
                                            opposed
                                            to the forest. Gardens are commonly considered feminine and represent fertility.</p>
                                        <div className="contact-form">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="single-input-field field-name">
                                                            <input type="text" placeholder="Enter full name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="single-input-field field-email">
                                                            <input type="text" placeholder="email address" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <div className="single-input-field field-message">
                                                            <textarea name="message" id="message" placeholder="message"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="contact-btn">
                                                    <button className="fill-btn"><i className="fal fa-farm"></i><span>Get a Quote</span></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamDetailsArea;