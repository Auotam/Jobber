import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from '../../components/common/sidebar';
import SidebarCart from '../../components/common/sidebar-cart';
import useCartInfo from '../../hooks/use-cart-info';
import useGlobalContext from '../../hooks/use-context';
import HeaderTop from './headertop';
import NavMenu from './navmenu';
import Modal from '../../components/model';

const HeaderOne = () => {
    
    const [openCart,setOpenCart] = useState(false)
    const { quantity } = useCartInfo();
    //for mobile menu
    const { setShowSidebar } = useGlobalContext();

    const openJobberForm = () => {
        
        // Open a new window for the Jobber form
        window.open('https://clienthub.getjobber.com/client_hubs/57afc737-74dd-43e4-90cc-fb6f589ec820/public/work_request/new?source=social_media', '_blank');
      };
    


    
    // Sticky Menu Area start
	useEffect(() => {
		window.addEventListener('scroll', sticky);
		return () => {
		   window.removeEventListener('scroll', sticky);
		};
	 });
  
	 const sticky = (e) => {
		const header = document.querySelector('.header-main');
		const scrollTop = window.scrollY;
		scrollTop >= 40 ? header.classList.add('sticky') : header.classList.remove('sticky');
	 };

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
	 // Sticky Menu Area End
    return (
        <>
      
            <header className="header1">
                <HeaderTop />
                <div id="header-sticky" className="header-main header-main1">
                    <div className="container container-big">
                        <div className="row align-items-center">
                            <div className="col-xl-12 col-lg-12">
                                <div className="header-main-content-wrapper">
                                    <div className="header-main-left header-main-left-header1">
                                        <div className="header-logo header1-logo">
                                            <Link href="/"><a className="logo-bl"><img src="/assets/img/logo/logo-w-nbg.svg"
                                                alt="logo-img" /></a></Link>
                                        </div>
                                        <div className="main-menu main-menu1 d-none d-xl-block">
                                            <nav id="mobile-menu">
                                                <NavMenu />
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="header-main-right header-main-right-header1">
                                        {/* <span onClick={()=> setOpenCart(true)} className="action-btn cart-btn d-inline-flex action-item-cart"><i className="fas fa-shopping-basket"></i><span className='product-quantity-circle-cart'>({quantity})</span></span> */}
                                        <a className="border-btn-rounded d-none d-lg-inline-flex" onClick={openJobberForm} ><i className="fal fa-farm"></i><span>Get a Quote</span></a>
                                        <div className="menu-bar d-xl-none">
                                            <span className="side-toggle" onClick={() => setShowSidebar(true)}>
                                                <div className="bar-icon">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* sidebar start */}
            <Sidebar />
            {/* sidebar end */}

            {/* side cart */}
            <SidebarCart openCart={openCart} setOpenCart={setOpenCart}/>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
            {/* side cart */}
            
        </>
    );
};

export default HeaderOne;