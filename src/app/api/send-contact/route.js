import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, company, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ message: "Please fill all required fields." }), {
      status: 400,
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `Contact form submission from ${name}`,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Email send failed:", error);
    return new Response(JSON.stringify({ message: "Email failed to send." }), { status: 500 });
  }
}
