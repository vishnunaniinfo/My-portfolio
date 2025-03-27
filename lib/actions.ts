"use server"

import { z } from "zod"

const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate form data
    const result = ContactFormSchema.safeParse({
      name,
      email,
      subject,
      message,
    })

    if (!result.success) {
      return {
        success: false,
        message: "Validation failed",
        errors: result.error.flatten().fieldErrors,
      }
    }

    // Simulate sending email (in a real app, you would use a service like SendGrid, Mailgun, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return success response
    return {
      success: true,
      message: "Message sent successfully!",
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}

