import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        // Return an error for non-POST requests
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    
    const transporter = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
            user: 'info@claypotbotanical.com', 
            pass: 'zavohpmjqxnpcsbg', 
        },
    });

    
    const mailOptionsToYou = {
        from: email,
        to: 'info@claypotbotanical.com', 
        subject: `Query for ${name} `,
        text: `From: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptionsToYou);

        // Define the thank you email template as a function that takes in the user's name, email, and message
const thankYouEmailTemplate = (name, email, message) => {
    return `
<!DOCTYPE html>
<html>
<head>
    <title>Thank You Email</title>
</head>
<body>
    <p>Dear ${name},</p>
    <p>Thank you for contacting Clay Pot Botanical! We appreciate you reaching out to us.</p>
    <p>We have received your message and will get back to you as soon as possible.</p>
    <p>Here are the details you provided:</p>
    <ul>
        <li><strong>Full Name:</strong> ${name}</li>
        <li><strong>Email Address:</strong> ${email}</li>
        <li><strong>Message:</strong> ${message}</li>
    </ul>
    <p>If you have any further questions or concerns, feel free to contact us again.</p>
    <p>Best Regards,<br>
    Clay Pot Botanical Team<br>
    <a href="http://www.claypotbotanical.com">www.claypotbotanical.com</a></p>
</body>
</html>
`;
};

// In the handler function, use the thank you email template for the html property
const mailOptionsToCustomer = {
    from: 'info@claypotbotanical.com', // Your email address
    to: email, // The customer's email address
    subject: 'Thank You for Contacting Clay Pot Botanical',
    html: thankYouEmailTemplate(name, email, message) // Use the template function to generate the HTML email content
};


        await transporter.sendMail(mailOptionsToCustomer);

        res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Error sending emails:', error);
        res.status(500).json({ error: 'Error sending email' });
    }
}
