import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const { name, email } = await request.json()

    const transporter = nodemailer.createTransport({
      service: "Mail.ru",
      auth: {
        user: "reperion@mail.ru",
        pass: "K9sd2EfuyQ9Qu1RykdX2",
      },
      tls: {
        rejectUnauthorized: false,
      },
      from: "reperion@mail.ru",
    })

    const mailOption = {
      from: "reperion@mail.ru",
      to: "aws@reperion.io",
      subject: `Message from user ${name}`,
      html: `
        <h3>Contact form from Reperion website</h3>
        <li> name: ${name}</li> 
        <li> email: ${email}</li>
        `,
    }

    await transporter.sendMail(mailOption)

    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 })
  }
}
