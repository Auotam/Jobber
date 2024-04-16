import nodemailer from 'nodemailer';


const isValidEmail = (email) => {
    const emailRegex = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/';
    return emailRegex.test(email);
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
    const { name, email, query } = req.body;
    if (!name || !email || !query) {
        return res.status(400).json({ error: 'Name, email, and query are required.' });
    }
    if (!isValidEmail(email)) {
        return res.status(400).json({ error: 'Invalid email format.' });
    }
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER, 
            pass: process.env.EMAIL_PASS, 
        },
    });
    const recipientMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: 'New Query from Website',
        text: `Name: ${name}\nEmail: ${email}\nQuery: ${query}`,
    };

    
    const thankYouMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for your query!',
        text: `Dear ${name},\n\nThank you for reaching out to us. We have received your query and will get back to you as soon as possible.\n\nBest regards,\n[Your Company Name]`,
    };

    try {
        
        await transporter.sendMail(recipientMailOptions);

        
        await transporter.sendMail(thankYouMailOptions);

        
        return res.status(200).json({ message: 'Query sent successfully!' });
    } catch (error) {
        
        console.error('Failed to send email:', error.message);

        
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
