// /send.js

import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/app/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:Request) {
  try {
    const { email } = await req.json(); // Assuming you're sending email in JSON format

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email, // Use the email received from the request
      subject: 'Welcome to Visual Computing Vertical SRMIST',
      react: EmailTemplate(), // Assuming EmailTemplate returns HTML content
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
