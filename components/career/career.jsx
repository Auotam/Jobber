import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Navigation, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import blogItemsList from '../../data/career';
import BlogAbout from './blog-about';
import BlogSearch from './blog-search';
import SidebarBlogs from './sidebar-blogs';
import BlogTag from './blog-tag';
import BlogCategories from './blog-categories';
import SponsorAdd from './sponsor-add';

const BlogSectionMain = () => {

   const [isOpen, setIsOpen] = useState(false);
   const openVideoModal = () => setIsOpen(!isOpen);

   return (
      
      <section className="contact-area pb-40">
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-12">
                        <div className="contact-wrapper">
                            <div className="contact-wrapper-content">
                                <div className="section-title">
                                    <span className="section-subtitle">Clay Pot Botanical</span>
                                    <h2 className="section-main-title mb-35">Let's Customize Your Career Path Together!</h2>
                                </div>
                                <div className="contact-form">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="single-input-field field-name">
                                                    <input type="text" placeholder="First Name"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="single-input-field field-name">
                                                    <input type="text" placeholder="Last Name"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="single-input-field field-email">
                                                    <input type="text" placeholder="email address"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="single-input-field field-phone">
                                                    <input type="text" placeholder="Phone"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="single-input-field field-file">
                                                   
                                                    <input type="file" placeholder="Upload your CV"/>
                                                </div>
                                            </div>
                                            {/* <div className="col-sm-12">
                                                <div className="single-input-field field-message">
                                                    <textarea name="message" id="message" placeholder="message"></textarea>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="contact-btn">
                                            <button type='submit' className="fill-btn"><i className="fal fa-share"></i><span>Send</span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="contact-wrapper-img">
                                <img src="/assets/img/history/history-thumb-5.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   );
};

export default BlogSectionMain;