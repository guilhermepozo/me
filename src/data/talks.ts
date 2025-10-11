export interface Talk {
  id: string
  title: string
  description: string
  event: string
  venue: string
  date: string
  duration: number
  type: 'Conference' | 'Meetup' | 'Workshop' | 'Webinar' | 'Internal'
  technologies: string[]
  slides?: string
  recording?: string
  featured: boolean
}

export const talks: Talk[] = [
  {
    id: 'ai-automation-jnj',
    title: 'Scaling AI/Agentic Automation in Enterprise Software Development',
    description: 'How we implemented LLM-powered automation across the software development lifecycle at Johnson & Johnson, reducing development time by 40% while maintaining quality and security standards.',
    event: 'DevOps World 2024',
    venue: 'São Paulo Tech Hub',
    date: '2024-09-15',
    duration: 45,
    type: 'Conference',
    technologies: ['AI', 'LLMs', 'Langflow', 'DevOps', 'Automation'],
    slides: '/talks/ai-automation-jnj-slides.pdf',
    recording: 'https://youtu.be/example1',
    featured: true
  },
  {
    id: 'terraform-at-scale',
    title: 'Infrastructure as Code at Scale: Terraform Best Practices',
    description: 'Lessons learned from managing Terraform across 15+ countries at Ambev. Covering module design, state management, and governance strategies for large-scale deployments.',
    event: 'HashiTalks Brasil',
    venue: 'Virtual Event',
    date: '2023-11-20',
    duration: 30,
    type: 'Conference',
    technologies: ['Terraform', 'IaC', 'Cloud', 'DevOps', 'Governance'],
    slides: '/talks/terraform-scale-slides.pdf',
    recording: 'https://youtu.be/example2',
    featured: true
  },
  {
    id: 'kubernetes-production-workshop',
    title: 'Kubernetes in Production: From Zero to Hero',
    description: 'Hands-on workshop covering production-ready Kubernetes deployments, including security, monitoring, scaling, and disaster recovery strategies.',
    event: 'KubeCon Brasil Meetup',
    venue: 'São José dos Campos Tech Center',
    date: '2023-08-10',
    duration: 180,
    type: 'Workshop',
    technologies: ['Kubernetes', 'Docker', 'Helm', 'Monitoring', 'Security'],
    slides: '/talks/k8s-production-workshop.pdf',
    featured: true
  },
  {
    id: 'platform-engineering-journey',
    title: 'Building Internal Developer Platforms: A Journey',
    description: 'How we transformed developer experience by building comprehensive internal platforms. Covering the evolution from manual processes to self-service infrastructure.',
    event: 'Platform Engineering Summit',
    venue: 'Rio de Janeiro Convention Center',
    date: '2023-05-25',
    duration: 40,
    type: 'Conference',
    technologies: ['Platform Engineering', 'DevOps', 'Developer Experience', 'Automation'],
    slides: '/talks/platform-engineering-slides.pdf',
    featured: true
  },
  {
    id: 'observability-microservices',
    title: 'Observability in Microservices: Beyond Monitoring',
    description: 'Deep dive into implementing comprehensive observability across microservice architectures. Covering metrics, logs, traces, and incident response.',
    event: 'Microservices São Paulo',
    venue: 'São Paulo Innovation Center',
    date: '2022-10-15',
    duration: 35,
    type: 'Meetup',
    technologies: ['Observability', 'Microservices', 'Prometheus', 'Grafana', 'Jaeger'],
    slides: '/talks/observability-microservices-slides.pdf',
    featured: false
  },
  {
    id: 'cloud-migration-strategies',
    title: 'Cloud Migration Strategies for Legacy Applications',
    description: 'Practical approaches to migrating legacy applications to the cloud. Real-world case studies and lessons learned from enterprise transformations.',
    event: 'AWS Community Day',
    venue: 'Campinas Tech Hub',
    date: '2022-07-30',
    duration: 45,
    type: 'Conference',
    technologies: ['AWS', 'Cloud Migration', 'Legacy Systems', 'Architecture'],
    slides: '/talks/cloud-migration-slides.pdf',
    featured: false
  }
]

export const getFeaturedTalks = (): Talk[] => {
  return talks.filter(talk => talk.featured).slice(0, 4)
}

export const getTalksByType = (type: Talk['type']): Talk[] => {
  return talks.filter(talk => talk.type === type)
}

export const getAllTalks = (): Talk[] => {
  return talks.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}