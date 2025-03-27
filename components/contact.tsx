"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { useInView } from "react-intersection-observer"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Show success message
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 p-2 mb-4">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-[700px]">
            Have a question or want to work together? Feel free to contact me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 space-y-6"
          >
            <Card className="bg-background/50 backdrop-blur-sm border border-primary/20">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <ContactItem
                    icon={<Mail className="h-6 w-6 text-primary" />}
                    title="Email"
                    content="vishnuvardhanburri19@gmail.com"
                    href="mailto:vishnuvardhanburri19@gmail.com"
                  />
                  <ContactItem
                    icon={<Phone className="h-6 w-6 text-primary" />}
                    title="Phone"
                    content="+91 9392338269"
                    href="tel:+919392338269"
                  />
                  <ContactItem icon={<MapPin className="h-6 w-6 text-primary" />} title="Location" content="India" />
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                  <div className="flex space-x-4">
                    <SocialButton href="https://github.com/vishnunaniinfo" icon={<Github />} label="GitHub" />
                    <SocialButton
                      href="https://linkedin.com/in/vishnu-vardhanburri"
                      icon={<Linkedin />}
                      label="LinkedIn"
                    />
                    <SocialButton href="https://twitter.com" icon={<Twitter />} label="Twitter" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2"
          >
            <Card className="bg-background/50 backdrop-blur-sm border border-primary/20">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-background/50 border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="bg-background/50 border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={5}
                      required
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-purple-600 px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
                    disabled={isSubmitting}
                  >
                    <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ icon, title, content, href }) {
  return (
    <div className="flex items-start space-x-4 group">
      <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
        {icon}
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        {href ? (
          <a href={href} className="text-muted-foreground hover:text-primary transition-colors duration-300">
            {content}
          </a>
        ) : (
          <p className="text-muted-foreground">{content}</p>
        )}
      </div>
    </div>
  )
}

function SocialButton({ href, icon, label }) {
  return (
    <Button
      variant="outline"
      size="icon"
      asChild
      className="rounded-full border-primary/30 hover:border-primary bg-background/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300"
    >
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="text-primary">
          {icon}
        </motion.div>
      </a>
    </Button>
  )
}

