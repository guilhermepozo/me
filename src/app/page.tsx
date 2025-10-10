import Link from "next/link"
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { CommandPalette } from "@/components/command-palette"

export default function Home() {
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
              <div className="text-sm text-muted mt-1">Tech Lead & SRE</div>
            </Link>

            <nav className="space-y-6">
              <Link
                href="#about"
                className="block text-muted hover:text-cyan transition-colors text-sm uppercase tracking-wider"
              >
                About
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
            <div className="max-w-3xl">
              <div className="text-sm text-yellow mb-4">Hey there, I'm Guilherme</div>
              <h1 className="text-6xl font-bold mb-8 leading-tight text-balance">
                Tech Lead building scalable cloud infrastructure and AI-powered solutions
              </h1>
              <p className="text-xl text-comment leading-relaxed mb-8">
                Currently leading Digital & Full Stack LATAM at <span className="text-cyan">Johnson & Johnson</span>,
                where I architect cloud solutions, drive DevOps excellence, and pioneer AI/Agentic automation across the
                software development lifecycle.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#projects"
                  className="px-6 py-3 bg-green text-background font-medium rounded-lg hover:bg-green/90 transition-colors"
                >
                  View my work
                </Link>
                <Link
                  href="#contact"
                  className="px-6 py-3 border border-border rounded-lg hover:border-purple hover:text-purple transition-colors"
                >
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

          {/* Experience Section */}
          <section id="experience" className="px-16 py-20 border-t border-border">
            <div className="max-w-3xl">
              <h2 className="text-sm uppercase tracking-wider text-muted mb-12">Experience</h2>

              <div className="space-y-12">
                <div className="group">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-pink transition-colors">
                        Senior Software Engineer
                      </h3>
                      <div className="text-comment mt-1">Johnson & Johnson</div>
                    </div>
                    <div className="text-sm text-muted">Jul 2023 — Present</div>
                  </div>
                  <p className="text-comment leading-relaxed mb-3">
                    Technical Leader for Digital & Full Stack LATAM chapter, overseeing cloud engineering, IaC,
                    frontend/backend development, and DevOps/SRE practices. Core member of the AI/Agentic Automation
                    workstream, driving adoption of LLMs and agent-based solutions across the SDLC.
                  </p>
                  <p className="text-comment leading-relaxed">
                    Organize internal Communities of Practice, advancing technical expertise across LATAM chapters in
                    Infrastructure & Cloud, Software Engineering, Developer Experience, and Platform Engineering.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-pink/10 text-pink rounded-full text-xs">Next.js</span>
                    <span className="px-3 py-1 bg-purple/10 text-purple rounded-full text-xs">TypeScript</span>
                    <span className="px-3 py-1 bg-cyan/10 text-cyan rounded-full text-xs">Python</span>
                    <span className="px-3 py-1 bg-green/10 text-green rounded-full text-xs">IaC</span>
                    <span className="px-3 py-1 bg-orange/10 text-orange rounded-full text-xs">Langflow</span>
                    <span className="px-3 py-1 bg-yellow/10 text-yellow rounded-full text-xs">AI/LLMs</span>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-pink transition-colors">
                        Site Reliability Engineer
                      </h3>
                      <div className="text-comment mt-1">Ambev Tech</div>
                    </div>
                    <div className="text-sm text-muted">Feb 2021 — Jul 2023</div>
                  </div>
                  <p className="text-comment leading-relaxed mb-3">
                    Key member of the Cloud Transformation Core Team, designing and implementing enterprise-scale cloud
                    architecture through Infrastructure as Code. Led migration of legacy infrastructure to modern
                    cloud-first model.
                  </p>
                  <p className="text-comment leading-relaxed">
                    Developed and maintained Terraform modules, Ansible roles, and CI/CD pipelines while ensuring
                    alignment with global security and compliance policies.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-cyan/10 text-cyan rounded-full text-xs">Azure</span>
                    <span className="px-3 py-1 bg-purple/10 text-purple rounded-full text-xs">Terraform</span>
                    <span className="px-3 py-1 bg-green/10 text-green rounded-full text-xs">Kubernetes</span>
                    <span className="px-3 py-1 bg-orange/10 text-orange rounded-full text-xs">Ansible</span>
                    <span className="px-3 py-1 bg-pink/10 text-pink rounded-full text-xs">Azure DevOps</span>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-pink transition-colors">
                        Site Reliability Engineer
                      </h3>
                      <div className="text-comment mt-1">Quero Educação</div>
                    </div>
                    <div className="text-sm text-muted">Mar 2020 — Feb 2021</div>
                  </div>
                  <p className="text-comment leading-relaxed mb-3">
                    Member of the Global SRE Platform Team, designing and maintaining internal solutions and business
                    unit-specific platforms. Provided comprehensive support to developers in IaC, cloud architectures,
                    automation, and security.
                  </p>
                  <p className="text-comment leading-relaxed">
                    Implemented observability solutions with Grafana and Prometheus, managed AWS multi-account
                    environments, and built CI/CD pipelines for diverse applications and runtimes.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-orange/10 text-orange rounded-full text-xs">AWS</span>
                    <span className="px-3 py-1 bg-purple/10 text-purple rounded-full text-xs">Terraform</span>
                    <span className="px-3 py-1 bg-green/10 text-green rounded-full text-xs">EKS</span>
                    <span className="px-3 py-1 bg-cyan/10 text-cyan rounded-full text-xs">Grafana</span>
                    <span className="px-3 py-1 bg-pink/10 text-pink rounded-full text-xs">GitLab CI</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="px-16 py-20 border-t border-border">
            <div className="max-w-4xl">
              <h2 className="text-sm uppercase tracking-wider text-muted mb-12">Selected Projects</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link
                  href="#"
                  className="group block p-6 border border-border rounded-lg hover:border-cyan transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-cyan transition-colors">
                      Project One
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-cyan transition-colors" />
                  </div>
                  <p className="text-comment text-sm leading-relaxed mb-4">
                    A comprehensive platform for managing digital workflows. Built with modern web technologies and
                    focused on user experience.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs text-cyan">Next.js</span>
                    <span className="text-xs text-muted">•</span>
                    <span className="text-xs text-purple">TypeScript</span>
                    <span className="text-xs text-muted">•</span>
                    <span className="text-xs text-pink">Tailwind</span>
                  </div>
                </Link>

                <Link
                  href="#"
                  className="group block p-6 border border-border rounded-lg hover:border-purple transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-purple transition-colors">
                      Project Two
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-purple transition-colors" />
                  </div>
                  <p className="text-comment text-sm leading-relaxed mb-4">
                    An open-source tool for developers to streamline their workflow. Features real-time collaboration
                    and advanced analytics.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs text-cyan">React</span>
                    <span className="text-xs text-muted">•</span>
                    <span className="text-xs text-green">Node.js</span>
                    <span className="text-xs text-muted">•</span>
                    <span className="text-xs text-purple">PostgreSQL</span>
                  </div>
                </Link>

                <Link
                  href="#"
                  className="group block p-6 border border-border rounded-lg hover:border-green transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-green transition-colors">
                      Project Three
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-green transition-colors" />
                  </div>
                  <p className="text-comment text-sm leading-relaxed mb-4">
                    A design system and component library used by multiple teams. Emphasizes accessibility and
                    consistency.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs text-cyan">React</span>
                    <span className="text-xs text-muted">•</span>
                    <span className="text-xs text-orange">Storybook</span>
                    <span className="text-xs text-muted">•</span>
                    <span className="text-xs text-pink">CSS</span>
                  </div>
                </Link>

                <Link
                  href="#"
                  className="group block p-6 border border-border rounded-lg hover:border-orange transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-orange transition-colors">
                      Project Four
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-orange transition-colors" />
                  </div>
                  <p className="text-comment text-sm leading-relaxed mb-4">
                    A mobile-first web application for content creators. Features advanced editing tools and real-time
                    preview.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs text-green">Vue.js</span>
                    <span className="text-xs text-muted">•</span>
                    <span className="text-xs text-orange">Firebase</span>
                    <span className="text-xs text-muted">•</span>
                    <span className="text-xs text-yellow">PWA</span>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {/* Writing Section */}
          <section id="writing" className="px-16 py-20 border-t border-border">
            <div className="max-w-3xl">
              <h2 className="text-sm uppercase tracking-wider text-muted mb-12">Writing</h2>

              <div className="space-y-8">
                <Link href="#" className="group block">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-lg font-medium text-foreground group-hover:text-cyan transition-colors">
                      Building Accessible Web Applications
                    </h3>
                    <span className="text-sm text-muted">2024</span>
                  </div>
                  <p className="text-comment text-sm">
                    A comprehensive guide to creating inclusive digital experiences that work for everyone.
                  </p>
                </Link>

                <Link href="#" className="group block">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-lg font-medium text-foreground group-hover:text-purple transition-colors">
                      The Art of Component Design
                    </h3>
                    <span className="text-sm text-muted">2024</span>
                  </div>
                  <p className="text-comment text-sm">
                    Thoughts on creating reusable, maintainable components that scale with your application.
                  </p>
                </Link>

                <Link href="#" className="group block">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-lg font-medium text-foreground group-hover:text-green transition-colors">
                      Performance Optimization Techniques
                    </h3>
                    <span className="text-sm text-muted">2023</span>
                  </div>
                  <p className="text-comment text-sm">
                    Practical strategies for building fast, responsive web applications that delight users.
                  </p>
                </Link>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="px-16 py-20 border-t border-border">
            <div className="max-w-3xl">
              <h2 className="text-sm uppercase tracking-wider text-muted mb-8">Get In Touch</h2>
              <p className="text-2xl text-comment leading-relaxed mb-8">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or
                just want to say hi, feel free to reach out.
              </p>
              <Link
                href="mailto:hello@guilhermepozo.com"
                className="inline-flex items-center gap-2 text-yellow hover:text-yellow/80 transition-colors text-lg"
              >
                hello@guilhermepozo.com
                <ArrowUpRight className="w-5 h-5" />
              </Link>
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
