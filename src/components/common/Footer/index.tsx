import { SocialLinks } from './SocialLinks'
import { FooterLinks } from './FooterLinks'
import { Copyright } from './Copyright'

const quickLinks = [
  { label: 'Início', href: '/' },
]

const methodLinks = [
  { label: 'Espresso', href: '/coffee/espresso' },
  { label: 'Café Coado', href: '/coffee/pour-over' },
]

export const Footer = () => {
  return (
    <footer className="bg-coffee-900 text-coffee-100 w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Sobre o Guia do Café</h3>
            <p className="text-sm leading-relaxed">
              Compartilhando conhecimento e paixão pelo café, ajudando você a preparar a xícara perfeita todos os dias.
            </p>
            <SocialLinks />
          </div>

          <div>
            <FooterLinks
              title="Links Rápidos"
              links={quickLinks}
            />
          </div>

          <div>
            <FooterLinks
              title="Métodos"
              links={methodLinks}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Contato</h3>
            <p className="text-sm">
              Tem alguma dúvida ou sugestão? Entre em contato conosco.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-coffee-800 text-center text-sm max-w-5xl mx-auto">
          <Copyright />
        </div>
      </div>
    </footer>
  )
} 