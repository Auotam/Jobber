import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import useGlobalContext from '../../hooks/use-context';
import Modal from '../model';

const Sidebar = () => {
    const { showSidebar, setShowSidebar } = useGlobalContext();
    const [home, setHome] = useState(false);
    const [shop, setShop] = useState(false);
    const [productPages, setProductPages] = useState(false);
    const [otherPages, setOtherPages] = useState(false);
    const [blog, setBlog] = useState(false);

    const handleMenuDropDown = (page) => {
        if (page === 'home') {
            setHome(!home)
            setShop(false)
            setProductPages(false)
            setOtherPages(false);
            setBlog(false)
        }

        if (page === 'shop') {
            setHome(false)
            setShop(!shop)
            setProductPages(false)
            setOtherPages(false)
            setBlog(false)
        }

        if (page === 'product-pages') {
            setHome(false)
            setShop(false)
            setProductPages(!productPages)
            setOtherPages(false)
            setBlog(false)
        }

        if (page === 'other-pages') {
            setHome(false)
            setShop(false)
            setProductPages(false)
            setOtherPages(!otherPages)
            setBlog(false)
        }

        if (page === 'blog') {
            setHome(false)
            setShop(false)
            setProductPages(false)
            setOtherPages(false)
            setBlog(!blog)
        }
    }


    const [isModalOpen, setIsModalOpen] = useState(false);
     

    const handleOpenModal = () => {
      console.log("Opening modal");
      if (showSidebar) {
        setShowSidebar(false);
    }
      setIsModalOpen(true);
      
    };
  
    const handleCloseModal = () => {
      console.log("Closing modal");
      setIsModalOpen(false);
    };
  
    console.log("isModalOpen:", isModalOpen);

    return (
        <>
            <div className="fix">
                <div className={`side-info ${showSidebar ? 'info-open' : ''}`}>
                    <div className="side-info-content">
                        <div className="offset-widget offset-logo mb-40">
                            <div className="row align-items-center">
                                <div className="col-9">
                                    <Link href="/"><a><img src="/assets/img/logo/logo-bl.png" alt="Logo" /></a></Link>
                                </div>
                                <div className="col-3 text-end"><button className="side-info-close" onClick={() => setShowSidebar(false)}><i className="fal fa-times"></i></button></div>
                            </div>
                        </div>
                        {/* <!-- side-mobile-menu start --> */}
                        <nav className="side-mobile-menu d-block d-xl-none mm-menu">
                            <ul>
                                <li className={`menu-item-has-children  ${home ? 'active' : ''}`}>
                                    <a onClick={() => handleMenuDropDown('home')}>Home</a >
                                    
                                </li>
                                <li><Link href="/services/residential">Resident</Link></li>
                                <li><Link href="/services/residential">commercial</Link></li>
                                <li><Link href="/about">About</Link></li>
                                {/* <li className={`menu-item-has-children has-droupdown ${productPages ? 'active' : ''}`}>
                                    <a onClick={() => handleMenuDropDown('product-pages')}>Services</a>
                                    <ul onClick={() => setShowSidebar(false)} className={`sub-menu ${productPages ? 'active' : ''}`}>
                                        <li><Link href="/service">Services</Link></li>
                                        <li><Link href="/service-details">Service Details</Link></li>
                                    </ul>
                                </li> */}
                                
                                
                                
                                <li> <Link href="/contact">Contact</Link> </li>
                            </ul>
                        </nav>
                        
                        <div className="offset-widget offset-support mb-30">
                            <div className="footer-support">
                                <div className="irc-item support-meta">
                                    
                                    <div className="irc-item-content">
                                        
                                        <div  className="border-btn-rounded  d-lg-inline-flex" onClick={handleOpenModal} ><i className="fas fa-phone-alt"></i> Get a Quote</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="offset-widget offset-social mb-30">
                            <div className="footer-social">
                                <span>Connect:</span>
                                <div className="social-links">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => setShowSidebar(false)} className={`offcanvas-overlay ${showSidebar ? 'overlay-open' : ''}`}></div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
    );
};

export default Sidebar;
