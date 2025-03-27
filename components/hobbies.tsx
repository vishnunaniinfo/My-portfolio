"use client"

import { motion } from "framer-motion"
import { Heart, Code, Shield, Brain, Gamepad } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useInView } from "react-intersection-observer"
import { Tilt } from "react-tilt"

const defaultTiltOptions = {
  max: 25,
  scale: 1.05,
  speed: 1000,
}

const hobbies = [
  {
    id: 1,
    title: "AI & Tech Exploration",
    description: "Exploring cutting-edge AI technologies and experimenting with new frameworks and tools.",
    icon: <Brain className="h-10 w-10 text-primary" />,
  },
  {
    id: 2,
    title: "Security Research",
    description: "Researching cybersecurity vulnerabilities and participating in ethical hacking challenges.",
    icon: <Shield className="h-10 w-10 text-primary" />,
  },
  {
    id: 3,
    title: "Game Development",
    description: "Creating interactive games and exploring game mechanics and design principles.",
    icon: <Gamepad className="h-10 w-10 text-primary" />,
  },
  {
    id: 4,
    title: "Cloud & DevOps Automation",
    description: "Building automated cloud infrastructure and exploring DevOps best practices.",
    icon: <Code className="h-10 w-10 text-primary" />,
  },
]

export default function Hobbies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="hobbies" ref={ref} className="py-20 relative overflow-hidden">
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
            <Heart className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Hobbies & Interests</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-[700px]">What I'm passionate about beyond my professional work.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Tilt options={defaultTiltOptions}>
                <Card className="h-full bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      {hobby.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {hobby.title}
                    </h3>
                    <p className="text-muted-foreground">{hobby.description}</p>
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

