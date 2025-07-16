import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  link: string
  tags: string[]
}

export default function ProjectCard({ title, description, link, tags }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-tech">
        {tags.map((tag, index) => (
          <span key={index} className="tech-tag">{tag}</span>
        ))}
      </div>
      <Link href={link} className="project-link" target="_blank">
        View Project
      </Link>
    </div>
  )
}