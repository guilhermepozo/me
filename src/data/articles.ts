export interface Article {
  id: string
  title: string
  description: string
  content: string
  publishedAt: string
  readTime: number
  tags: string[]
  category: 'Technical' | 'Leadership' | 'DevOps' | 'AI/ML' | 'Career'
  featured: boolean
  slug: string
}

export const articles: Article[] = [
  {
    id: 'introduction-to-blockchain',
    slug: 'introduction-to-blockchain',
    title: 'Introduction to Blockchain',
    description: 'A comprehensive introduction to Blockchain technology, exploring fundamental concepts like transactions and distributed ledgers, and the three pillars of immutability, traceability, and transparency that make this technology so disruptive.',
    content: ``,
    publishedAt: '2019-08-27',
    readTime: 11,
    tags: ['Blockchain', 'Bitcoin', 'Cryptocurrency', 'P2P', 'Distributed Systems', 'Web3'],
    category: 'Technical',
    featured: true
  },
  {
    id: 'architectural-decision-analytics-platform',
    slug: 'architectural-decision-analytics-platform',
    title: 'Architectural Decision of Analytics Platform',
    description: 'Exploring the challenges and trade-offs when choosing the right architecture for a real-time analytics platform, considering cost, scalability, and operational complexity.',
    content: ``,
    publishedAt: '2021-02-23',
    readTime: 6,
    tags: ['Architecture', 'Analytics', 'AWS', 'Kafka', 'Data Engineering', 'Cost Optimization'],
    category: 'Technical',
    featured: true
  },
  {
    id: 'gaming-blog-career-foundation',
    slug: 'gaming-blog-career-foundation',
    title: 'How a 15-Year-Old\'s Gaming Blog Became the Foundation of My Career',
    description: 'The story of Viciados GC, a gaming blog I created as a teenager that sparked my passion for technology, digital content creation, and community building, ultimately shaping my career in software engineering.',
    content: ``,
    publishedAt: '2025-10-15',
    readTime: 5,
    tags: ['Career', 'Personal', 'Gaming', 'Community', 'Content Creation'],
    category: 'Career',
    featured: true
  },
  {
    id: 'building-resilient-cloud-infrastructure',
    slug: 'building-resilient-cloud-infrastructure',
    title: 'Building Resilient Cloud Infrastructure: Lessons from Enterprise Scale',
    description: 'Key principles and patterns for designing cloud infrastructure that can handle enterprise-scale loads while maintaining high availability and performance.',
    content: '',
    publishedAt: '2024-03-15',
    readTime: 8,
    tags: ['Cloud', 'Infrastructure', 'DevOps', 'Terraform', 'AWS'],
    category: 'Technical',
    featured: false
  },
  {
    id: 'ai-in-software-development',
    slug: 'ai-in-software-development',
    title: 'AI in Software Development: Beyond Code Generation',
    description: 'Exploring how AI and autonomous agents are transforming the entire software development lifecycle, from planning to deployment.',
    content: ``,
    publishedAt: '2024-02-28',
    readTime: 10,
    tags: ['AI', 'Machine Learning', 'Development', 'Automation', 'Langflow'],
    category: 'AI/ML',
    featured: false
  },
  {
    id: 'scaling-engineering-teams',
    slug: 'scaling-engineering-teams',
    title: 'Scaling Engineering Teams: From Startup to Enterprise',
    description: 'Practical strategies for growing engineering organizations while maintaining velocity, quality, and team culture.',
    content: ``,
    publishedAt: '2024-01-20',
    readTime: 12,
    tags: ['Leadership', 'Team Building', 'Organization', 'Management', 'Culture'],
    category: 'Leadership',
    featured: false
  },
  {
    id: 'kubernetes-production-lessons',
    slug: 'kubernetes-production-lessons',
    title: 'Kubernetes in Production: Hard-Won Lessons',
    description: 'Real-world experiences running Kubernetes at scale, including the mistakes we made and how to avoid them.',
    content: ``,
    publishedAt: '2023-12-10',
    readTime: 15,
    tags: ['Kubernetes', 'DevOps', 'Infrastructure', 'Production', 'Lessons Learned'],
    category: 'DevOps',
    featured: false
  }
]

export const getFeaturedArticles = (): Article[] => {
  return articles
    .filter(article => article.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3)
}

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug)
}

export const getArticlesByCategory = (category: Article['category']): Article[] => {
  return articles.filter(article => article.category === category)
}

export const getAllArticles = (): Article[] => {
  return articles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}