import { SocialLinks } from './SocialLinks'
import { FooterLinks } from './FooterLinks'
import { Copyright } from './Copyright'

export const Footer = () => {
  return (
    <footer className="bg-coffee-900 text-coffee-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Sobre o Guia do Café</h3>
            <p className="text-sm leading-relaxed">
              Compartilhando conhecimento e paixão pelo café, ajudando você a preparar a xícara perfeita todos os dias.
            </p>
            <SocialLinks />
          </div>

          <div className="flex flex-col items-center">
            <FooterLinks
              title="Links Rápidos"
              links={[
                { label: 'Contato', href: '/contato' },
              ]}
            />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-coffee-800 text-center text-sm">
          <Copyright />
        </div>
      </div>
    </footer>
  )
} 