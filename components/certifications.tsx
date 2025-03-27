"use client"

import { motion } from "framer-motion"
import { Award, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useInView } from "react-intersection-observer"
import { Tilt } from "react-tilt"

const defaultTiltOptions = {
  max: 15,
  scale: 1.05,
  speed: 1000,
}

const certifications = [
  {
    id: 1,
    title: "Certified Cloud Security Professional (CCSP)",
    issuer: "ISC²",
    date: "2023",
    description: "Expertise in cloud security architecture, design, operations, and service orchestration.",
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "2022",
    description:
      "Skills in identifying vulnerabilities in target systems and using the same knowledge and tools as malicious hackers.",
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    description: "Expertise in designing distributed systems on AWS, including deployment, management, and operations.",
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    title: "Google Cloud Certified",
    issuer: "Google Cloud",
    date: "2022",
    description: "Proficiency in designing, developing, managing, and administering solutions on Google Cloud.",
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    title: "CCNA (Cisco Certified Network Associate)",
    issuer: "Cisco",
    date: "2021",
    description:
      "Skills in installing, configuring, operating, and troubleshooting medium-size routed and switched networks.",
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 6,
    title: "TypeScript Certification",
    issuer: "Skills Up",
    date: "2022",
    description: "Advanced knowledge of TypeScript, including types, interfaces, generics, and best practices.",
    icon: "/placeholder.svg?height=80&width=80",
  },
]

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="certifications" ref={ref} className="py-20 relative overflow-hidden">
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
            <Award className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-[700px]">
            Professional certifications that validate my expertise and knowledge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Tilt options={defaultTiltOptions}>
                <Card className="h-full bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 overflow-hidden group hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <div className="absolute top-0 right-0 p-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:animate-pulse-glow">
                      <img
                        src={cert.icon || "/placeholder.svg"}
                        alt={cert.title}
                        className="h-12 w-12 object-contain"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg group-hover:gradient-text transition-colors duration-300">
                        {cert.title}
                      </CardTitle>
                      <CardDescription>
                        {cert.issuer} • {cert.date}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

