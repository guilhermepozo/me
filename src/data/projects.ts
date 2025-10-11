export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image?: string
  technologies: string[]
  category: 'Infrastructure' | 'Frontend' | 'Backend' | 'DevOps' | 'AI/ML'
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
    id: 'jnj-cloud-transformation',
    title: 'Enterprise Cloud Transformation',
    description: 'Led comprehensive cloud migration and infrastructure modernization for Johnson & Johnson LATAM operations.',
    longDescription: 'Architected and executed a large-scale cloud transformation initiative, migrating legacy infrastructure to modern cloud-native solutions. Implemented Infrastructure as Code practices, established DevOps pipelines, and built resilient, scalable systems serving millions of users across Latin America.',
    category: 'Infrastructure',
    status: 'Completed',
    timeline: '2023 - 2024',
    technologies: ['AWS', 'Azure', 'Terraform', 'Kubernetes', 'TypeScript', 'Python', 'Docker', 'Helm'],
    outcomes: [
      'Reduced infrastructure costs by 40% through optimized resource allocation',
      'Improved deployment frequency from monthly to daily releases',
      'Achieved 99.9% uptime across all critical services',
      'Decreased incident response time by 65%'
    ],
    metrics: [
      { label: 'Cost Reduction', value: '40%', improvement: 'vs legacy infrastructure' },
      { label: 'Deployment Frequency', value: 'Daily', improvement: 'from monthly' },
      { label: 'System Uptime', value: '99.9%', improvement: '+15% reliability' },
      { label: 'Response Time', value: '2 min', improvement: '65% faster' }
    ],
    highlights: [
      'Designed multi-region disaster recovery strategy',
      'Implemented zero-downtime deployment practices',
      'Established comprehensive monitoring and alerting',
      'Built automated scaling policies for peak loads'
    ],
    challenges: [
      'Legacy system dependencies and technical debt',
      'Compliance requirements across multiple regions',
      'Team training and knowledge transfer',
      'Minimizing downtime during migration'
    ],
    learnings: [
      'Importance of gradual migration strategies',
      'Value of comprehensive testing in cloud environments',
      'Critical role of monitoring and observability',
      'Significance of team collaboration in large transformations'
    ],
    links: [
      { type: 'case-study', url: '#', label: 'Detailed Case Study' }
    ]
  },
  {
    id: 'ai-automation-platform',
    title: 'AI/Agentic Automation Platform',
    description: 'Built intelligent automation platform using LLMs and agent-based solutions to accelerate software development lifecycle.',
    longDescription: 'Pioneered the development of an AI-powered automation platform that leverages Large Language Models and autonomous agents to streamline software development processes. The platform integrates with existing CI/CD pipelines and provides intelligent code review, automated testing, and deployment optimization.',
    category: 'AI/ML',
    status: 'In Progress',
    timeline: '2024 - Present',
    technologies: ['Langflow', 'OpenAI GPT', 'Python', 'FastAPI', 'React', 'TypeScript', 'Docker', 'Redis'],
    outcomes: [
      'Reduced code review time by 50% through AI-assisted analysis',
      'Automated 80% of repetitive development tasks',
      'Improved code quality scores by 35%',
      'Accelerated onboarding for new developers by 60%'
    ],
    metrics: [
      { label: 'Review Time', value: '50%', improvement: 'reduction' },
      { label: 'Task Automation', value: '80%', improvement: 'of repetitive work' },
      { label: 'Code Quality', value: '35%', improvement: 'score increase' },
      { label: 'Onboarding Speed', value: '60%', improvement: 'faster ramp-up' }
    ],
    highlights: [
      'Custom LLM fine-tuning for domain-specific tasks',
      'Real-time code analysis and suggestions',
      'Intelligent test case generation',
      'Automated documentation generation'
    ],
    challenges: [
      'Ensuring AI model accuracy and reliability',
      'Integration with legacy development tools',
      'Managing AI hallucinations and false positives',
      'Balancing automation with human oversight'
    ],
    learnings: [
      'Importance of human-in-the-loop design patterns',
      'Value of continuous model evaluation and improvement',
      'Critical need for explainable AI in development tools',
      'Significance of user feedback in AI system refinement'
    ],
    links: [
      { type: 'demo', url: '#', label: 'Live Demo' },
      { type: 'article', url: '#', label: 'Technical Deep Dive' }
    ]
  },
  {
    id: 'ambev-cloud-platform',
    title: 'Global Cloud Platform Architecture',
    description: 'Designed and implemented enterprise-scale cloud platform serving Ambev\'s global operations across multiple regions.',
    longDescription: 'Led the architecture and implementation of a comprehensive cloud platform that standardized infrastructure practices across Ambev\'s global operations. The platform included automated provisioning, security compliance, and monitoring solutions that supported diverse business units and geographic regions.',
    category: 'Infrastructure',
    status: 'Completed',
    timeline: '2021 - 2023',
    technologies: ['Azure', 'Terraform', 'Kubernetes', 'Ansible', 'Python', 'PowerShell', 'Grafana', 'Prometheus'],
    outcomes: [
      'Standardized infrastructure across 15+ countries',
      'Reduced provisioning time from weeks to hours',
      'Achieved SOC 2 and ISO 27001 compliance',
      'Enabled 300+ development teams with self-service capabilities'
    ],
    metrics: [
      { label: 'Countries Served', value: '15+', improvement: 'standardized ops' },
      { label: 'Provisioning Time', value: '2 hours', improvement: 'from 2+ weeks' },
      { label: 'Compliance', value: '100%', improvement: 'SOC 2 & ISO 27001' },
      { label: 'Teams Enabled', value: '300+', improvement: 'self-service access' }
    ],
    highlights: [
      'Multi-region disaster recovery implementation',
      'Automated security scanning and compliance checks',
      'Self-service infrastructure provisioning portal',
      'Comprehensive cost optimization and reporting'
    ],
    challenges: [
      'Regulatory compliance across different countries',
      'Legacy application migration complexities',
      'Cross-team coordination and standardization',
      'Balancing security with developer productivity'
    ],
    learnings: [
      'Value of platform thinking in large organizations',
      'Importance of developer experience in adoption',
      'Critical role of automation in compliance',
      'Significance of change management in transformations'
    ]
  },
  {
    id: 'quero-observability-platform',
    title: 'Comprehensive Observability Platform',
    description: 'Built end-to-end observability solution with custom dashboards, alerting, and performance monitoring for high-traffic applications.',
    longDescription: 'Developed a comprehensive observability platform that provided deep insights into application performance, infrastructure health, and user experience. The solution included custom metrics collection, intelligent alerting, and automated incident response capabilities.',
    category: 'DevOps',
    status: 'Completed',
    timeline: '2020 - 2021',
    technologies: ['AWS', 'Grafana', 'Prometheus', 'ELK Stack', 'Terraform', 'Python', 'Go', 'Kubernetes'],
    outcomes: [
      'Reduced mean time to resolution (MTTR) by 70%',
      'Prevented 95% of potential outages through proactive alerting',
      'Improved application performance by 45%',
      'Enabled data-driven capacity planning'
    ],
    metrics: [
      { label: 'MTTR Reduction', value: '70%', improvement: 'faster resolution' },
      { label: 'Outage Prevention', value: '95%', improvement: 'proactive detection' },
      { label: 'Performance Gain', value: '45%', improvement: 'app optimization' },
      { label: 'Monitoring Coverage', value: '100%', improvement: 'full visibility' }
    ],
    highlights: [
      'Custom metric collection and visualization',
      'Intelligent alerting with ML-based anomaly detection',
      'Automated incident response workflows',
      'Real-time capacity planning and forecasting'
    ],
    challenges: [
      'Managing high-volume log and metric ingestion',
      'Reducing alert fatigue and false positives',
      'Correlating data across multiple systems',
      'Ensuring observability platform reliability'
    ],
    learnings: [
      'Importance of signal-to-noise ratio in monitoring',
      'Value of custom metrics for business context',
      'Critical need for observability platform resilience',
      'Significance of team education in monitoring practices'
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