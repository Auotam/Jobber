import Link from 'next/link';
import React from 'react';

const FoundationSection = () => {
    return (
        <section className="foundation-area foundation-area-bg pt-120 pb-60">
            <div className="foundation-bg-shape">
                <img src="/assets/img/shape/pattern.png" alt=""/>
            </div>
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-6">
                        <div className="foundation-img mb-60">
                            <img src="/assets/img/about/foundation.jpeg" alt="img"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="foundation-content mb-60">
                            <div className="section-title">
                                <span className="section-subtitle">Since 2019</span>
                                <h2 className="section-main-title mb-20">Full-SERVICE GRASS CARE</h2>
                            </div>
                            <p>Experience the convenience and pea ce of mind that full-service lawn care
                                brings. spend more time loving your green spaces, leaving the worry to us.
                            </p>
                            <div className="founder-meta mt-45">
                                <div className="founder-info-meta">
                                <Link href="/about"><a className="fill-btn-rounded">get in touch<i className="fal fa-angle-right"></i></a></Link>
                                    {/* <div className="founder-img">
                                        <img src="/assets/img/team/founder.jpg" alt=""/>
                                    </div> */}
                                    {/* <div className="founder-desciption">
                                        <span className="designation">founder</span>
                                        <h4 className="founder-name">humble d. dowson</h4>
                                    </div> */}
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundationSection;