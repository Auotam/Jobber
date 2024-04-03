import React from 'react';
import dynamic from "next/dynamic";

const Counter = dynamic(() => import('../common/counter'), {
    ssr: false
  })

const FactSection = () => {

    const factList = [
        {
            id: 1,
            factTitle: 'year experience',
            factNumber: '5',
            factIcon: '/assets/img/icon/fact-icon.png',
            factDesk: 'We are just getting started.',
            factPlant: 'fact-single'
        },
        {
            id: 2,
            factTitle: 'Acered Serviced',
            factNumber: '6781',
            factIcon: '/assets/img/icon/fact-icon.png',
            factDesk: 'Beautiful solution for every square foot.',
            factPlant: 'fact-single fact-plant-shape'
        },
        {
            id: 3,
            factTitle: 'Plant Successfully harvested',
            factNumber: '3157',
            factIcon: '/assets/img/icon/fact-icon.png',
            factDesk: 'Lawn care never tested so good.',
            factPlant: 'fact-single'
        }
    ]

    return (
        <section className="fact-area fact-area-bg">
            <div className="fact-batch">
                <img src="/assets/img/icon/fact-batch.jpeg" alt=""/>
            </div>
            <div className="container">
                <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-12 col-md-10">
                        <div className="section-title fact-title text-center">
                            <span className="section-subtitle">fun fact</span>
                            <h2 className="section-main-title mb-45">We handle everything for you!</h2>
                        </div>
                    </div>
                </div>
                <div className="fact-wrapper wow fadeInUp" data-wow-delay=".3s">
                    {factList &&
                        <div className="row">
                            {factList.map((item, num) => (
                                <div className="col-lg-4" key={num}>
                                    <div className={item.factPlant}>
                                        <div className="fact-content">
                                            <span className="fact-title">{item.factTitle}</span>
                                            <span className="fact-number counter"><Counter number={item.factNumber} text={''} /></span>
                                            <div className="fact-icon">
                                                <img src={item.factIcon} alt=""/>
                                            </div>
                                            <p>{item.factDesk}</p>
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

export default FactSection;