'use client'

import { useEffect, useState } from 'react'

export const Copyright = () => {
  const [year, setYear] = useState<number>()
  
  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  if (!year) return null

  return (
    <p>© {year} Guia do Café. Todos os direitos reservados.</p>
  )
} 