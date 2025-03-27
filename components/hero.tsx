"use client"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Twitter, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"
import { TypeAnimation } from "react-type-animation"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background z-0"></div>
      </div>

      <div className="container px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col space-y-8 z-10"
        >
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
            >
              Hi, I'm <span className="shine-text font-extrabold">Vishnu Vardhan Burri</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground h-12"
            >
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  2000,
                  "Cybersecurity Specialist",
                  2000,
                  "AI Developer",
                  2000,
                  "Prompt Engineer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="gradient-text font-bold"
              />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="max-w-[600px] text-muted-foreground md:text-xl"
          >
            Passionate about creating secure, scalable web applications with cutting-edge technologies. Specializing in
            React.js, Node.js, and cybersecurity best practices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
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
              size="lg"
              className="group relative overflow-hidden rounded-full border-2 border-primary bg-transparent px-8 py-3 transition-all duration-300 hover:bg-primary/10 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
              asChild
            >
              <a href="/resume.pdf" download className="flex items-center justify-center">
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                <span className="relative font-bold">Download Resume</span>
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex space-x-4 mt-4"
          >
            <SocialButton href="https://github.com/vishnunaniinfo" icon={<Github />} label="GitHub" />
            <SocialButton href="https://linkedin.com/in/vishnu-vardhanburri" icon={<Linkedin />} label="LinkedIn" />
            <SocialButton href="mailto:vishnuvardhanburri19@gmail.com" icon={<Mail />} label="Email" />
            <SocialButton href="https://twitter.com" icon={<Twitter />} label="Twitter" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full h-[400px] lg:h-[500px] flex items-center justify-center"
        >
          <div className="w-full h-full max-w-[500px] max-h-[500px] relative">
            <div className="absolute inset-0 flex items-center justify-center z-10 opacity-70">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/30">
                <img src="/images/profile.png" alt="Vishnu Vardhan Burri" className="w-full h-full object-cover" />
              </div>
            </div>
            <Canvas>
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial color="#3b82f6" attach="material" distort={0.5} speed={2} />
              </Sphere>
              <OrbitControls enableZoom={false} autoRotate />
            </Canvas>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Button variant="ghost" size="icon" asChild className="text-primary hover:text-primary/80 hover:bg-transparent">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6" />
          </a>
        </Button>
      </motion.div>
    </section>
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

