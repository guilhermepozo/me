export interface Tool {
  name: string
  description: string
  url?: string
  category: 'Development' | 'Design' | 'Productivity' | 'Hardware' | 'Software' | 'DevOps' | 'AI/ML'
  price?: 'Free' | 'Paid' | 'Freemium'
  recommendation: 1 | 2 | 3 | 4 | 5
}

export interface UsesCategory {
  title: string
  description: string
  tools: Tool[]
}

export const usesData: UsesCategory[] = [
  {
    title: 'Development',
    description: 'My daily development environment and tools that help me build better software.',
    tools: [
      {
        name: 'Visual Studio Code',
        description: 'My primary code editor. Extensions: GitLens, Prettier, ESLint, Terraform, Docker.',
        url: 'https://code.visualstudio.com/',
        category: 'Development',
        price: 'Free',
        recommendation: 5
      },
      {
        name: 'iTerm2 + Oh My Zsh',
        description: 'Terminal with custom theme, auto-completion, and plugins for better productivity.',
        url: 'https://iterm2.com/',
        category: 'Development',
        price: 'Free',
        recommendation: 5
      },
      {
        name: 'GitHub Copilot',
        description: 'AI pair programmer that significantly speeds up coding. Especially useful for boilerplate and repetitive tasks.',
        url: 'https://github.com/features/copilot',
        category: 'AI/ML',
        price: 'Paid',
        recommendation: 4
      },
      {
        name: 'Docker Desktop',
        description: 'Essential for containerized development and maintaining consistent environments across teams.',
        url: 'https://www.docker.com/products/docker-desktop/',
        category: 'Development',
        price: 'Freemium',
        recommendation: 5
      },
      {
        name: 'Postman',
        description: 'API development and testing. Great for documenting and sharing API collections with the team.',
        url: 'https://www.postman.com/',
        category: 'Development',
        price: 'Freemium',
        recommendation: 4
      }
    ]
  },
  {
    title: 'DevOps & Cloud',
    description: 'Tools for infrastructure management, deployment, and cloud operations.',
    tools: [
      {
        name: 'Terraform',
        description: 'Infrastructure as Code tool. I use it daily for managing cloud resources across AWS and Azure.',
        url: 'https://www.terraform.io/',
        category: 'DevOps',
        price: 'Free',
        recommendation: 5
      },
      {
        name: 'AWS CLI & Azure CLI',
        description: 'Command-line interfaces for cloud management. Essential for automation and scripting.',
        category: 'DevOps',
        price: 'Free',
        recommendation: 5
      },
      {
        name: 'Kubernetes (kubectl)',
        description: 'Container orchestration. I manage multiple production clusters across different environments.',
        url: 'https://kubernetes.io/',
        category: 'DevOps',
        price: 'Free',
        recommendation: 5
      },
      {
        name: 'Ansible',
        description: 'Configuration management and automation. Great for managing server configurations at scale.',
        url: 'https://www.ansible.com/',
        category: 'DevOps',
        price: 'Free',
        recommendation: 4
      },
      {
        name: 'Grafana + Prometheus',
        description: 'Monitoring and observability stack. Essential for understanding system behavior in production.',
        url: 'https://grafana.com/',
        category: 'DevOps',
        price: 'Freemium',
        recommendation: 5
      }
    ]
  },
  {
    title: 'AI & Automation',
    description: 'Tools and platforms for building AI-powered solutions and automation.',
    tools: [
      {
        name: 'Langflow',
        description: 'Low-code platform for building AI applications. I use it for rapid prototyping of LLM workflows.',
        url: 'https://langflow.org/',
        category: 'AI/ML',
        price: 'Free',
        recommendation: 5
      },
      {
        name: 'OpenAI API',
        description: 'GPT models for various automation tasks. From code generation to documentation.',
        url: 'https://openai.com/api/',
        category: 'AI/ML',
        price: 'Paid',
        recommendation: 4
      },
      {
        name: 'Anthropic Claude',
        description: 'AI assistant for complex reasoning tasks, code review, and technical writing.',
        url: 'https://claude.ai/',
        category: 'AI/ML',
        price: 'Freemium',
        recommendation: 5
      },
      {
        name: 'GitHub Actions',
        description: 'CI/CD automation. I build complex workflows for testing, building, and deploying applications.',
        url: 'https://github.com/features/actions',
        category: 'DevOps',
        price: 'Freemium',
        recommendation: 5
      }
    ]
  },
  {
    title: 'Productivity',
    description: 'Apps and tools that help me stay organized and productive.',
    tools: [
      {
        name: 'Notion',
        description: 'All-in-one workspace for notes, documentation, project management, and knowledge base.',
        url: 'https://notion.so/',
        category: 'Productivity',
        price: 'Freemium',
        recommendation: 5
      },
      {
        name: 'Linear',
        description: 'Issue tracking and project management. Clean interface and great for engineering teams.',
        url: 'https://linear.app/',
        category: 'Productivity',
        price: 'Paid',
        recommendation: 4
      },
      {
        name: 'Raycast',
        description: 'Productivity tool that replaces Spotlight. Extensions for GitHub, Linear, and custom scripts.',
        url: 'https://raycast.com/',
        category: 'Productivity',
        price: 'Freemium',
        recommendation: 5
      },
      {
        name: 'Obsidian',
        description: 'Knowledge management with linked notes. Great for technical learning and documentation.',
        url: 'https://obsidian.md/',
        category: 'Productivity',
        price: 'Freemium',
        recommendation: 4
      },
      {
        name: 'Slack',
        description: 'Team communication. Integrated with GitHub, Linear, and monitoring alerts.',
        url: 'https://slack.com/',
        category: 'Productivity',
        price: 'Freemium',
        recommendation: 4
      }
    ]
  },
  {
    title: 'Hardware',
    description: 'My current setup for development and productivity.',
    tools: [
      {
        name: 'MacBook Pro M2',
        description: '16-inch with 32GB RAM. Perfect for running multiple Docker containers and VMs simultaneously.',
        category: 'Hardware',
        recommendation: 5
      },
      {
        name: 'LG UltraWide Monitor',
        description: '34-inch curved monitor. Great for having multiple code windows and terminal sessions open.',
        category: 'Hardware',
        recommendation: 4
      },
      {
        name: 'Mechanical Keyboard',
        description: 'Custom mechanical keyboard with Cherry MX switches. Makes long coding sessions more comfortable.',
        category: 'Hardware',
        recommendation: 4
      },
      {
        name: 'AirPods Pro',
        description: 'Noise cancellation is essential for focus during calls and deep work sessions.',
        url: 'https://apple.com/airpods-pro/',
        category: 'Hardware',
        recommendation: 4
      },
      {
        name: 'Standing Desk',
        description: 'Adjustable height desk. Switching between sitting and standing helps with energy and health.',
        category: 'Hardware',
        recommendation: 5
      }
    ]
  },
  {
    title: 'Design & Collaboration',
    description: 'Tools for design, wireframing, and team collaboration.',
    tools: [
      {
        name: 'Figma',
        description: 'Design and prototyping. I use it for creating system architecture diagrams and UI mockups.',
        url: 'https://figma.com/',
        category: 'Design',
        price: 'Freemium',
        recommendation: 5
      },
      {
        name: 'Excalidraw',
        description: 'Quick sketching and diagramming. Perfect for brainstorming and explaining concepts.',
        url: 'https://excalidraw.com/',
        category: 'Design',
        price: 'Free',
        recommendation: 5
      },
      {
        name: 'Miro',
        description: 'Collaborative whiteboarding. Great for remote team workshops and system design sessions.',
        url: 'https://miro.com/',
        category: 'Design',
        price: 'Freemium',
        recommendation: 4
      },
      {
        name: 'Zoom',
        description: 'Video conferencing for team meetings, client calls, and technical presentations.',
        url: 'https://zoom.us/',
        category: 'Productivity',
        price: 'Freemium',
        recommendation: 4
      }
    ]
  }
]

export const getFeaturedTools = (): Tool[] => {
  return usesData
    .flatMap(category => category.tools)
    .filter(tool => tool.recommendation === 5)
    .slice(0, 6)
}

export const getToolsByCategory = (category: Tool['category']): Tool[] => {
  return usesData
    .flatMap(cat => cat.tools)
    .filter(tool => tool.category === category)
}

export const getAllCategories = (): UsesCategory[] => {
  return usesData
}