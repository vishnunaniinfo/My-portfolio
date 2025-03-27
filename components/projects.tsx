"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useInView } from "react-intersection-observer"
import { Tilt } from "react-tilt"

const defaultTiltOptions = {
  max: 15,
  scale: 1.05,
  speed: 1000,
}

const projects = [
  {
    id: 1,
    title: "Custom ERP System",
    description:
      "Developed a secure ERP system using Django, PostgreSQL, and React.js with robust authentication and role-based access control.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React.js", "Django", "PostgreSQL", "Authentication", "Redux"],
    liveUrl: "https://github.com/vishnunaniinfo",
    githubUrl: "https://github.com/vishnunaniinfo",
    category: "fullstack",
  },
  {
    id: 2,
    title: "AI Attendance & Security System",
    description:
      "Created a facial recognition system with AI to boost attendance accuracy and strengthen security monitoring.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Python", "TensorFlow", "OpenCV", "React.js", "MongoDB"],
    liveUrl: "https://github.com/vishnunaniinfo",
    githubUrl: "https://github.com/vishnunaniinfo",
    category: "ai",
  },
  {
    id: 3,
    title: "Whack-a-Mole Game",
    description:
      "Built an interactive, real-time scoring web game using React.js and Node.js, driving high user engagement.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React.js", "Node.js", "Socket.io", "CSS3", "JavaScript"],
    liveUrl: "https://github.com/vishnunaniinfo",
    githubUrl: "https://github.com/vishnunaniinfo",
    category: "frontend",
  },
  {
    id: 4,
    title: "AI-Powered Chatbot",
    description:
      "Developed an NLP-based chatbot for customer service automation with sentiment analysis and intent recognition.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Python", "NLP", "React.js", "Node.js", "MongoDB"],
    liveUrl: "https://github.com/vishnunaniinfo",
    githubUrl: "https://github.com/vishnunaniinfo",
    category: "ai",
  },
  {
    id: 5,
    title: "Full-Stack Security Dashboard",
    description:
      "Created a real-time security monitoring dashboard with vulnerability assessment and threat detection.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React.js", "Node.js", "Socket.io", "MongoDB", "D3.js"],
    liveUrl: "https://github.com/vishnunaniinfo",
    githubUrl: "https://github.com/vishnunaniinfo",
    category: "security",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "Designed and developed a modern, responsive portfolio website with interactive elements and animations.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Three.js"],
    liveUrl: "https://github.com/vishnunaniinfo",
    githubUrl: "https://github.com/vishnunaniinfo",
    category: "frontend",
  },
]

const categories = [
  { id: "all", name: "All Projects" },
  { id: "frontend", name: "Frontend" },
  { id: "fullstack", name: "Full Stack" },
  { id: "ai", name: "AI & ML" },
  { id: "security", name: "Security" },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" ref={ref} className="py-20 relative overflow-hidden">
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
            <Layers className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-[700px]">A showcase of my recent work and personal projects.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              >
                <Button
                  variant={activeCategory === category.id ? "glow" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={activeCategory !== category.id ? "border-primary/50 hover:border-primary" : ""}
                >
                  {category.name}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Tilt options={defaultTiltOptions}>
                <Card className="h-full flex flex-col overflow-hidden group bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      width={600}
                      height={400}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="bg-primary/10 text-primary border-primary/30"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 rounded-full"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-primary to-purple-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 rounded-full"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

