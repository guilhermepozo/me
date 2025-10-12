import Link from "next/link"
import { useState } from "react"
import { ArrowUpRight, Calendar, TrendingUp, Trophy, Users, Target, ChevronDown, ChevronUp, ExternalLink, Github, Globe, FileText, Lightbulb, Zap, CheckCircle, AlertTriangle, BookOpen } from "lucide-react"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const getCategoryColor = (category: Project['category']) => {
    switch (category) {
      case 'Infrastructure': return 'cyan'
      case 'Frontend': return 'pink'
      case 'Backend': return 'purple'
      case 'DevOps': return 'green'
      case 'AI/ML': return 'orange'
      case 'Entrepreneurship': return 'amber'
      default: return 'muted'
    }
  }

  const getCategoryIcon = (category: Project['category']) => {
    switch (category) {
      case 'Entrepreneurship': return Trophy
      case 'AI/ML': return Zap
      case 'DevOps': return Target
      default: return Calendar
    }
  }

  const getLinkIcon = (type: 'github' | 'demo' | 'case-study' | 'article') => {
    switch (type) {
      case 'github': return Github
      case 'demo': return Globe
      case 'case-study': return FileText
      case 'article': return ExternalLink
      default: return ExternalLink
    }
  }

  const categoryColor = getCategoryColor(project.category)
  const CategoryIcon = getCategoryIcon(project.category)

  if (featured) {
    return (
      <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover-lift animate-fade-up">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1.5 bg-${categoryColor}-50 text-${categoryColor}-700 dark:bg-${categoryColor}-950 dark:text-${categoryColor}-300 rounded-full text-xs font-medium flex items-center gap-1.5`}>
                <CategoryIcon className="w-3 h-3" />
                {project.category}
              </span>
              <span className={`px-2 py-1 bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 rounded-full text-xs`}>
                {project.status}
              </span>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`w-8 h-8 rounded-full bg-${categoryColor}-50 text-${categoryColor}-700 hover:bg-${categoryColor}-100 dark:bg-${categoryColor}-950 dark:text-${categoryColor}-300 dark:hover:bg-${categoryColor}-900 transition-colors flex items-center justify-center`}
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Title and Description */}
          <h3 className="text-xl font-semibold text-foreground group-hover:text-green transition-colors mb-3">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {isExpanded ? project.longDescription : project.description}
          </p>

          {/* Timeline */}
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{project.timeline}</span>
          </div>

          {/* Metrics Grid */}
          {project.metrics && (
            <div className="grid grid-cols-2 gap-4 mb-6">
              {(isExpanded ? project.metrics : project.metrics.slice(0, 2)).map((metric, index) => (
                <div key={index} className="text-center p-3 rounded-lg bg-background/50">
                  <div className={`text-lg font-semibold text-${categoryColor}-500 mb-1`}>
                    {metric.value}
                  </div>
                  <div className="text-xs text-muted-foreground mb-1">{metric.label}</div>
                  {metric.improvement && (
                    <div className="text-xs text-emerald-600 flex items-center justify-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {metric.improvement}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Technologies */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {(isExpanded ? project.technologies : project.technologies.slice(0, 4)).map((tech, index) => (
                <span key={index} className="text-xs bg-background/50 text-foreground px-2 py-1 rounded border">
                  {tech}
                </span>
              ))}
              {!isExpanded && project.technologies.length > 4 && (
                <span className="text-xs text-muted-foreground px-2 py-1">+{project.technologies.length - 4} more</span>
              )}
            </div>
          </div>

          {/* Expanded Content */}
          {isExpanded && (
            <div className="space-y-6 animate-fade-up">
              {/* Key Outcomes */}
              {project.outcomes && project.outcomes.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Key Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, index) => (
                      <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-1.5 flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Lightbulb className={`w-4 h-4 text-${categoryColor}-500`} />
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 bg-${categoryColor}-500 rounded-full mt-1.5 flex-shrink-0`} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-500" />
                    Challenges
                  </h4>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Learnings */}
              {project.learnings && project.learnings.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-500" />
                    Key Learnings
                  </h4>
                  <ul className="space-y-2">
                    {project.learnings.map((learning, index) => (
                      <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                        {learning}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Links */}
              {project.links && project.links.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Links</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link, index) => {
                      const LinkIcon = getLinkIcon(link.type)
                      return (
                        <Link
                          key={index}
                          href={link.url}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-${categoryColor}-50 text-${categoryColor}-700 hover:bg-${categoryColor}-100 dark:bg-${categoryColor}-950 dark:text-${categoryColor}-300 dark:hover:bg-${categoryColor}-900 rounded text-xs transition-colors`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LinkIcon className="w-3 h-3" />
                          {link.label}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block p-6 border border-border rounded-lg hover-lift animate-fade-up transition-all duration-300 hover:border-green"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1.5 bg-${categoryColor}-50 text-${categoryColor}-700 dark:bg-${categoryColor}-950 dark:text-${categoryColor}-300 rounded-full text-xs font-medium flex items-center gap-1.5`}>
            <CategoryIcon className="w-3 h-3" />
            {project.category}
          </span>
          <span className={`px-2 py-1 bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 rounded-full text-xs`}>
            {project.status}
          </span>
        </div>
        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-green transition-colors" />
      </div>

      <h3 className="text-xl font-semibold text-foreground group-hover:text-green transition-colors mb-3">
        {project.title}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Timeline */}
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-4 h-4 text-muted-foreground" />
        <span className="text-xs text-muted-foreground">{project.timeline}</span>
      </div>

      {/* Quick Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="grid grid-cols-2 gap-3 mb-4">
          {project.metrics.slice(0, 2).map((metric, index) => (
            <div key={index} className="text-center p-2 rounded bg-background/30">
              <div className={`text-sm font-semibold text-${categoryColor}-500`}>
                {metric.value}
              </div>
              <div className="text-xs text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-3">
        {project.technologies.slice(0, 3).map((tech, index) => (
          <span key={index} className="text-xs bg-background/50 text-foreground px-2 py-1 rounded border">
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="text-xs text-muted-foreground px-2 py-1">+{project.technologies.length - 3} more</span>
        )}
      </div>

      {/* Quick outcomes preview */}
      {project.outcomes && project.outcomes.length > 0 && (
        <div className="border-t border-border/50 pt-3 mt-3">
          <div className="text-xs text-muted-foreground mb-2">Key Achievement:</div>
          <div className="text-xs text-muted-foreground flex items-start gap-2">
            <CheckCircle className="w-3 h-3 text-emerald-600 mt-0.5 flex-shrink-0" />
            {project.outcomes[0]}
          </div>
        </div>
      )}
    </Link>
  )
}