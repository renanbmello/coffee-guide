const stats = [
  { number: '50+', label: 'Receitas' },
  { number: '10+', label: 'Métodos' },
  { number: '100+', label: 'Dicas' },
  { number: '1000+', label: 'Cafés Felizes' },
] as const

export const StatsSection = () => {
  return (
    <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center text-white">
          <div className="text-3xl md:text-4xl font-bold">{stat.number}</div>
          <div className="text-coffee-100 mt-2">{stat.label}</div>
        </div>
      ))}
    </div>
  )
} 