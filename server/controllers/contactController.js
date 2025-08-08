import Contact from '../models/contactModel.js';
import nodemailer from 'nodemailer';

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Submit contact form
export const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }

    // Create new contact entry
    const newContact = await Contact.create({
      name,
      email,
      subject,
      message
    });

    // Send email notification to portfolio owner
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #4a6cf7; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #333;">Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #333;">Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong style="color: #333;">Subject:</strong> ${subject}</p>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #4a6cf7; margin: 15px 0;">
              <p style="margin: 0;"><strong style="color: #333;">Message:</strong></p>
              <p style="margin: 10px 0; line-height: 1.5;">${message}</p>
            </div>
          </div>
          <div style="font-size: 12px; color: #777; margin-top: 30px; padding-top: 10px; border-top: 1px solid #f0f0f0;">
            <p>This email was sent from your portfolio contact form.</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    
    // Send confirmation email to the sender
    const confirmationMailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: `Thank you for contacting me`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #4a6cf7; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">Thank You for Your Message</h2>
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;">Hello ${name},</p>
            <p style="margin: 10px 0; line-height: 1.5;">Thank you for reaching out to me through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
            <p style="margin: 10px 0; line-height: 1.5;">Here's a summary of your message:</p>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #4a6cf7; margin: 15px 0;">
              <p style="margin: 5px 0;"><strong style="color: #333;">Subject:</strong> ${subject}</p>
              <p style="margin: 5px 0;"><strong style="color: #333;">Message:</strong> ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}</p>
            </div>
            <p style="margin: 20px 0; line-height: 1.5;">I appreciate your interest and will respond to your inquiry shortly.</p>
            <p style="margin: 10px 0;">Best regards,</p>
            <p style="margin: 10px 0; font-weight: bold;">Bereket Hailu</p>
          </div>
          <div style="font-size: 12px; color: #777; margin-top: 30px; padding-top: 10px; border-top: 1px solid #f0f0f0;">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `
    };
    
    await transporter.sendMail(confirmationMailOptions);

    res.status(201).json({
      success: true,
      data: newContact,
      message: 'Contact form submitted successfully'
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting contact form',
      error: error.message
    });
  }
};

// Get all contact submissions (admin only)
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Error retrieving contacts',
      error: error.message
    });
  }
};