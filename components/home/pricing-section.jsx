import Link from 'next/link';
import React from 'react';

const PricingSection = () => {

   const pricingList = [
      {
         id: 1,
         packageIcon: '/assets/img/icon/pricing-icon-1.png',
         packageName: 'Essential',
         packagePrice: '$75.00',
         packageService: 'Standard Cut (Mowing, Edging, Weedeating, Blowing)',
         packagePlaning: 'Leaf & Litter Removal',
         packageParty: 'Hedge & Shrub Trimming   klk         ',
         packageLandscape: 'Garden Bed Cleaning',
         packageMulching: 'Mulching',
         packagePesticide: 'Pesticide Application',
         packagesoil: 'Soil Aeration',
         packageCompost: 'Compost Application',
         packageFerti: 'Fertilization',
         packageBtn: 'get it now',
         packageActive: 'single-pricing mb-30',
         packageBadge: 'd-none',
         packageListClassA: 'no-inc',
         packageListClassB: 'n-inc',
         packageListClassC: 'n-inc',
         packageListClassD: 'n-inc',
         packageListClassE: 'n-inc',
         packageListClassF: 'n-inc',
         packageListClassG: 'n-inc',
         packageListClassH: 'n-inc',
         packageListClassI: 'n-inc'
      },
      {
         id: 2,
         packageIcon: '/assets/img/icon/pricing-icon-2.png',
         packageName: 'Professional',
         packagePrice: '$125.00',
         packageService: 'Standard Cut (Mowing, Edging, Weedeating, Blowing)',
         packagePlaning: 'Leaf & Litter Removal',
         packageParty: 'Hedge & Shrub Trimming   klk         ',
         packageLandscape: 'Garden Bed Cleaning',
         packageMulching: 'Mulching',
         packagePesticide: 'Pesticide Application',
         packagesoil: 'Soil Aeration',
         packageCompost: 'Compost Application',
         packageFerti: 'Fertilization',
         packageBtn: 'get it now',
         packageActive: 'single-pricing mb-30',
         packageBadge: 'd-none',
         packageListClassA: 'no-inc',
         packageListClassB: 'no-inc',
         packageListClassC: 'no-inc',
         packageListClassD: 'n-inc',
         packageListClassE: 'n-inc',
         packageListClassF: 'n-inc',
         packageListClassG: 'n-inc',
         packageListClassH: 'n-inc',
         packageListClassI: 'n-inc'
      },
      {
         id: 3,
         packageIcon: '/assets/img/icon/pricing-icon-3.png',
         packageName: 'Premium',
         packagePrice: '$225.00',
         packageService: 'Standard Cut (Mowing, Edging, Weedeating, Blowing)',
         packagePlaning: 'Leaf & Litter Removal',
         packageParty: 'Hedge & Shrub Trimming   klk         ',
         packageLandscape: 'Garden Bed Cleaning',
         packageMulching: 'Mulching',
         packagePesticide: 'Pesticide Application',
         packagesoil: 'Soil Aeration',
         packageCompost: 'Compost Application',
         packageFerti: 'Fertilization',
         packageBtn: 'get it now',
         packageActive: 'single-pricing mb-30',
         packageBadge: 'd-none',
         packageListClassA: 'no-inc',
         packageListClassB: 'no-inc',
         packageListClassC: 'no-inc',
         packageListClassD: 'no-inc',
         packageListClassE: 'no-inc',
         packageListClassF: 'n-inc',
         packageListClassG: 'n-inc',
         packageListClassH: 'n-inc',
         packageListClassI: 'n-inc'
      },
      
   ]
    return (
        <section className="pricing-area pricing-area-bg pt-120 pb-90">
         <div className="container">
            <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-8">
                  <div className="section-title text-center pricing-section-title">
                     <span className="section-subtitle">pricing</span>
                     <h2 className="section-main-title mb-45">Residential Lawn Care Subscription Plans
</h2>
                  </div>
               </div>
            </div>
            <div className="pricing-wrapper wow fadeInUp" data-wow-delay=".3s">
               {pricingList &&
                  <div className="row">
                     {pricingList.map((item, num) => (
                        <div className="col-xl-4 col-lg-4 col-md-6" key={num}>
                           <div className={item.packageActive}>
                           <div className={item.packageBadge}>best choice</div>
                              <div className="pricing-content">
                                 <div className="pricing-shape">
                                    <img src={item.packageIcon} alt=""/>
                                 </div>
                                 <span className="package-name">{item.packageName}</span>
                                 <span className="package-price">{item.packagePrice}</span>
                                 <div className="package-list">
                                    <ul>
                                       <li className={item.packageListClassA}>{item.packageService}</li>
                                       <li className={item.packageListClassB}>{item.packagePlaning}</li>
                                       <li className={item.packageListClassC}>{item.packageParty}</li>
                                       <li className={item.packageListClassD}>{item.packageLandscape}</li>
                                       <li className={item.packageListClassE}>{item.packageMulching}</li>
                                       <li className={item.packageListClassF}>{item.packagePesticide}</li>
                                       <li className={item.packageListClassG}>{item.packagesoil}</li>
                                       <li className={item.packageListClassH}>{item.packageCompost}</li>
                                       <li className={item.packageListClassI}>{item.packageFerti}</li>
                                       <li className={item.packageListClassJ}>{item.packageFence}</li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="pricing-btn">
                                 <Link href="/contact"><a className="fill-btn"><i className="fas fa-shopping-basket"></i>{item.packageBtn}</a></Link>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               }
            </div>
         </div>
      </section>
    );
};

export default PricingSection;