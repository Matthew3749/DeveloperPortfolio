import { Button } from "@/components/ui/button"
import { Hexagon, Dock, Mail, X } from "lucide-react";
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import Image from 'next/image'

export default function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Matt.dev</span>
            </Link>
            <nav className="flex items-center mx-auto space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
              <Link href = "https://drive.google.com/file/d/1L0JkyUYxLRRB8RiQDsXfja5bOf-4He2u/view?usp=sharing" target = "_blank">
                Resume
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx -auto px-4 md:px-6 flex-1 flex flex-col items-center">
        <section id="about" className="py-12 md:py-24 lg:py-32 w-full">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center hg-background">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Matthew Collins - Full Stack Developer
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Unveiling shrouded domains with relentless innovation. 
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/Matthew3749" target="_blank">
                  <Button variant="outline" size="icon">
                    <Hexagon className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/matthew-collins1/" target="_blank">
                  <Button variant="outline" size="icon">
                    <Dock className="h-4 w-4" />
                    <span className="sr-only">Dock</span>
                  </Button>
                </Link>
                <Link href= "https://x.com/matt_collins81" target="_blank">
                  <Button variant="outline" size="icon">
                    <X className="h-4 w-4" />
                    <span className="sr-only">X</span>
                  </Button>
                </Link>
                <Link href="mailto:matthew.d.collins101@gmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

              {/* New About Section */}
        <section id="about" className="py-12 md:py-24 lg:py-32 w-full">
          <div className="flex flex-col items-center space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <Image
              src="/Users/matthewcollins/Downloads/5203B6A2-72ED-4606-986A-468FA360FAE8.jpg"
              alt="Matthew Collins"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover"
            />
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Since 2020, Ive been crafting elegant solutions to complex problems. I wield Swift for iOS precision, Python for scalable systems, and React for seamless frontends—driven by a passion for clean code and big impact.
            </p>
          </div>g
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Ai Parking App "
                description="A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["Next.js", "Prisma", "Stripe"]}
              />
              <ProjectCard
                title="Task Management App"
                description="A real-time task management application with team collaboration features."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["React", "Node.js", "Socket.io"]}
              />
              <ProjectCard
                title="AI Chat Interface"
                description="An AI-powered chat interface with natural language processing capabilities."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["OpenAI", "Next.js", "TailwindCSS"]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t w-full">
        <div className="container mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Matt.dev. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

