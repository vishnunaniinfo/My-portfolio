"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"

const workExperience = [
  {
    id: 1,
    role: "Full-Stack Web Development Intern",
    company: "Ripan Technologies",
    duration: "Jan 2025 - Present",
    description:
      "Developed and optimized web applications using React.js and Node.js. Improved API performance and security using best practices.",
    responsibilities: [
      "Optimized web apps with React.js/Node.js",
      "Increased user engagement by 25%",
      "Reduced API response times by 40%",
      "Implemented security best practices",
    ],
  },
  {
    id: 2,
    role: "AI & Android App Development Intern",
    company: "Future Intern",
    duration: "Feb 2025",
    description:
      "Built AI-powered applications using machine learning models. Developed Android apps with AI features.",
    responsibilities: [
      "Developed AI-powered Android apps",
      "Boosted user retention by 15%",
      "Implemented machine learning models",
      "Created intuitive user interfaces",
    ],
  },
  {
    id: 3,
    role: "Web Development & AI Intern",
    company: "CodSoft",
    duration: "Feb 2025 - Mar 2025",
    description:
      "Designed AI-based web applications and chatbots. Streamlined interactions and cut data processing time.",
    responsibilities: [
      "Built AI-based web apps and chatbots",
      "Streamlined user interactions",
      "Cut data processing time by 30%",
      "Implemented responsive designs",
    ],
  },
]

const education = [
  {
    id: 1,
    degree: "B.Tech in Computer Science",
    institution: "The Apollo University",
    duration: "2023 - 2027",
    description: "Focusing on advanced programming, AI, cybersecurity, and full-stack development.",
    courses: ["Advanced Algorithms", "Machine Learning", "Cybersecurity", "Full-Stack Development"],
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Narayana Junior College",
    duration: "2019 - 2023",
    description: "Focused on mathematics, physics, and computer science fundamentals.",
    courses: ["Mathematics", "Physics", "Computer Science", "English"],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" ref={ref} className="py-20 relative overflow-hidden">
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
            <Briefcase className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-[700px]">My professional journey and educational background.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="work" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-background/50 backdrop-blur-sm border border-primary/20 p-1 rounded-full">
              <TabsTrigger
                value="work"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full"
              >
                <Briefcase className="mr-2 h-4 w-4" /> Work Experience
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full"
              >
                <GraduationCap className="mr-2 h-4 w-4" /> Education
              </TabsTrigger>
            </TabsList>

            <TabsContent value="work">
              <div className="space-y-6">
                {workExperience.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start flex-wrap gap-2">
                          <div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                              {job.role}
                            </CardTitle>
                            <CardDescription className="text-lg">{job.company}</CardDescription>
                          </div>
                          <Badge
                            variant="outline"
                            className="flex items-center gap-1 bg-primary/10 text-primary border-primary/30"
                          >
                            <Calendar className="h-3 w-3" />
                            {job.duration}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-muted-foreground">{job.description}</p>
                        <ul className="space-y-2 list-disc pl-5">
                          {job.responsibilities.map((responsibility, i) => (
                            <li key={i} className="text-muted-foreground">
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="education">
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start flex-wrap gap-2">
                          <div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                              {edu.degree}
                            </CardTitle>
                            <CardDescription className="text-lg">{edu.institution}</CardDescription>
                          </div>
                          <Badge
                            variant="outline"
                            className="flex items-center gap-1 bg-primary/10 text-primary border-primary/30"
                          >
                            <Calendar className="h-3 w-3" />
                            {edu.duration}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-muted-foreground">{edu.description}</p>
                        <div>
                          <h4 className="font-medium mb-2">Key Courses:</h4>
                          <ul className="space-y-2 list-disc pl-5">
                            {edu.courses.map((course, i) => (
                              <li key={i} className="text-muted-foreground">
                                {course}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

