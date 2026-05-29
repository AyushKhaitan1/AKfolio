import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    const { name, email, message } = data;
    
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // In a real application, you would save this to a database (MongoDB, Firebase)
    // or send an email using SendGrid/Nodemailer.
    // For now, we simulate a successful submission.
    
    console.log('Received contact submission:', { name, email, message });

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
