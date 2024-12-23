import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'

export const SocialLinks = () => {
  const socialLinks = [
    { 
      name: 'Linkedin', 
      href: 'https://www.linkedin.com/in/renanbmello/', 
      icon: <FaLinkedin className="w-6 h-6" /> 
    },
    { 
      name: 'Github', 
      href: 'https://github.com/renanbmello', 
      icon: <FaGithub className="w-6 h-6" /> 
    },
    { 
      name: 'Portfolio', 
      href: 'https://renanmello.dev', 
      icon: <CgWebsite className="w-6 h-6" /> 
    },
  ]

  return (
    <div className="flex justify-center gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          className="text-coffee-100 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visite meu ${social.name}`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
} 