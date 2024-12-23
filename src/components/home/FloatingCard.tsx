export const FloatingCard = () => {
  return (
    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl max-w-[200px]">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 bg-coffee-400 rounded-full flex items-center justify-center">
          <span className="text-white text-lg">☕</span>
        </div>
        <span className="font-semibold text-coffee-800">Dica do Dia</span>
      </div>
      <p className="text-coffee-600 text-sm">
        A temperatura ideal para extrair café é entre 92°C e 96°C
      </p>
    </div>
  )
} 