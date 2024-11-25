import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    // Parse the incoming JSON request body
    const body = await req.json();
    const { name, email, message } = body;

    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtpout.secureserver.net', 
      port: 465, 
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send the email
    const response = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: message, // Plain text
      html: `<body style="margin: 0; display: flex; align-items: center; justify-content: center; background: linear-gradient(to bottom right, #f3f4f6, #e5e7eb); padding: 10px; font-family: Arial, sans-serif;">

  <div style="width: 100%; max-width: 400px; background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(8px); box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1); border-radius: 1.5rem; overflow: hidden;">
    <div style="padding: 24px;">

      <div style="margin-bottom: 24px;">
        <h2 style="margin: 0; font-size: 24px; font-weight: 600; color: #1f2937;">Contact Details</h2>
        <div style="margin-top: 8px; height: 4px; width: 80px; background-color: #3b82f6; border-radius: 9999px;"></div>
      </div>

      <p style="margin-bottom: 24px; color: #4b5563; font-size: 14px;">You have a message from website! Below are the contact details and message.</p>

      <div style="margin-bottom: 16px; display: flex; align-items: center; gap: 12px;">
        <div>
          <p style="margin: 0; font-size: 20px; color: #1f2937;">Name</p>
          <p style="margin: 0; font-weight: 500; color: #1f2937;">${name}</p>
        </div>
      </div>

      <div style="margin-bottom: 16px; display: flex; align-items: center; gap: 12px;">
        <div>
          <p style="margin: 0; font-size: 20px; color: #1f2937;">Email</p>
          <p style="margin: 0; font-weight: 500; color: #1f2937;"> ${email}</p>
        </div>
      </div>

      <div style="padding-top: 16px; border-top: 1px solid #e5e7eb;">
        <h3 style="margin: 0 0 8px; font-size: 18px; font-weight: 600; color: #1f2937;">Message</h3>
        <p style="margin: 0; color: #4b5563; white-space: pre-wrap;">${message}</p>
      </div>
    </div>
  </div>

</body>`,
    });

if (response.accepted){
    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });  
}else{
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
}
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
