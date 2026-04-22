import heroImg from '../assets/hero.png'

export type Project = {
  name: string
  description: string
  techStack: string[]
  href: string
  imageSrc: string
  imageAlt?: string
}

// Replace with your real projects; keep `href` clickable per PRD.
export const projects: Project[] = [
  {
    name: 'Portfolio Site',
    description: 'A clean, dark personal site with smooth scrolling and project cards.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    href: 'https://example.com',
    imageSrc: heroImg,
    imageAlt: 'Portfolio project screenshot',
  },
]
