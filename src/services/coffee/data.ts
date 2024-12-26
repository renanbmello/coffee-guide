import { CoffeeCategory, CategoryInfo, SubCategory, Recipe } from '@/types/coffee'

interface CoffeeData {
  categories: Record<CoffeeCategory, CategoryInfo>
  subCategories: Record<CoffeeCategory, SubCategory[]>
  recipes: Record<string, Record<string, Recipe>>
}

export const categoryData: CoffeeData = {
  categories: {
    'espresso': {
      id: 'espresso',
      name: 'Espresso',
      description: 'Café concentrado extraído sob pressão, base para diversas bebidas.',
      imageUrl: '/images/espresso.jpeg'
    },
    'pour over': {
      id: 'pour over',
      name: 'Café Coado',
      description: 'Método manual que ressalta as características sutis do café.',
      imageUrl: '/images/coffee/pour-over/header.jpg'
    }
  },
  subCategories: {
    'espresso': [
      {
        id: 'traditional',
        name: 'Espresso Tradicional',
        imageUrl: '/images/espresso.jpeg'
      },
      {
        id: 'ristretto',
        name: 'Ristretto',
        imageUrl: '/images/coffee/espresso/ristretto.jpg'
      },
      {
        id: 'lungo',
        name: 'Lungo',
        imageUrl: '/images/coffee/espresso/lungo.jpg'
      }
    ],
    'pour over': [
      {
        id: 'v60',
        name: 'Hario V60',
        imageUrl: '/images/coffee/pour-over/v60.jpg'
      },
      {
        id: 'chemex',
        name: 'Chemex',
        imageUrl: '/images/coffee/pour-over/chemex.jpg'
      }
    ]
  },
  recipes: {
    'espresso': {
      'traditional': {
        id: 'traditional',
        name: 'Espresso Tradicional',
        description: 'O clássico café espresso italiano, extraído em 25-30 segundos.',
        imageUrl: '/images/coffee/espresso/traditional.jpg',
        ratio: 2,
        defaultDose: 18,
        tools: [
          {
            id: 'grinder',
            name: 'Moedor',
            description: 'Para moer os grãos na hora com a granulometria adequada',
            imageUrl: '/images/tools/grinder.jpg'
          },
          {
            id: 'wdt',
            name: 'WDT',
            description: 'Ferramenta para distribuição uniforme do café',
            imageUrl: '/images/tools/wdt.jpg'
          },
          {
            id: 'tamper',
            name: 'Tamper',
            description: 'Para compactar o café moído uniformemente',
            imageUrl: '/images/tools/tamper.jpg'
          }
        ],
        steps: [
          {
            id: 1,
            instruction: 'Moa 18g de café com granulometria fina',
            tip: 'A granulometria deve ser similar à do açúcar refinado'
          },
          {
            id: 2,
            instruction: 'Distribua o café uniformemente no porta-filtro usando o WDT',
            tip: 'Movimentos suaves e circulares garantem uma distribuição homogênea'
          },
          {
            id: 3,
            instruction: 'Tampe o café com pressão constante',
            tip: 'Use aproximadamente 15kg de pressão'
          },
          {
            id: 4,
            instruction: 'Extraia aproximadamente 36g de café em 25-30 segundos',
            tip: 'O tempo começa a contar quando você liga a bomba'
          }
        ]
      },
      // ... outras receitas do espresso
    },
    'pour over': {
      // ... receitas do pour over
    }
  }
} 