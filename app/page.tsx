'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MatrixRain from './components/matrix-rain'
import ContactForm from './components/matrix-contact-form'
import ProjectCard from './components/matrix-project-card'

export default function Page() {
  const typingTextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Smooth scrolling
    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function(this: HTMLAnchorElement, e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href') as string)
        target?.scrollIntoView({ behavior: 'smooth' })
      })
    })

    // Typing effect
    const texts = ['Full Stack Developer', 'iOS Engineer', 'Machine Learning Enthusiast', 'Problem Solver']
    let textIndex = 0
    let charIndex = 0
    let isDeleting = false

    function type() {
      if (!typingTextRef.current) return
      
      const currentText = texts[textIndex]
      
      if (isDeleting) {
        typingTextRef.current.textContent = currentText.substring(0, charIndex - 1)
        charIndex--
      } else {
        typingTextRef.current.textContent = currentText.substring(0, charIndex + 1)
        charIndex++
      }
      
      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true
        setTimeout(type, 2000)
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        textIndex = (textIndex + 1) % texts.length
        setTimeout(type, 500)
      } else {
        setTimeout(type, isDeleting ? 50 : 100)
      }
    }

    setTimeout(type, 1000)
  }, [])

  return (
    <>
      <MatrixRain />
      
      {/* Navigation */}
      <nav className="matrix-nav">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <Link href="https://drive.google.com/file/d/1Fv0BehSlZQcz36qeYYwmM9fHFCI68goX/view?usp=sharing" target="_blank">
              Resume
            </Link>
          </li>
        </ul>
      </nav>
      
      {/* Hero Section */}
      <section id="hero" className="matrix-section">
        <div className="matrix-container matrix-hero">
          <h1>MATTHEW COLLINS</h1>
          <div ref={typingTextRef} className="typing-text cursor">Full Stack Developer</div>
          <div className="terminal-prompt">Initializing portfolio...</div>
          <div className="terminal-prompt">Loading projects...</div>
          <div className="terminal-prompt">System ready.</div>
          
          <div className="social-links">
            <Link href="https://github.com/Matthew3749" target="_blank">GitHub</Link>
            <Link href="https://www.linkedin.com/in/matthew-collins1/" target="_blank">LinkedIn</Link>
            <Link href="https://x.com/matt_collins81" target="_blank">X</Link>
            <Link href="mailto:matthew.d.collins101@gmail.com">Email</Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="matrix-section" style={{ backgroundColor: 'rgba(0, 255, 0, 0.02)' }}>
        <div className="matrix-container">
          <h2 className="section-header">About Me</h2>
          <div className="about-content">
            <div>
              <Image
                src="/5203B6A2-72ED-4606-986A-468FA360FAE8.jpg"
                alt="Matthew Collins"
                width={250}
                height={250}
                className="profile-img"
              />
            </div>
            <div className="about-text">
              <p>&gt; Greetings, I&apos;m Matthew Collins - a full-stack developer with a passion for crafting elegant solutions to complex problems.</p>
              <br />
              <p>&gt; Since 2020, I&apos;ve been diving deep into the digital realm, specializing in iOS development with Swift, building scalable backend systems with Python, and creating seamless frontend experiences with React and Next.js.</p>
              <br />
              <p>&gt; My journey includes architecting mission-critical applications at Intact Technologies, enhancing iOS apps at Invite Technologies, and building innovative music platforms at Vibez Music. Currently pursuing my BS in Computer Science with a minor in Applied Mathematics at SNHU.</p>
              <br />
              <p>&gt; I thrive on challenges that push the boundaries of what&apos;s possible - whether it&apos;s implementing complex algorithms, optimizing performance, or integrating cutting-edge APIs. My interests span machine learning, backend architecture, and iOS development.</p>
            </div>
          </div>
          
          <h3 style={{ marginTop: '60px', marginBottom: '30px', textAlign: 'center', fontSize: '2em', color: '#00ff00' }}>
            Tech Stack
          </h3>
          <div className="skills-grid">
            <div className="skill-item">Swift</div>
            <div className="skill-item">Python</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">Objective-C</div>
            <div className="skill-item">C++</div>
            <div className="skill-item">Java</div>
            <div className="skill-item">SQL</div>
            <div className="skill-item">HTML5</div>
            <div className="skill-item">CSS</div>
            <div className="skill-item">React.js</div>
            <div className="skill-item">Next.js</div>
            <div className="skill-item">Node.js</div>
            <div className="skill-item">SwiftUI</div>
            <div className="skill-item">Firebase</div>
            <div className="skill-item">AWS</div>
            <div className="skill-item">MySQL</div>
            <div className="skill-item">Core Data</div>
            <div className="skill-item">TensorFlow</div>
            <div className="skill-item">Pytorch</div>
            <div className="skill-item">Spark</div>
            <div className="skill-item">CoreML</div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="matrix-section">
        <div className="matrix-container">
          <h2 className="section-header">Projects</h2>
          <div className="projects-grid">
            <ProjectCard
              title="AI Parking App - ParkLock"
              description="An intelligent parking solution leveraging computer vision and machine learning to optimize parking space allocation and reduce search time in urban environments."
              link="https://github.com/Matthew3749/ParkLock"
              tags={["Python", "TensorFlow", "React", "AWS"]}
            />
            <ProjectCard
              title="Accountabill iOS App"
              description="Real-time social accountability platform built with SwiftUI and Firebase. Features complex multi-user verification workflows, Stripe payment integration, and automated video compression algorithms."
              link="https://github.com/Matthew3749"
              tags={["Swift", "SwiftUI", "Firebase", "Stripe API"]}
            />
            <ProjectCard
              title="AI Clash of Clans Interface"
              description="An AI-powered interface for strategic game analysis and optimization. Utilizes machine learning algorithms to predict optimal attack strategies and base layouts."
              link="https://github.com/Matthew3749"
              tags={["Python", "OpenAI", "Next.js", "TailwindCSS"]}
            />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="matrix-section" style={{ backgroundColor: 'rgba(0, 255, 0, 0.02)' }}>
        <div className="matrix-container">
          <h2 className="section-header">Contact</h2>
          <ContactForm />
          
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <p style={{ fontSize: '1.2em', color: '#00ff00' }}>Or reach out directly:</p>
            <p style={{ marginTop: '20px' }}>
              <Link href="mailto:matthew.d.collins101@gmail.com" style={{ color: '#00ff00', textDecoration: 'none' }}>
                matthew.d.collins101@gmail.com
              </Link>
            </p>
            <p style={{ marginTop: '10px' }}>
              <Link href="tel:7034093777" style={{ color: '#00ff00', textDecoration: 'none' }}>
                (703) 409-3777
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}