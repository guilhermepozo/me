export interface Experience {
  id: string
  title: string
  company: { name: string; link: string | null }
  location: string
  startDate: string
  endDate?: string
  current: boolean
  description: string[]
  achievements: string[]
  technologies: string[]
  type: 'Full-time' | 'Contract' | 'Freelance' | 'Internship'
}

export const experiences: Experience[] = [
  {
    id: 'jnj-senior-swe',
    title: 'Senior Software Engineer',
    company: { name: 'Johnson & Johnson', link: 'https://www.jnj.com/' },
    location: 'São José dos Campos, São Paulo, Brazil',
    startDate: '2023-07',
    current: true,
    type: 'Full-time',
    description: [
      'Technical Leader and Architect within the Digital & Full Stack LATAM chapter, driving technical strategy, architecture, and innovation across multiple engineering domains.',
      'Core Member of TS LATAM AI & Agentic Automation Workstream, driving the strategic adoption of AI, LLMs, and agentic automation across the organization.',
      'Design intelligent workflows and multi-agent ecosystems for automation, decision-making, and knowledge management.',
      'Active organizer of Communities of Practice (CoPs) to promote technical excellence, standardization, and collaboration across engineering teams.',
      'Architect robust and high-performance systems using TypeScript and Python, with a focus on modularity and scalability.'
    ],
    achievements: [
      'Led AI platform integration connecting enterprise systems with AI pipelines and vector databases',
      'Established Communities of Practice serving 300+ engineers across LATAM',
      'Designed scalable cloud environments using modern IaC practices',
      'Built performant frontend applications with Next.js and React',
      'Implemented comprehensive CI/CD pipelines and observability strategies'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Python', 'AI/LLMs', 'Terraform', 'Kubernetes', 'Azure DevOps', 'AWS', 'Vector Databases']
  },
  {
    id: 'ambev-sre',
    title: 'Site Reliability Engineer',
    company: { name: 'Ambev Tech', link: 'https://www.ambevtech.com.br/' },
    location: 'Remote, Brazil',
    startDate: '2021-02',
    endDate: '2023-07',
    current: false,
    type: 'Full-time',
    description: [
      'Member of the Cloud Transformation Core Team, driving the design and implementation of enterprise-scale cloud architecture through Infrastructure as Code (IaC).',
      'Specialized in Terraform, Terragrunt, Azure DevOps, Kubernetes, and Ansible, leading the modernization of legacy systems toward a cloud-first operating model.',
      'Design and maintain multi-account IaC frameworks, reusable Terraform modules, and CI/CD pipelines to streamline automation and governance.',
      'Focused on enabling a secure, automated, and scalable cloud ecosystem that accelerates delivery and strengthens platform reliability.'
    ],
    achievements: [
      'Standardized infrastructure across global environments ensuring scalability, security, and compliance',
      'Led modernization of legacy systems to cloud-first operating model',
      'Created reusable Terraform modules reducing deployment time by 80%',
      'Established enterprise-scale cloud architecture frameworks',
      'Implemented comprehensive automation and governance processes'
    ],
    technologies: ['Terraform', 'Terragrunt', 'Azure DevOps', 'Kubernetes', 'Ansible', 'Azure', 'CI/CD', 'IaC']
  },
  {
    id: 'quero-sre',
    title: 'Site Reliability Engineer',
    company: { name: 'Quero Educação', link: 'https://sobre.quero.com/' },
    location: 'São José dos Campos, São Paulo, Brazil',
    startDate: '2020-03',
    endDate: '2021-02',
    current: false,
    type: 'Full-time',
    description: [
      'Member of the Global SRE Platform Team, focused on designing and maintaining global and business unit-specific platforms that enable scalability, reliability, and developer efficiency.',
      'Expert in Infrastructure as Code (IaC) with Terraform, Terragrunt, Helm, and AWS CloudFormation, managing multi-account AWS environments and Kubernetes workloads (EKS, ECS, EC2).',
      'Experienced in CI/CD automation (GitLab CI/CD, GitHub Actions, AWS CodePipeline) and observability using Grafana, Prometheus, and CloudWatch.'
    ],
    achievements: [
      'Designed and maintained platforms enabling scalability and reliability',
      'Managed multi-account AWS environments with Kubernetes workloads',
      'Implemented comprehensive observability using Grafana and Prometheus',
      'Automated CI/CD pipelines across multiple platforms',
      'Established IaC best practices with Terraform and Terragrunt'
    ],
    technologies: ['AWS', 'Terraform', 'Terragrunt', 'Kubernetes', 'EKS', 'ECS', 'Helm', 'GitLab CI', 'GitHub Actions', 'Grafana', 'Prometheus', 'CloudWatch']
  },
  {
    id: 'sonda-devops-consultant',
    title: 'DevOps Consultant',
    company: { name: 'Sonda Ativas', link: 'https://www.sonda.com/pt/' },
    location: 'São José dos Campos, São Paulo, Brazil',
    startDate: '2019-09',
    endDate: '2020-03',
    current: false,
    type: 'Full-time',
    description: [
      'Responsible for advancing DevOps culture and automation practices across Embraer (customer) and Sonda (provider), promoting collaboration, efficiency, and technical excellence.',
      'Focused on driving process automation, incident-driven improvements, and tooling optimization using Ansible, Python, Bash, Bitbucket, Bamboo, and Azure DevOps.',
      'Experienced in artifact management (Nexus), code quality (SonarQube), and infrastructure operations on Red Hat and CentOS.'
    ],
    achievements: [
      'Advanced DevOps culture across enterprise environments',
      'Promoted collaboration and technical excellence across teams'
    ],
    technologies: ['Ansible', 'Python', 'Bash', 'Bitbucket', 'Bamboo', 'Azure DevOps', 'Nexus', 'SonarQube', 'Red Hat', 'CentOS']
  },
  {
    id: 'brasil317-software-developer',
    title: 'Software Developer',
    company: { name: 'Brasil 317', link: 'https://www.brasil317.com.br/' }  ,
    location: 'São José dos Campos, São Paulo, Brazil',
    startDate: '2019-04',
    endDate: '2019-09',
    current: false,
    type: 'Full-time',
    description: [
      'Led the design, development, and maintenance of systems consuming Brazilian government bids and public information, ensuring scalability, security, and compliance.',
      'Hands-on experience across a diverse tech stack, including Node.js, Python, Redis, MongoDB, MySQL, and Serverless architectures.',
      'Implemented CI/CD pipelines with GitHub, GitLab, and AWS Developer Tools, and managed containerization through Docker, ECS, and ECR.',
      'Focused on delivering reliable, high-performance backend services and automation workflows that streamline access to public data.'
    ],
    achievements: [
      'Built government-integrated platforms handling millions of public records',
      'Implemented scalable serverless architectures on AWS',
      'Delivered high-performance backend services with 99.5% uptime',
      'Established CI/CD pipelines reducing deployment time by 70%',
      'Ensured compliance with government data security requirements'
    ],
    technologies: ['Node.js', 'Python', 'Redis', 'MongoDB', 'MySQL', 'AWS', 'Docker', 'ECS', 'ECR', 'GitHub', 'GitLab', 'Serverless']
  },
  {
    id: 'embraer-it-assistant',
    title: 'Information Technology Assistant',
    company: { name: 'Embraer', link: 'https://www.embraer.com/' },
    location: 'São José dos Campos, São Paulo, Brazil',
    startDate: '2017-03',
    endDate: '2019-04',
    current: false,
    type: 'Full-time',
    description: [
      'Responsible for designing, implementing, and supporting application infrastructure spanning on-premises and cloud environments.',
      'Experienced with Kubernetes, Ansible, Consul, Packer, SonarQube, Nexus, and Bamboo, driving DevOps and ALM best practices as part of the Center of Excellence.',
      'Skilled in deploying and managing cloud solutions on AWS, Heroku, and Firebase to ensure scalability, availability, and reliability.',
      'Background in enterprise middleware and data platforms, including Oracle SOA Suite, Oracle Service Bus, SAP PI, and Pentaho.'
    ],
    achievements: [
      'Designed enterprise infrastructure spanning on-premises and cloud environments',
      'Implemented DevOps and ALM best practices as part of Center of Excellence',
      'Managed mission-critical middleware platforms ensuring 99.9% uptime',
      'Deployed scalable cloud solutions across multiple platforms',
      'Established automation pipelines for enterprise applications'
    ],
    technologies: ['Kubernetes', 'Ansible', 'Consul', 'Packer', 'SonarQube', 'Nexus', 'Bamboo', 'AWS', 'Heroku', 'Firebase', 'Oracle SOA Suite', 'Oracle Service Bus', 'SAP PI', 'Pentaho']
  },
  {
    id: 'embraer-intern',
    title: 'Intern',
    company: { name: 'Embraer', link: 'https://www.embraer.com/' },
    location: 'São José dos Campos, São Paulo, Brazil',
    startDate: '2016-04',
    endDate: '2017-03',
    current: false,
    type: 'Internship',
    description: [
      'Supported SOA projects within the Supply Chain Business Unit, focusing on the design and implementation of integrations using Oracle Fusion Middleware.',
      'Gained hands-on experience connecting diverse systems and protocols to enhance interoperability and process efficiency.',
      'Developed integrations across SAP, Salesforce, SuccessFactors, ADP, E2Open, and other enterprise and legacy systems using protocols such as SOAP, REST, JMS, FTP, IDOC, and RFC.',
      'Contributed to streamlining Supply Chain operations by enabling seamless data exchange and system connectivity across global platforms.'
    ],
    achievements: [
      'Designed and implemented SOA integrations for Supply Chain operations',
      'Connected diverse enterprise systems improving interoperability',
      'Streamlined global supply chain processes through system integration',
      'Developed expertise in multiple integration protocols and platforms',
      'Enhanced process efficiency across international operations'
    ],
    technologies: ['Oracle Fusion Middleware', 'SAP', 'Salesforce', 'SuccessFactors', 'ADP', 'E2Open', 'SOAP', 'REST', 'JMS', 'FTP', 'IDOC', 'RFC']
  },
  {
    id: 'acs-support-analyst',
    title: 'Support Analyst',
    company: { name: 'ACS Info', link: null },
    location: 'Jacareí, Brazil',
    startDate: '2015-04',
    endDate: '2015-11',
    current: false,
    type: 'Full-time',
    description: [
      'Provided technical support and ensured seamless product integration for clients across the USA.',
      'Worked with a broad technology stack including AWS, Windows Server, SQL Server, PowerShell maintain high-performing systems.',
    ],
    achievements: [
      'Delivered comprehensive Infor/Lawson solutions for US clients',
      'Maintained high-performing systems across diverse technology stack',
      'Ensured seamless product integration and client satisfaction'
    ],
    technologies: ['Infor/Lawson', 'AWS', 'Windows Server', 'SQL Server', 'PowerShell', 'Adobe Creative Suite']
  }
]

export const getCurrentExperience = (): Experience | undefined => {
  return experiences.find(exp => exp.current)
}

export const getExperienceByCompany = (company: string): Experience[] => {
  return experiences.filter(exp => exp.company.name.toLowerCase().includes(company.toLowerCase()))
}

export const getAllExperiences = (): Experience[] => {
  return experiences.sort((a, b) => {
    const aDate = a.current ? new Date() : new Date(a.endDate || a.startDate)
    const bDate = b.current ? new Date() : new Date(b.endDate || b.startDate)
    return bDate.getTime() - aDate.getTime()
  })
}

export const getExperienceYears = (): number => {
  const firstJob = experiences[experiences.length - 1]
  const startYear = new Date(firstJob.startDate).getFullYear()
  const currentYear = new Date().getFullYear()
  return currentYear - startYear
}