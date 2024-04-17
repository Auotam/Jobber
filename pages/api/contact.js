import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        // Return an error for non-POST requests
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: 'delivery@auotam.com', 
            pass: 'Auotam@2233456', 
        },
    });

    
    const mailOptionsToYou = {
        from: email,
        to: 'delivery@auotam.com', 
        subject: 'New Contact Form Submission',
        text: `From: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptionsToYou);

        
        const mailOptionsToCustomer = {
            from: 'delivery@auotam.com',
            to: email,
            subject: 'Thank you for contacting us!',
            text: `Hi ${name},\n\nThank you for reaching out! We have received your message and will get back to you as soon as possible.\n\nBest,\nYour Team`,
        };

        await transporter.sendMail(mailOptionsToCustomer);

        res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Error sending emails:', error);
        res.status(500).json({ error: 'Error sending email' });
    }
}
