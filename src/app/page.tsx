import Link from "next/link"
import { ArrowUpRight, Github, Linkedin, Mail, Twitter, Clock, Calendar, MapPin, Play } from "lucide-react"
import { CommandPalette } from "@/components/command-palette"
import { ProjectCard } from "@/components/project-card"
import { ContactForm } from "@/components/contact-form"
import { getFeaturedProjects } from "@/data/projects"
import { getFeaturedArticles } from "@/data/articles"
import { getFeaturedTalks } from "@/data/talks"
import { getAllExperiences, getExperienceYears } from "@/data/experience"
import { getFeaturedTestimonials } from "@/data/testimonials"

export default function Home() {
  const featuredProjects = getFeaturedProjects()
  const featuredArticles = getFeaturedArticles()
  const featuredTalks = getFeaturedTalks()
  const experiences = getAllExperiences()
  const yearsOfExperience = getExperienceYears()
  const featuredTestimonials = getFeaturedTestimonials()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CommandPalette />

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="fixed left-0 top-0 h-screen w-64 border-r border-border p-8 flex flex-col justify-between">
          <div>
            <Link href="/" className="block mb-16">
              <div className="text-2xl font-bold">
                Guilherme <span className="text-pink">Pozo</span>
              </div>
              <div className="text-sm text-muted mt-1">Tech Lead & Senior Software Engineer</div>
            </Link>

            <nav className="space-y-6">
              <Link
                href="#about"
                className="block text-muted hover:text-cyan transition-colors text-sm uppercase tracking-wider"
              >
                About
              </Link>
              <Link
                href="#now"
                className="block text-muted hover:text-yellow transition-colors text-sm uppercase tracking-wider"
              >
                Now
              </Link>
              <Link
                href="#experience"
                className="block text-muted hover:text-purple transition-colors text-sm uppercase tracking-wider"
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className="block text-muted hover:text-green transition-colors text-sm uppercase tracking-wider"
              >
                Projects
              </Link>
              <Link
                href="#writing"
                className="block text-muted hover:text-orange transition-colors text-sm uppercase tracking-wider"
              >
                Writing
              </Link>
              <Link
                href="#speaking"
                className="block text-muted hover:text-pink transition-colors text-sm uppercase tracking-wider"
              >
                Speaking
              </Link>
            </nav>
          </div>

          <div className="flex gap-4">
            <Link
              href="https://github.com/guilhermepozo"
              className="text-muted hover:text-purple transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/guilhermepozo/"
              className="text-muted hover:text-cyan transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com/guilhermepozo"
              className="text-muted hover:text-green transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:hello@guilhermepozo.com"
              className="text-muted hover:text-orange transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-64 flex-1">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center px-16 py-20">
            <div className="max-w-3xl animate-fade-up">
              <div className="text-sm text-yellow mb-4 animate-fade-in animate-delay-100">Hey there, I'm Guilherme</div>
              <h1 className="text-6xl font-bold mb-8 leading-tight text-balance animate-fade-up animate-delay-200">
                Tech Lead building <span className="gradient-text">scalable cloud applications</span> and AI-powered solutions
              </h1>
              <p className="text-xl text-comment leading-relaxed mb-8 animate-fade-up animate-delay-300">
                Currently leading Digital & Full Stack LATAM at <span className="text-cyan">Johnson & Johnson</span>,
                where I architect cloud solutions, drive DevOps excellence, and pioneer AI/Agentic automation across the
                software development lifecycle.
              </p>
              <div className="flex gap-4 animate-fade-up animate-delay-400">
                <Link href="#projects" className="btn-primary">
                  View my work
                </Link>
                <Link href="#contact" className="btn-secondary">
                  Get in touch
                </Link>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="px-16 py-20 border-t border-border">
            <div className="max-w-3xl">
              <h2 className="text-sm uppercase tracking-wider text-muted mb-8">About</h2>
              <p className="text-lg text-comment leading-relaxed mb-6">
                I'm a Technical Leader specializing in cloud engineering, infrastructure as code, and full-stack
                development. My expertise spans across <span className="text-purple">cloud platforms</span> (AWS,
                Azure), modern <span className="text-green">frontend technologies</span> (Next.js, React), and robust
                <span className="text-orange"> backend systems</span> (TypeScript, Python).
              </p>
              <p className="text-lg text-comment leading-relaxed mb-6">
                As a core member of the <span className="text-cyan">AI/Agentic Automation workstream</span>, I'm
                accelerating the adoption of LLMs and agent-based solutions throughout the SDLC, utilizing platforms
                like Langflow for rapid prototyping and deployment of intelligent automation.
              </p>
              <p className="text-lg text-comment leading-relaxed">
                Based in <span className="text-foreground">São José dos Campos, Brazil</span>, I've worked across
                diverse environments from large enterprises like Johnson & Johnson and Ambev to innovative startups like
                Quero Educação, always focusing on scalability, automation, and developer experience.
              </p>
            </div>
          </section>

          {/* Now Section */}
          <section id="now" className="px-16 py-20 border-t border-border">
            <div className="max-w-3xl">
              <h2 className="text-sm uppercase tracking-wider text-muted mb-8 animate-fade-up">What I'm doing now</h2>

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
          </section>

          {/* Experience Section */}
          <section id="experience" className="px-16 py-20 border-t border-border">
            <div className="max-w-4xl">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-sm uppercase tracking-wider text-muted animate-fade-up">Experience</h2>
                <div className="text-sm text-muted animate-fade-up animate-delay-100">
                  {yearsOfExperience}+ years in tech
                </div>
              </div>

              <div className="space-y-16">
                {experiences.map((experience, index) => (
                  <div
                    key={experience.id}
                    className={`group relative animate-fade-up animate-delay-${(index + 1) * 100}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-6 w-3 h-3 bg-border rounded-full group-hover:bg-cyan transition-colors"></div>
                    <div className="absolute left-1.5 top-9 w-px h-full bg-border"></div>

                    <div className="ml-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-cyan transition-colors">
                              {experience.title}
                            </h3>
                            {experience.current && (
                              <span className="px-2 py-1 bg-green/10 text-green rounded-full text-xs">
                                Current
                              </span>
                            )}
                            <span className="px-2 py-1 bg-purple/10 text-purple rounded-full text-xs">
                              {experience.type}
                            </span>
                          </div>
                          <div className="text-comment font-medium mb-1">{experience.company}</div>
                          <div className="text-xs text-muted mb-4">{experience.location}</div>
                        </div>
                        <div className="text-sm text-muted">
                          {new Date(experience.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} —{' '}
                          {experience.current ? 'Present' : new Date(experience.endDate!).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </div>
                      </div>

                      <div className="space-y-3 mb-4">
                        {experience.description.map((desc, descIndex) => (
                          <p key={descIndex} className="text-comment leading-relaxed">
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
                                <span className="text-green mt-1">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.slice(0, 8).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 bg-${techIndex % 6 === 0 ? 'cyan' : techIndex % 6 === 1 ? 'purple' : techIndex % 6 === 2 ? 'green' : techIndex % 6 === 3 ? 'orange' : techIndex % 6 === 4 ? 'pink' : 'yellow'}/10 text-${techIndex % 6 === 0 ? 'cyan' : techIndex % 6 === 1 ? 'purple' : techIndex % 6 === 2 ? 'green' : techIndex % 6 === 3 ? 'orange' : techIndex % 6 === 4 ? 'pink' : 'yellow'} rounded-full text-xs`}
                          >
                            {tech}
                          </span>
                        ))}
                        {experience.technologies.length > 8 && (
                          <span className="px-3 py-1 bg-muted/10 text-muted rounded-full text-xs">
                            +{experience.technologies.length - 8} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="px-16 py-20 border-t border-border">
            <div className="max-w-6xl">
              <h2 className="text-sm uppercase tracking-wider text-muted mb-12 animate-fade-up">Selected Projects</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`animate-fade-up animate-delay-${(index + 1) * 100}`}
                  >
                    <ProjectCard project={project} featured />
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link href="/projects" className="btn-secondary">
                  View All Projects
                </Link>
              </div>
            </div>
          </section>

          {/* Writing Section */}
          <section id="writing" className="px-16 py-20 border-t border-border">
            <div className="max-w-4xl">
              <h2 className="text-sm uppercase tracking-wider text-muted mb-12 animate-fade-up">Recent Writing</h2>

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
                          <div className="flex items-center gap-1 text-xs text-muted">
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
                        <span className="text-sm text-muted mb-2">
                          {new Date(article.publishedAt).getFullYear()}
                        </span>
                        <ArrowUpRight className={`w-5 h-5 text-muted group-hover:text-${article.category === 'Technical' ? 'cyan' : article.category === 'AI/ML' ? 'orange' : 'purple'} transition-colors`} />
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {article.tags.slice(0, 4).map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs text-muted">
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
          </section>

          {/* Speaking Section */}
          <section id="speaking" className="px-16 py-20 border-t border-border">
            <div className="max-w-5xl">
              <h2 className="text-sm uppercase tracking-wider text-muted mb-12 animate-fade-up">Speaking & Workshops</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredTalks.map((talk, index) => (
                  <div
                    key={talk.id}
                    className={`group p-6 border border-border rounded-lg hover-lift animate-fade-up animate-delay-${(index + 1) * 100}`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 bg-${talk.type === 'Conference' ? 'purple' : talk.type === 'Workshop' ? 'green' : 'cyan'}/10 text-${talk.type === 'Conference' ? 'purple' : talk.type === 'Workshop' ? 'green' : 'cyan'} rounded-full text-xs`}>
                          {talk.type}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        {talk.slides && (
                          <Link
                            href={talk.slides}
                            className="text-muted hover:text-orange transition-colors"
                            aria-label="View slides"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </Link>
                        )}
                        {talk.recording && (
                          <Link
                            href={talk.recording}
                            className="text-muted hover:text-green transition-colors"
                            aria-label="Watch recording"
                          >
                            <Play className="w-4 h-4" />
                          </Link>
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
                      <div className="flex items-center gap-2 text-xs text-muted">
                        <Calendar className="w-3 h-3" />
                        {new Date(talk.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted">
                        <MapPin className="w-3 h-3" />
                        {talk.event} • {talk.venue}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {talk.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs text-muted">
                          {tech}{techIndex < Math.min(talk.technologies.length, 3) - 1 && <span className="mx-1">•</span>}
                        </span>
                      ))}
                      {talk.technologies.length > 3 && (
                        <span className="text-xs text-muted">+{talk.technologies.length - 3} more</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link href="/speaking" className="btn-secondary">
                  View All Talks
                </Link>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="px-16 py-20 border-t border-border">
            <div className="max-w-5xl">
              <h2 className="text-sm uppercase tracking-wider text-muted mb-12 text-center animate-fade-up">
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
                        <div className="text-sm text-muted">{testimonial.title}</div>
                        <div className="text-sm text-cyan">{testimonial.company}</div>
                      </div>
                      <div className="text-xs text-muted">
                        {testimonial.relationship}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-sm text-muted">
                  These testimonials represent real feedback from colleagues and collaborators.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="px-16 py-20 border-t border-border">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-sm uppercase tracking-wider text-muted mb-6 animate-fade-up">Get In Touch</h2>
                <p className="text-2xl text-comment leading-relaxed animate-fade-up animate-delay-100">
                  I'm always interested in hearing about new projects and opportunities. Whether you have a question or
                  just want to say hi, feel free to reach out.
                </p>
              </div>
              <div className="animate-fade-up animate-delay-200">
                <ContactForm />
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="px-16 py-12 border-t border-border">
            <div className="flex items-center justify-between text-sm text-muted">
              <div>© 2025 Guilherme Pozo. All rights reserved.</div>
              <div>Designed & built with care</div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
