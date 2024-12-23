export const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <a 
        href="#metodos"
        className="inline-block px-8 py-4 bg-coffee-100 text-coffee-800 font-semibold rounded-lg hover:bg-coffee-50 transition-colors text-center"
      >
        Explorar Métodos
      </a>
      <a 
        href="#receitas"
        className="inline-block px-8 py-4 bg-transparent border-2 border-coffee-100 text-coffee-50 font-semibold rounded-lg hover:bg-coffee-100/10 transition-colors text-center"
      >
        Ver Receitas
      </a>
    </div>
  )
} 