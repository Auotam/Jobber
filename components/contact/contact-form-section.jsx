import React, {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactFormSection = () => {
    const [query, setQuery] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('/api/sendquery', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, query }),
        });

        if (response.ok) {
            // If the API request is successful
            toast.success('you Query sent successfully!');
            // Reset form
            setName('');
            setEmail('');
            setQuery('');
        } else {
            // If the API request fails
            toast.error('your Query is not send.');
        }
    };
    
    return (
        <section className="contact-area pb-40">
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-12">
                        <div className="contact-wrapper">
                            <div className="contact-wrapper-content">
                                <div className="section-title">
                                    <span className="section-subtitle">Contact us</span>
                                    <h2 className="section-main-title mb-35">Send Us A Message
                                        For Next Project</h2>
                                </div>
                                <div className="contact-form">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="single-input-field field-name">
                                                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter full name" required/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="single-input-field field-email">
                                                    <input type="text" placeholder="email address" onChange={(e) => setEmail(e.target.value)} required/>
                                                    
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="single-input-field field-message">
                                                <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    required
                />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contact-btn">
                                            <button type='submit' className="fill-btn"><i className="fal fa-farm"></i><span>Send a Message</span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="contact-wrapper-img">
                                <img src="/assets/img/about/contact-img.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;