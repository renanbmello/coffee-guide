interface FooterLinksProps {
  title: string
  links: {
    label: string
    href: string
  }[]
}

export const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-white text-lg font-semibold">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm hover:text-white transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
} 