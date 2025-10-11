import Link from "next/link"
import { ArrowUpRight, Calendar, TrendingUp } from "lucide-react"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const getCategoryColor = (category: Project['category']) => {
    switch (category) {
      case 'Infrastructure': return 'cyan'
      case 'Frontend': return 'pink'
      case 'Backend': return 'purple'
      case 'DevOps': return 'green'
      case 'AI/ML': return 'orange'
      default: return 'muted'
    }
  }

  const categoryColor = getCategoryColor(project.category)

  if (featured) {
    return (
      <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover-lift animate-fade-up">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className={`px-2 py-1 bg-${categoryColor}/10 text-${categoryColor} rounded-full text-xs font-medium`}>
                {project.category}
              </span>
              <span className={`px-2 py-1 bg-green/10 text-green rounded-full text-xs`}>
                {project.status}
              </span>
            </div>
            <ArrowUpRight className={`w-5 h-5 text-muted group-hover:text-${categoryColor} transition-colors`} />
          </div>

          <h3 className={`text-xl font-semibold text-foreground group-hover:text-${categoryColor} transition-colors mb-3`}>
            {project.title}
          </h3>

          <p className="text-comment text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-4 h-4 text-muted" />
            <span className="text-xs text-muted">{project.timeline}</span>
          </div>

          {project.metrics && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              {project.metrics.slice(0, 2).map((metric, index) => (
                <div key={index} className="text-center">
                  <div className={`text-lg font-semibold text-${categoryColor}`}>
                    {metric.value}
                  </div>
                  <div className="text-xs text-muted">{metric.label}</div>
                  {metric.improvement && (
                    <div className="text-xs text-green flex items-center justify-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {metric.improvement}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span key={index} className="text-xs text-muted">
                {tech}{index < Math.min(project.technologies.length, 4) - 1 && <span className="mx-1">•</span>}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-xs text-muted">+{project.technologies.length - 4} more</span>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block p-6 border border-border rounded-lg hover-lift animate-fade-up"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 bg-${categoryColor}/10 text-${categoryColor} rounded-full text-xs`}>
            {project.category}
          </span>
        </div>
        <ArrowUpRight className={`w-5 h-5 text-muted group-hover:text-${categoryColor} transition-colors`} />
      </div>

      <h3 className={`text-xl font-semibold text-foreground group-hover:text-${categoryColor} transition-colors mb-3`}>
        {project.title}
      </h3>

      <p className="text-comment text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.slice(0, 3).map((tech, index) => (
          <span key={index} className="text-xs text-muted">
            {tech}{index < Math.min(project.technologies.length, 3) - 1 && <span className="mx-1">•</span>}
          </span>
        ))}
      </div>
    </Link>
  )
}