import Link from 'next/link';
import React from 'react';
import portfolioList from '../../data/portfolio-data';

const PortfolioTabSection = () => {
    return (
        <div className="portfolio-area pt-120 pb-120">
         <div className="container">
         <div>
      <h3>Privacy Policy</h3>
      <p>
        At Clay Pot Botanical , we are committed to safeguarding the privacy of
        our website visitors and customers. This Privacy Policy outlines how we
        collect, use, disclose, and protect your personal information when you
        visit our website or make a purchase from us.
      </p>

      <h3>Information We Collect:</h3>
      <p>
        When you visit our website, we may collect certain information
        automatically, including your IP address, browser type, operating
        system, referring URLs, and other technical information. Additionally,
        when you make a purchase or sign up for our newsletter, we may collect
        personal information such as your name, email address, shipping address,
        and payment details.
      </p>

      <h3>How We Use Your Information:</h3>
      <p>
        We use the information we collect to process your orders, communicate
        with you about your purchases, send you promotional offers and
        newsletters (if you opt-in), improve our website and services, and
        comply with legal obligations.
      </p>

      <h3>Disclosure of Your Information:</h3>
      <p>
        We do not sell, trade, or otherwise transfer your personal information
        to outside parties unless we provide you with advance notice, except as
        described below:
      </p>
      <ul>
        <li>
          Trusted third parties who assist us in operating our website,
          conducting our business, or servicing you, as long as those parties
          agree to keep this information confidential.
        </li>
        <li>
          When required by law, such as to comply with a subpoena, or similar
          legal process.
        </li>
        <li>
          To protect and defend our rights and property, or the safety of our
          customers or others.
        </li>
      </ul>

      <h3>Data Security:</h3>
      <p>
        We implement a variety of security measures to maintain the safety of
        your personal information when you place an order or enter, submit, or
        access your personal information.
      </p>

      <h3>Your Rights:</h3>
      <p>
        You have the right to access, update, or delete your personal
        information at any time. If you would like to do so, please contact us
        using the information provided below.
      </p>

      <h3>Cookies:</h3>
      <p>
        We use cookies to enhance your experience on our website. Cookies are
        small files that a site or its service provider transfers to your
        computer's hard drive through your web browser (if you allow) that
        enables the site's or service provider's systems to recognize your
        browser and capture and remember certain information.
      </p>

      <h3>Changes to This Privacy Policy:</h3>
      <p>
        We reserve the right to modify this Privacy Policy at any time, so
        please review it frequently. Changes and clarifications will take effect
        immediately upon their posting on the website.
      </p>

      <h3>Contact Us:</h3>
      <p>
        If you have any questions or concerns regarding this Privacy Policy,
        please contact us at{" "}
        <a href="mailto:info@claypotbotanical.com">
        info@claypotbotanical.com
        </a>
        .
      </p>

      <p>
        By using our website, you consent to our Privacy Policy. Thank you for
        choosing Clay Pot Botanical.
      </p>
    </div>
         </div>
      </div>
    );
};

export default PortfolioTabSection;