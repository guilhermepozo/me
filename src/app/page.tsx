"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Github, Linkedin, Mail, Clock, Calendar, MapPin, Play, Image as ImageIcon } from "lucide-react"
import { CommandPalette } from "@/components/command-palette"
import { ProjectCard } from "@/components/project-card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { getFeaturedProjects } from "@/data/projects"
import { getFeaturedArticles } from "@/data/articles"
import { getFeaturedTalks, getAllTalks } from "@/data/talks"
import { getAllExperiences, getExperienceYears } from "@/data/experience"
import { getFeaturedTestimonials } from "@/data/testimonials"

export default function Home() {
  const [expandedExperiences, setExpandedExperiences] = useState<Set<string>>(new Set())
  const [expandedTalks, setExpandedTalks] = useState<Set<string>>(new Set())
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<string>('now')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['now', 'about', 'experience', 'projects', 'speaking']
      const scrollPosition = window.scrollY + 100 // Offset for better detection
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Separate useEffect for mobile menu scroll closing
  useEffect(() => {
    if (!mobileMenuOpen) return

    let isScrolling = false
    let scrollTimer: NodeJS.Timeout

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true
        clearTimeout(scrollTimer)
        scrollTimer = setTimeout(() => {
          setMobileMenuOpen(false)
          isScrolling = false
        }, 100)
      }
    }

    // Add a small delay before attaching scroll listener to prevent immediate closure
    const attachTimer = setTimeout(() => {
      window.addEventListener('scroll', handleScroll)
    }, 200)

    return () => {
      clearTimeout(attachTimer)
      clearTimeout(scrollTimer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [mobileMenuOpen])

  const toggleExperience = (id: string) => {
    setExpandedExperiences(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const toggleTalk = (id: string) => {
    setExpandedTalks(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const featuredProjects = getFeaturedProjects()
  const featuredArticles = getFeaturedArticles()
  const featuredTalks = getAllTalks()
  const experiences = getAllExperiences()
  const yearsOfExperience = getExperienceYears()
  const featuredTestimonials = getFeaturedTestimonials()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CommandPalette />

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="flex items-center">
            <div className="text-lg font-bold">
              Guilherme <span className="text-green">Pozo</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-2">            
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors border border-transparent hover:border-border rounded"
              aria-label="Toggle menu"
              type="button"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 absolute ${
                  mobileMenuOpen 
                    ? 'rotate-45' 
                    : '-translate-y-1.5'
                }`} />
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen 
                    ? 'opacity-0 scale-0' 
                    : 'opacity-100 scale-100'
                }`} />
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 absolute ${
                  mobileMenuOpen 
                    ? '-rotate-45' 
                    : 'translate-y-1.5'
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out border-t border-border bg-background/95 backdrop-blur transform ${mobileMenuOpen ? 'max-h-80 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}`}>
          <div className={`p-4 space-y-4 transition-all duration-300 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
            <Link
              href="#now"
              onClick={() => setMobileMenuOpen(false)}
              className={`block transition-colors text-sm uppercase tracking-wider py-2 ${
                activeSection === 'now' 
                  ? 'text-yellow font-medium' 
                  : 'text-muted-foreground hover:text-yellow'
              }`}
            >
              Now
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block transition-colors text-sm uppercase tracking-wider py-2 ${
                activeSection === 'about' 
                  ? 'text-cyan font-medium' 
                  : 'text-muted-foreground hover:text-cyan'
              }`}
            >
              About
            </Link>
            <Link
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className={`block transition-colors text-sm uppercase tracking-wider py-2 ${
                activeSection === 'experience' 
                  ? 'text-purple font-medium' 
                  : 'text-muted-foreground hover:text-purple'
              }`}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className={`block transition-colors text-sm uppercase tracking-wider py-2 ${
                activeSection === 'projects' 
                  ? 'text-green font-medium' 
                  : 'text-muted-foreground hover:text-green'
              }`}
            >
              Projects
            </Link>
            <Link
              href="#speaking"
              onClick={() => setMobileMenuOpen(false)}
              className={`block transition-colors text-sm uppercase tracking-wider py-2 ${
                activeSection === 'speaking' 
                  ? 'text-pink font-medium' 
                  : 'text-muted-foreground hover:text-pink'
              }`}
            >
              Speaking
            </Link>
            
            {/* Mobile Social Links */}
            <div className="flex gap-4 pt-3 border-t border-border">
              <Link
                href="https://github.com/guilhermepozo"
                className="text-muted-foreground hover:text-purple transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/guilhermepozo/"
                className="text-muted-foreground hover:text-cyan transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:hello@guilhermepozo.com"
                className="text-muted-foreground hover:text-orange transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="flex min-h-screen">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 border-r border-border p-8 flex-col justify-between z-40">
          <div>
            <Link href="/" className="block mb-16">
              <div className="text-2xl font-bold">
                Guilherme <span className="text-pink">Pozo</span>
              </div>
              <div className="text-sm text-muted-foreground mt-1">Software Engineer</div>
            </Link>

            <nav className="space-y-6">
              <Link
                href="#now"
                className={`block transition-colors text-sm uppercase tracking-wider ${
                  activeSection === 'now' 
                    ? 'text-yellow font-medium' 
                    : 'text-muted-foreground hover:text-yellow'
                }`}
              >
                Now
              </Link>
              <Link
                href="#about"
                className={`block transition-colors text-sm uppercase tracking-wider ${
                  activeSection === 'about' 
                    ? 'text-cyan font-medium' 
                    : 'text-muted-foreground hover:text-cyan'
                }`}
              >
                About
              </Link>
              <Link
                href="#experience"
                className={`block transition-colors text-sm uppercase tracking-wider ${
                  activeSection === 'experience' 
                    ? 'text-purple font-medium' 
                    : 'text-muted-foreground hover:text-purple'
                }`}
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className={`block transition-colors text-sm uppercase tracking-wider ${
                  activeSection === 'projects' 
                    ? 'text-green font-medium' 
                    : 'text-muted-foreground hover:text-green'
                }`}
              >
                Projects
              </Link>
              <Link
                href="#speaking"
                className={`block transition-colors text-sm uppercase tracking-wider ${
                  activeSection === 'speaking' 
                    ? 'text-pink font-medium' 
                    : 'text-muted-foreground hover:text-pink'
                }`}
              >
                Speaking
              </Link> 
            </nav>
          </div>

          <div className="flex gap-4">
            <Link
              href="https://github.com/guilhermepozo"
              className="text-muted-foreground hover:text-purple transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/guilhermepozo/"
              className="text-muted-foreground hover:text-cyan transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:hello@guilhermepozo.com"
              className="text-muted-foreground hover:text-orange transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 pt-16 lg:pt-0">
          {/* Hero Section */}
          <section id="now" className="min-h-screen flex items-center px-4 sm:px-8 lg:px-16 py-20">
            <div className="max-w-3xl animate-fade-up">
              <div className="text-sm text-yellow mb-4 animate-fade-in animate-delay-100">Hey there, I'm Pozo</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 leading-tight text-balance animate-fade-up animate-delay-200">
                Building <span className="gradient-text">scalable cloud applications</span> and AI-powered solutions
              </h1>
              <p className="text-lg lg:text-xl text-comment leading-relaxed mb-6 lg:mb-8 animate-fade-up animate-delay-300">
                Currently leading Digital & Full Stack LATAM at <Link href="https://www.jnj.com/" target="_blank" rel="noopener noreferrer" className="text-[#eb1700] hover:underline inline-flex items-center gap-1">Johnson & Johnson <ArrowUpRight className="w-4 h-4" /></Link>,
                where I architect cloud solutions, drive DevOps excellence, and pioneer AI/Agentic automation across the
                software development lifecycle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-400">
                <Link href="#projects" className="btn-primary text-center">
                  View my work
                </Link>
                <Link href="#contact" className="btn-secondary text-center">
                  Get in touch
                </Link>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="px-4 sm:px-8 lg:px-16 py-16 lg:py-20 border-t border-border">
            <div className="max-w-3xl">
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-6 lg:mb-8">About</h2>
              <p className="text-base lg:text-lg text-comment leading-relaxed mb-4 lg:mb-6">
                I'm a Technical Leader specializing in cloud engineering, infrastructure as code, and full-stack
                development. My expertise spans across <span className="text-purple">cloud platforms</span> (AWS,
                Azure), modern <span className="text-green">frontend technologies</span> (Next.js, React), and robust
                <span className="text-orange"> backend systems</span> (TypeScript, Python).
              </p>
              <p className="text-base lg:text-lg text-comment leading-relaxed mb-4 lg:mb-6">
                As a core member of the <span className="text-cyan">LATAM AI/Agentic Automation workstream</span>, I'm
                accelerating the adoption of LLMs and agent-based solutions throughout the SDLC, utilizing platforms
                like Langflow, LangGraph, LangChain for rapid prototyping or production-grade intelligent automations and applications.
              </p>
              <p className="text-base lg:text-lg text-comment leading-relaxed">
                Based in <span className="text-foreground">São José dos Campos, Brazil</span>, I've worked across
                diverse environments from large enterprises like <span className="text-foreground">Johnson &   Johnson</span>, <span className="text-foreground">Embraer</span> and <span className="text-foreground">Ambev</span> to innovative startups like
                <span className="text-foreground"> Quero Educação</span>, always focusing on scalability, automation, and developer experience.
              </p>
            </div>
          </section>

          {/* Now Section */}
          {/* <section id="now" className="px-16 py-20 border-t border-border">
            <div className="max-w-3xl">
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-8 animate-fade-up">What I'm doing now</h2>

              <div className="space-y-6 animate-fade-up animate-delay-100">
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    🤖 AI/Agentic Automation at J&J
                  </h3>
                  <p className="text-comment leading-relaxed">
                    Leading the implementation of LLM-powered automation across our software development lifecycle.
                    Currently building intelligent agents for code review, testing, and deployment optimization.
                  </p>
                </div>

                <div className="p-6 border border-border rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    🌎 LATAM Communities of Practice
                  </h3>
                  <p className="text-comment leading-relaxed">
                    Organizing and mentoring Communities of Practice across Latin America, focusing on
                    Infrastructure & Cloud, Software Engineering, and Platform Engineering excellence.
                  </p>
                </div>

                <div className="p-6 border border-border rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    📚 Learning & Writing
                  </h3>
                  <p className="text-comment leading-relaxed">
                    Deep diving into advanced Kubernetes patterns, exploring the latest in AI/ML tooling,
                    and writing about scaling engineering teams. Always sharing knowledge through articles and talks.
                  </p>
                </div>

                <div className="p-6 border border-border rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    🛠️ Side Projects
                  </h3>
                  <p className="text-comment leading-relaxed">
                    Building personal automation tools and experimenting with new technologies.
                    Currently working on a developer productivity platform using AI agents.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link href="/now" className="btn-secondary">
                  Read More
                </Link>
              </div>
            </div>
          </section> */}

          {/* Experience Section */}
          <section id="experience" className="px-4 sm:px-8 lg:px-16 py-16 lg:py-20 border-t border-border">
            <div className="max-w-4xl">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 lg:mb-12">
                <h2 className="text-sm uppercase tracking-wider text-muted-foreground animate-fade-up mb-2 sm:mb-0">Experience</h2>
                <div className="text-sm text-muted-foreground animate-fade-up animate-delay-100">
                  {yearsOfExperience}+ years in tech
                </div>
              </div>

              <div className="space-y-12 lg:space-y-16">
                {experiences.map((experience, index) => (
                  <div
                    key={experience.id}
                    className={`group relative animate-fade-up animate-delay-${(index + 1) * 100}`}
                  >
                    {/* Timeline dot - hidden on mobile */}
                    <div className="hidden sm:block absolute left-0 top-6 w-3 h-3 bg-border rounded-full group-hover:bg-cyan transition-colors"></div>
                    <div className="hidden sm:block absolute left-1.5 top-9 w-px h-full bg-border"></div>

                    <div className="sm:ml-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                            <h3 className="text-lg lg:text-xl font-semibold text-foreground group-hover:text-cyan transition-colors">
                              {experience.title}
                            </h3>
                            <div className="flex gap-2">
                              {experience.current && (
                                <span className="px-2 py-1 bg-green/10 text-green rounded-full text-xs whitespace-nowrap">
                                  Current
                                </span>
                              )}
                              <span className="px-2 py-1 bg-purple/10 text-purple rounded-full text-xs whitespace-nowrap">
                                {experience.type}
                              </span>
                            </div>
                          </div>
                          <div className="text-comment font-medium mb-1">
                            {experience.company.link ? (
                              <Link
                                href={experience.company.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-cyan transition-colors inline-flex items-center gap-1"
                              >
                                {experience.company.name}
                                <ArrowUpRight className="w-3 h-3" />
                              </Link>
                            ) : (
                              experience.company.name
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground mb-4">{experience.location}</div>
                        </div>
                        <div className="text-sm text-muted-foreground lg:ml-6 mb-4 lg:mb-0">
                          {new Date(experience.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} —{' '}
                          {experience.current ? 'Present' : new Date(experience.endDate!).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </div>
                      </div>

                      <div className="space-y-3 mb-4">
                        {experience.description.map((desc, descIndex) => (
                          <p key={descIndex} className="text-sm lg:text-base text-comment leading-relaxed">
                            {desc}
                          </p>
                        ))}
                      </div>

                      {experience.achievements.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-foreground mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {experience.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="text-sm text-comment flex items-start gap-2">
                                <span className="text-green mt-1 flex-shrink-0">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {(expandedExperiences.has(experience.id)
                          ? experience.technologies
                          : experience.technologies.slice(0, 8)
                        ).map((tech, techIndex) => {
                          const colorVariants = [
                            'bg-cyan/10 text-cyan',
                            'bg-purple/10 text-purple',
                            'bg-green/10 text-green',
                            'bg-orange/10 text-orange',
                            'bg-pink/10 text-pink',
                            'bg-yellow/10 text-yellow'
                          ]
                          const colorClass = colorVariants[techIndex % 6]
                          
                          return (
                            <span
                              key={techIndex}
                              className={`px-2 lg:px-3 py-1 ${colorClass} rounded-full text-xs`}
                            >
                              {tech}
                            </span>
                          )
                        })}
                        {experience.technologies.length > 8 && (
                          <button
                            onClick={() => toggleExperience(experience.id)}
                            className="px-2 lg:px-3 py-1 bg-muted/10 text-muted-foreground rounded-full text-xs hover:bg-cyan/10 hover:text-cyan transition-colors cursor-pointer"
                          >
                            {expandedExperiences.has(experience.id)
                              ? 'Show less'
                              : `+${experience.technologies.length - 8} more`
                            }
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="px-4 sm:px-8 lg:px-16 py-16 lg:py-20 border-t border-border">
            <div className="max-w-6xl">
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-8 lg:mb-12 animate-fade-up">Projects</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {featuredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`animate-fade-up animate-delay-${(index + 1) * 100}`}
                  >
                    <ProjectCard project={project} featured />
                  </div>
                ))}
              </div>

              {/* <div className="text-center mt-12">
                <Link href="/projects" className="btn-secondary">
                  View All Projects
                </Link>
              </div> */}
            </div>
          </section>

          {/* Writing Section */}
          {/* <section id="writing" className="px-16 py-20 border-t border-border">
            <div className="max-w-4xl">
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12 animate-fade-up">Recent Writing</h2>

              <div className="space-y-8">
                {featuredArticles.map((article, index) => (
                  <Link
                    key={article.id}
                    href={`/blog/${article.slug}`}
                    className={`group block hover-lift animate-fade-up animate-delay-${(index + 1) * 100}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-2 py-1 bg-${article.category === 'Technical' ? 'cyan' : article.category === 'AI/ML' ? 'orange' : 'purple'}/10 text-${article.category === 'Technical' ? 'cyan' : article.category === 'AI/ML' ? 'orange' : 'purple'} rounded-full text-xs`}>
                            {article.category}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {article.readTime} min read
                          </div>
                        </div>
                        <h3 className={`text-lg font-medium text-foreground group-hover:text-${article.category === 'Technical' ? 'cyan' : article.category === 'AI/ML' ? 'orange' : 'purple'} transition-colors mb-2`}>
                          {article.title}
                        </h3>
                        <p className="text-comment text-sm leading-relaxed">
                          {article.description}
                        </p>
                      </div>
                      <div className="flex flex-col items-end ml-6">
                        <span className="text-sm text-muted-foreground mb-2">
                          {new Date(article.publishedAt).getFullYear()}
                        </span>
                        <ArrowUpRight className={`w-5 h-5 text-muted-foreground group-hover:text-${article.category === 'Technical' ? 'cyan' : article.category === 'AI/ML' ? 'orange' : 'purple'} transition-colors`} />
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {article.tags.slice(0, 4).map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs text-muted-foreground">
                          {tag}{tagIndex < Math.min(article.tags.length, 4) - 1 && <span className="mx-1">•</span>}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link href="/blog" className="btn-secondary">
                  View All Articles
                </Link>
              </div>
            </div>
          </section> */}

          {/* Speaking Section */}
          <section id="speaking" className="px-4 sm:px-8 lg:px-16 py-16 lg:py-20 border-t border-border">
            <div className="max-w-5xl">
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-8 lg:mb-12 animate-fade-up">Speaking & Workshops</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {featuredTalks.map((talk, index) => (
                  <div
                    key={talk.id}
                    className={`group border border-border rounded-lg overflow-hidden hover-lift animate-fade-up animate-delay-${(index + 1) * 100} h-full flex flex-col`}
                  >
                    {/* Talk card content */}
                    <div className="p-4 lg:p-6 flex-1 flex flex-col">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 bg-${talk.type === 'Conference' ? 'purple' : talk.type === 'Workshop' ? 'green' : 'cyan'}/10 text-${talk.type === 'Conference' ? 'purple' : talk.type === 'Workshop' ? 'green' : 'cyan'} rounded-full text-xs whitespace-nowrap`}>
                              {talk.type}
                            </span>
                          </div>
                          <div className="flex gap-2 flex-shrink-0">
                            {talk.slides && (
                              <Link
                                href={talk.slides}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-orange transition-colors"
                                aria-label="View slides"
                              >
                                <ArrowUpRight className="w-4 h-4" />
                              </Link>
                            )}
                            {talk.recording && (
                              <Link
                                href={talk.recording}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-green transition-colors"
                                aria-label="Watch recording"
                              >
                                <Play className="w-4 h-4" />
                              </Link>
                            )}
                            {talk.image && !talk.recording && (
                              <Dialog>
                                <DialogTrigger asChild>
                                  <button
                                    className="text-muted-foreground hover:text-purple transition-colors cursor-pointer"
                                    aria-label="View podcast image"
                                  >
                                    <ImageIcon className="w-4 h-4" />
                                  </button>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl border-none bg-transparent p-2">
                                  <div className="relative bg-background rounded-lg overflow-hidden shadow-2xl">
                                    <div className="p-4 bg-gradient-to-r from-blue/10 to-purple/10 border-b border-border">
                                      <h3 className="text-lg font-semibold text-foreground">{talk.title}</h3>
                                      <p className="text-sm text-muted-foreground">{talk.event}</p>
                                    </div>
                                    <div className="p-6">
                                      <Image
                                        src={talk.image}
                                        alt={talk.title}
                                        width={800}
                                        height={600}
                                        className="w-full h-auto rounded-lg shadow-lg"
                                        priority
                                      />
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            )}
                          </div>
                        </div>

                        <h3 className={`text-lg font-semibold text-foreground group-hover:text-${talk.type === 'Conference' ? 'purple' : talk.type === 'Workshop' ? 'green' : 'cyan'} transition-colors mb-2`}>
                          {talk.title}
                        </h3>

                        <p className="text-comment text-sm leading-relaxed mb-4">
                          {talk.description}
                        </p>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">
                              {new Date(talk.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                          <div className="flex items-start gap-2 text-xs text-muted-foreground">
                            <MapPin className="w-3 h-3 flex-shrink-0 mt-0.5" />
                            <span className="text-left">
                              {talk.event} • {talk.venue}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 lg:gap-2 mt-auto">
                        {(expandedTalks.has(talk.id)
                          ? talk.technologies
                          : talk.technologies.slice(0, 3)
                        ).map((tech, techIndex) => (
                          <span key={techIndex} className="text-xs text-muted-foreground">
                            {tech}{techIndex < (expandedTalks.has(talk.id) ? talk.technologies.length : Math.min(talk.technologies.length, 3)) - 1 && <span className="mx-1">•</span>}
                          </span>
                        ))}
                        {talk.technologies.length > 3 && (
                          <button
                            onClick={() => toggleTalk(talk.id)}
                            className="text-xs text-muted-foreground hover:text-cyan transition-colors cursor-pointer underline decoration-dotted"
                          >
                            {expandedTalks.has(talk.id)
                              ? 'show less'
                              : `+${talk.technologies.length - 3} more`
                            }
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="text-center mt-12">
                <Link href="/speaking" className="btn-secondary">
                  View All Talks
                </Link>
              </div> */}
            </div>
          </section>

          {/* Testimonials Section */}
          {/* <section className="px-16 py-20 border-t border-border">
            <div className="max-w-5xl">
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12 text-center animate-fade-up">
                What People Say
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredTestimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`group p-6 border border-border rounded-lg hover-lift animate-fade-up animate-delay-${(index + 1) * 100}`}
                  >
                    <div className="mb-4">
                      <p className="text-comment leading-relaxed italic">
                        "{testimonial.content}"
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                        <div className="text-sm text-cyan">{testimonial.company}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.relationship}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-sm text-muted-foreground">
                  These testimonials represent real feedback from colleagues and collaborators.
                </p>
              </div>
            </div>
          </section> */}

          {/* Contact Section */}
          <section id="contact" className="px-4 sm:px-8 lg:px-16 py-16 lg:py-20 border-t border-border">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 lg:mb-12">
                <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 lg:mb-6 animate-fade-up">Get In Touch</h2>
                <p className="text-lg lg:text-2xl text-comment leading-relaxed animate-fade-up animate-delay-100">
                  I'm always interested in hearing about new projects and opportunities. Whether you have a question or
                  just want to say hi, feel free to reach out.
                </p>
              </div>
              <div className="text-center animate-fade-up animate-delay-200">
                <div className="inline-flex flex-col items-center gap-4 lg:gap-6 p-6 lg:p-8 border border-border rounded-lg hover:border-cyan transition-colors">
                  <Mail className="w-10 h-10 lg:w-12 lg:h-12 text-cyan" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-2 lg:mb-3">Drop me a line at</p>
                    <Link
                      href="mailto:hello@guilhermepozo.com"
                      className="text-lg lg:text-2xl font-medium text-foreground hover:text-cyan transition-colors inline-flex items-center gap-2 break-all sm:break-normal"
                    >
                      hello@guilhermepozo.com
                      <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                    </Link>
                  </div>
                  <p className="text-sm text-muted-foreground max-w-md text-center">
                    I typically respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="px-4 sm:px-8 lg:px-16 py-8 lg:py-12 border-t border-border">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-muted-foreground">
              <div>© 2025 Guilherme Pozo. All rights reserved.</div>
              <div>Designed & built with care</div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
