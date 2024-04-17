import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactFormSection = () => {
    // Initialize the form data state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    // Update form data when input fields change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Send form data to the API
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                toast.success("Thank you! Your query has been sent.");
                setIsSubmitted(true);
            } else {
                // Handle different error scenarios based on the response status code
                const errorData = await response.json();
                switch (response.status) {
                    case 400:
                        toast.error("Invalid data provided. Please check your inputs.");
                        break;
                    case 401:
                        toast.error("Unauthorized request. Please log in.");
                        break;
                    case 500:
                        toast.error("Server error. Please try again later.");
                        break;
                    default:
                        toast.error("Failed to submit your query. Please try again.");
                }
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error("An error occurred while submitting the form. Please try again.");
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
                                    <h2 className="section-main-title mb-35">Send Us A Message For Next Project</h2>
                                </div>

                                {isSubmitted ? (
                                    <p>Thank you for your message! We will get back to you soon.</p>
                                ) : (
                                    <div className="contact-form">
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="single-input-field field-name">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            placeholder="Enter full name"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="single-input-field field-email">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            placeholder="Email address"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="single-input-field field-message">
                                                        <textarea
                                                            name="message"
                                                            value={formData.message}
                                                            onChange={handleChange}
                                                            placeholder="Your message"
                                                            required
                                                        ></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="contact-btn">
                                                <button type="submit" className="fill-btn">
                                                    <i className="fal fa-farm"></i>
                                                    <span>Send a Message</span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                )}
                            </div>
                            <div className="contact-wrapper-img">
                                <img src="/assets/img/about/contact-img.jpg" alt="Contact Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;
