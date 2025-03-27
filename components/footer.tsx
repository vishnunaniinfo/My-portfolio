"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <footer ref={ref} className="bg-background/50 backdrop-blur-sm border-t border-primary/20 py-12">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-6"
        >
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-bold">Vishnu Vardhan Burri</h2>
            <p className="text-muted-foreground text-center max-w-[500px]">
              Full-Stack Developer & Cybersecurity Specialist passionate about creating secure, scalable web
              applications.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <SocialButton href="https://github.com/vishnunaniinfo" icon={<Github />} label="GitHub" />
            <SocialButton href="https://linkedin.com/in/vishnu-vardhanburri" icon={<Linkedin />} label="LinkedIn" />
            <SocialButton href="mailto:vishnuvardhanburri19@gmail.com" icon={<Mail />} label="Email" />
            <SocialButton href="https://twitter.com" icon={<Twitter />} label="Twitter" />
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center">
              &copy; {currentYear} Vishnu Vardhan Burri. All rights reserved. Made with
              <Heart className="h-4 w-4 text-red-500 mx-1" /> and modern web technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
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

