import usbImg from '../assets/usb.png'

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
    name: 'USBCounter',
    description: 'USB计数器，用于自定义按键的计数',
    techStack: ['Java'],
    href: 'https://github.com/hiqanupeyi82-source/usbcounter',
    imageSrc: usbImg,
    imageAlt: 'Portfolio project screenshot',
  },
]
