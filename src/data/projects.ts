export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image?: string
  technologies: string[]
  category: 'Infrastructure' | 'Frontend' | 'Backend' | 'DevOps' | 'AI/ML' | 'Entrepreneurship'
  status: 'Completed' | 'In Progress' | 'Archived'
  timeline: string
  outcomes: string[]
  metrics?: {
    label: string
    value: string
    improvement?: string
  }[]
  links?: {
    type: 'github' | 'demo' | 'case-study' | 'article'
    url: string
    label: string
  }[]
  highlights: string[]
  challenges: string[]
  learnings: string[]
}

export const projects: Project[] = [
  {
    id: 'ita-challenge-2018',
    title: 'SpecQuimica - Toxicology Testing',
    description: 'Won 1st place at ITA Challenge 2018 with SpecQuimica, developing faster and more cost-effective toxicology testing using infrared spectrometry.',
    longDescription: 'Founded SpecQuimica team at UNIVAP and developed an innovative toxicology identification process using infrared focal spectrometry. Our solution revolutionizes the toxicology market by providing a faster, more cost-effective alternative to traditional gas/liquid chromatography coupled with mass spectrometry detectors. Won 1st place in Embarca category at ITA Challenge 2018, competing against 440+ students across 114 teams from Brazil.',
    category: 'Entrepreneurship',
    status: 'Completed',
    timeline: '2018',
    technologies: ['Infrared Spectrometry', 'Toxicology Testing', 'Analytical Chemistry', 'Medical Technology', 'Business Development', 'Market Research'],
    outcomes: [
      '1st place winner in Embarca category among 114 competing teams',
      'Proposed innovative infrared spectrometry process for toxicology testing',
      'Proposed faster and more cost-effective alternative to traditional methods',
      'Successfully validated disruptive technology in competitive market analysis',
    ],
    metrics: [
      { label: 'Competition Rank', value: '1st Place', improvement: 'Embarca category' },
      { label: 'Teams Competed', value: '114', improvement: 'from across Brazil' },
      { label: 'Cost Reduction', value: 'Significant', improvement: 'vs traditional methods' },
      { label: 'Analysis Speed', value: 'Faster', improvement: 'vs chromatography + mass spec' }
    ],
    highlights: [
      'Infrared focal spectrometry method for toxic identification',
      'Cost-effective alternative to expensive chromatography equipment',
      'Faster analysis results compared to traditional toxicology methods',
      'Comprehensive market analysis of toxicology testing industry',
      'Professional pitch presentation to expert judges'
    ],
    challenges: [
      'Competing against traditional chromatography-mass spectrometry methods',
      'Proving accuracy and reliability of infrared spectrometry approach',
      'Demonstrating market viability for disruptive medical technology',
      'Balancing innovation with regulatory compliance requirements',
      'Presenting complex technical solution to diverse audience'
    ],
    learnings: [
      'Importance of understanding incumbent technology limitations',
      'Value of cost-effectiveness in medical technology adoption',
      'Critical need for thorough competitive technology analysis',
      'Significance of speed and efficiency in diagnostic solutions',
      'Essential role of teamwork in deep-tech innovation',
      'Importance of translating technical advantages into business value'
    ],
    links: [
      { type: 'article', url: 'https://www.linkedin.com/posts/guilhermepozo_empreendedorismo-activity-6481111829505417216-vVkk/', label: 'LinkedIn Announcement' },
      { type: 'demo', url: 'https://www.itachallenge.ita.br/', label: 'ITA Challenge Official Website' },
      { type: 'article', url: 'https://www.itachallenge.ita.br/edicao-2018/', label: 'Winners Announcement' }
    ]
  }
]

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category)
}

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.status === 'Completed').slice(0, 4)
}