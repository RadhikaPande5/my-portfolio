import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    })
  }

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "All fields are required",
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      error: "Invalid email address",
    })
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["radzzz.rp@gmail.com"],
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    })

    if (error) {
      console.error("Resend error:", error)

      return res.status(500).json({
        error: "Failed to send email",
      })
    }

    return res.status(200).json({
      success: true,
      messageId: data.id,
    })
  } catch (error) {
    console.error("Server error:", error)

    return res.status(500).json({
      error: "Something went wrong",
    })
  }
}