"use client"

import { motion } from "framer-motion"
import { Code, Server, Shield, Brain, Cpu, Wrench, MessageSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: "React.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 85 },
      { name: "Redux", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "Responsive Design", level: 85 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "Django", level: 75 },
      { name: "RESTful APIs", level: 85 },
      { name: "GraphQL", level: 70 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    id: "security",
    name: "Security",
    icon: <Shield className="h-5 w-5" />,
    skills: [
      { name: "Network Security", level: 85 },
      { name: "Penetration Testing", level: 80 },
      { name: "Secure Coding", level: 85 },
      { name: "Cloud Security", level: 80 },
      { name: "CCSP", level: 90 },
      { name: "CEH", level: 85 },
      { name: "CISSP", level: 75 },
      { name: "Vulnerability Assessment", level: 80 },
    ],
  },
  {
    id: "ai",
    name: "AI & ML",
    icon: <Brain className="h-5 w-5" />,
    skills: [
      { name: "Generative AI", level: 85 },
      { name: "NLP", level: 80 },
      { name: "ChatGPT", level: 90 },
      { name: "TensorFlow", level: 75 },
      { name: "PyTorch", level: 70 },
      { name: "Computer Vision", level: 75 },
      { name: "AI-powered Automation", level: 80 },
      { name: "Prompt Engineering", level: 90 },
    ],
  },
  {
    id: "devops",
    name: "DevOps",
    icon: <Cpu className="h-5 w-5" />,
    skills: [
      { name: "Docker", level: 80 },
      { name: "Kubernetes", level: 75 },
      { name: "CI/CD", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Google Cloud", level: 75 },
      { name: "Git/GitHub", level: 90 },
      { name: "Infrastructure as Code", level: 75 },
      { name: "Monitoring & Logging", level: 80 },
    ],
  },
  {
    id: "soft",
    name: "Soft Skills",
    icon: <MessageSquare className="h-5 w-5" />,
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Communication", level: 85 },
      { name: "Leadership", level: 80 },
      { name: "Teamwork", level: 90 },
      { name: "Adaptability", level: 85 },
      { name: "Time Management", level: 80 },
      { name: "Critical Thinking", level: 85 },
      { name: "Creativity", level: 80 },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" ref={ref} className="py-20 relative overflow-hidden">
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
            <Wrench className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-[700px]">
            A comprehensive overview of my technical skills and proficiency levels.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8 bg-background/50 backdrop-blur-sm border border-primary/20 p-1 rounded-full">
              {skillCategories.map((category, index) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full"
                >
                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {category.icon}
                    <span className="hidden md:inline">{category.name}</span>
                  </motion.div>
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Card className="bg-background/50 backdrop-blur-sm border border-primary/20">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          className="space-y-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/30"
                              >
                                {skill.level}%
                              </Badge>
                              <span className="font-medium">{skill.name}</span>
                            </div>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              className="h-2.5 rounded-full relative"
                              style={{
                                background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                                backgroundSize: "200% 200%",
                                animation: "gradient-shift 2s linear infinite",
                              }}
                            >
                              <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/20 blur-sm"></div>
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

