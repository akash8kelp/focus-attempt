import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/send-report', async (req: Request, res: Response) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send('Email is required');
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail', // You can use other services like 'SendGrid', 'Outlook365', etc.
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS, // For Gmail, this should be an "App Password", not your regular password
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your Sample Reports from Pulse',
        html: `
            <h1>Here are your sample reports</h1>
            <p>Thank you for your interest. Please find the attached sample reports.</p>
        `,
        attachments: [
            {
                filename: 'strategy.pdf',
                path: path.join(__dirname, '../../reports/strategy.pdf'),
                contentType: 'application/pdf',
            },
            {
                filename: 'safewater.pdf',
                path: path.join(__dirname, '../../reports/safewater.pdf'),
                contentType: 'application/pdf',
            },
        ],
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

export default router; 