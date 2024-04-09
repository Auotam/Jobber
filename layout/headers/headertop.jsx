import React from 'react';

const HeaderTop = () => {
    return (
        <div className="header-top-area d-none d-lg-block">
            <div className="container container-big">
                <div className="header-top-inner">
                    <div className="header-top-left">
                        <div className="meta-items">
                            <div className="meta-item">
                                <div className="meta-item-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                 <div className="meta-item-text">
                                    <p><a href="tel:+14709483755">+1 (470) 948-3755</a></p>
                                </div> 
                            </div>
                            <div className="meta-item">
                                <div className="meta-item-icon">
                                    <i className="fas fa-envelope-open"></i>
                                </div>
                                <div className="meta-item-text">
                                    <p><a href="mailto:info@Clay Pot Botanical.com">info@claypotbotanical.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-top-right">
                        <div className="meta-items">
                            <div className="meta-item">
                                <div className="meta-item-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="meta-item-text">
                                    <p>Mon - Fri: 9:00 - 18:00 <span className="d-none d-xl-inline-block">Sat-Sun 
                                        <strong> 10:00/11:00 - 15:00</strong></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="header-top-social">
                            <div className="social-links">
                                <ul>
                                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;