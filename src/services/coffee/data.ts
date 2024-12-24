import { CoffeeCategory, CategoryInfo, SubCategory } from '@/types/coffee'

interface CoffeeData {
  categories: Record<CoffeeCategory, CategoryInfo>
  subCategories: Record<CoffeeCategory, SubCategory[]>
}

export const categoryData: CoffeeData = {
  categories: {
    'espresso': {
      id: 'espresso',
      name: 'Espresso',
      description: 'Café concentrado extraído sob alta pressão, base para diversas bebidas.',
      imageUrl: '/images/coffee/espresso/header.jpg'
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
        imageUrl: '/images/coffee/espresso/traditional.jpg'
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
  }
} 