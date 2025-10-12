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
  image?: string
  featured: boolean
}

export const talks: Talk[] = [
  {
    id: 'ansible-vagrant-intro-workshop',
    title: 'Introduction to Ansible and Vagrant',
    description: 'Hands-on workshop covering the fundamentals of Ansible and Vagrant for infrastructure automation. Providing practical knowledge to test and practice new technologies quickly and safely in local environments, reducing manual tasks and increasing delivery quality through automation.',
    event: 'PagTalks Meetup',
    venue: 'PagBank',
    date: '2020-01-15',
    duration: 120,
    type: 'Workshop',
    technologies: ['Ansible', 'Vagrant', 'DevOps', 'IaC', 'Automation', 'VirtualBox', 'Configuration Management'],
    slides: 'https://github.com/guilhermepozo/config-ansible-vagrant',
    recording: 'https://www.linkedin.com/posts/guilhermepozo_devops-iac-vagrant-activity-6629046392163745792-Rsw9',
    featured: true
  },
  {
    id: 'sre-ambev-tech-interview',
    title: 'What does an SRE do at Ambev Tech',
    description: 'An in-depth conversation about Site Reliability Engineering at Ambev Tech. Exploring SRE as a software engineering approach to IT operations, discussing the role, responsibilities, and how SRE practices enable reliability and scalability in a high-performance technology environment.',
    event: 'Expert Talk - Ambev Tech',
    venue: 'Ambev Tech Blog',
    date: '2021-06-15',
    duration: 30,
    type: 'Internal',
    technologies: ['SRE', 'Site Reliability', 'DevOps', 'Operations', 'Engineering', 'Scalability', 'Reliability'],
    slides: 'https://www.ambevtech.com.br/news/tecnologia/o-que-faz-um-sre-na-ambev-tech',
    recording: 'https://www.youtube.com/watch?v=5JG8cZeurJQ',
    featured: true
  },
  {
    id: 'iac-base-startups-tdc-2021',
    title: 'IaC as Startups Foundation',
    description: 'How Terraform and Terragrunt enable startups to build scalable, secure, and maintainable infrastructure on AWS. Covering repository structure, Terragrunt for shared standards, state management best practices, and CI/CD automation to create a solid foundation for growth.',
    event: 'The Developers Conference (TDC) - Transformation',
    venue: 'Ambev Tech',
    date: '2021-12-08',
    duration: 45,
    type: 'Conference',
    technologies: ['Terraform', 'Terragrunt', 'AWS', 'IaC', 'DevOps', 'Cloud', 'CI/CD', 'Startups', 'State Management', 'Architecture'],
    slides: 'https://github.com/tdc-pozo-2021',
    recording: 'https://promo.thedevconf.com/transformation-ambev-tech',
    image: '/tdc.jpeg',
    featured: true
  },
  {
    id: 'ai-ts-latam-podcast-ep3',
    title: 'Is AI all you need?',
    description: 'Exploring the emergence of AI, various platforms and tools available in the market, practical use cases, and how AI agents can streamline development processes.',
    event: 'TS LATAM Podcast - Episode 3',
    venue: 'Technology Podcast',
    date: '2025-07-01',
    duration: 60,
    type: 'Internal',
    technologies: ['AI', 'Artificial Intelligence', 'Machine Learning', 'Technology', 'Development', 'Innovation', 'Automation'],
    image: '/ai-talk-ep3.png',
    featured: true
  },
  {
    id: 'ai-professional-profiles-ts-latam-ep4',
    title: 'Do you have what it takes to work with AI?',
    description: 'Exploring essential professional profiles for AI engineers and developers, plus controversial topics including environmental impact and intellectual property in AI.',
    event: 'TS LATAM Podcast - Episode 4',
    venue: 'Technology Podcast',
    date: '2025-08-04',
    duration: 60,
    type: 'Webinar',
    technologies: ['AI', 'Artificial Intelligence', 'Professional Development', 'Ethics', 'Sustainability', 'Intellectual Property', 'Career Development'],
    image: '/ai-talk-ep4.png',
    featured: true
  },
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