"use client"

import { motion } from "framer-motion"
import { FileText, Briefcase, GraduationCap, User, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useInView } from "react-intersection-observer"
import { Tilt } from "react-tilt"

const defaultTiltOptions = {
  max: 25,
  scale: 1.05,
  speed: 1000,
  glare: true,
  "max-glare": 0.5,
}

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 p-2 mb-4">
            <User className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-[700px]">
            Get to know more about me, my background, and what drives me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Tilt options={defaultTiltOptions}>
              <Card className="overflow-hidden border-none shadow-2xl bg-gradient-to-br from-background/80 to-background/30 backdrop-blur-sm">
                <CardContent className="p-1">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-xl blur-sm opacity-50 group-hover:opacity-100 transition duration-500"></div>
                    <img
                      src="/images/profile.png"
                      alt="Vishnu Vardhan Burri"
                      className="w-full h-auto object-cover rounded-xl relative"
                      width={600}
                      height={600}
                    />
                  </div>
                </CardContent>
              </Card>
            </Tilt>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Full-Stack Developer & Cybersecurity Specialist</h3>
            <p className="text-muted-foreground">
              I'm a passionate Full-Stack Developer with expertise in React.js, Node.js, and modern web technologies,
              complemented by a strong commitment to cybersecurity. Holding certifications such as CCSP and CEH, I aim
              to integrate secure practices into dynamic web solutions.
            </p>
            <p className="text-muted-foreground">
              My journey in web development started with a fascination for creating interactive user experiences. Since
              then, I've been constantly learning and improving my skills to stay at the forefront of technology.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <InfoItem icon={<User className="h-5 w-5 text-primary" />} label="Name" value="Vishnu Vardhan Burri" />
              <InfoItem
                icon={<Mail className="h-5 w-5 text-primary" />}
                label="Email"
                value="vishnuvardhanburri19@gmail.com"
              />
              <InfoItem
                icon={<GraduationCap className="h-5 w-5 text-primary" />}
                label="Education"
                value="The Apollo University"
              />
              <InfoItem
                icon={<Briefcase className="h-5 w-5 text-primary" />}
                label="Experience"
                value="Full-Stack Developer"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-purple-600 px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
                asChild
              >
                <a href="#contact" className="flex items-center justify-center">
                  <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                  <span className="relative font-bold">Hire Me</span>
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </a>
              </Button>
              <Button
                className="group relative overflow-hidden rounded-full border-2 border-primary bg-transparent px-8 py-3 transition-all duration-300 hover:bg-primary/10 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
                asChild
              >
                <a href="/resume.pdf" download className="flex items-center justify-center">
                  <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                  <FileText className="mr-2 h-4 w-4" />
                  <span className="relative font-bold">Download CV</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-start space-x-3 group">
      <div className="bg-primary/10 p-2 rounded-md group-hover:bg-primary/20 transition-colors duration-300">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-muted-foreground">{label}:</h4>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  )
}

