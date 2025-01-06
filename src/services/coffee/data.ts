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
      imageUrl: '/images/espresso.jpg'
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
        imageUrl: '/images/espresso/tradicional.png'
      },
      {
        id: 'ristretto',
        name: 'Ristretto',
        imageUrl: '/images/espresso/ristretto.png'
      },
      {
        id: 'lungo',
        name: 'Lungo',
        imageUrl: '/images/espresso/lungo.png'
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
        imageUrl: '/images/espresso/tradicional.png',
        ratio: 2,
        defaultDose: 18,
        tools: [
          {
            id: 'scale',
            name: 'Balança',
            description: 'Para medir a quantidade de café',
            imageUrl: '/images/tools/scale.png'
          },	
          {
            id: 'grinder',
            name: 'Moedor',
            description: 'Para moer os grãos na hora com a granulometria adequada',
            imageUrl: '/images/tools/grinder.png'
          },
          {
            id: 'wdt',
            name: 'WDT',
            description: 'Ferramenta para distribuição uniforme do café',
            imageUrl: '/images/tools/wdt.png'
          },
          {
            id: 'distribuidor',
            name: 'Distribuidor',
            description: 'Para distribuir o café uniformemente',
            imageUrl: '/images/tools/distribuidor.png'
          },
          {
            id: 'tamper',
            name: 'Tamper',
            description: 'Para compactar o café moído uniformemente',
            imageUrl: '/images/tools/tamper.png'
          }
        ],
        steps: [
          {
            id: 1,
            instruction: `Moa 18g de café com granulometria fina, não se prenda aos 18g, é apenas uma referência.
             Se você usar um filtro simples(menor), você pode usar uma quantidade menor de café.
             Existem uma infinidade de tipos de moedores, mas o ideal é que você use um que seja fácil de ajustar a granulometria sendo eletrico ou manual.`,
            tip: 'A granulometria deve ser similar à do açúcar refinado'
          },
          {
            id: 2,
            instruction: `Não é estritamente necessário, mas tente distribuir o café uniformemente no porta-filtro. 
            WDT ajuda bastante.`,
            tip: 'Movimentos suaves e circulares garantem uma distribuição homogênea'
          },  
          {
            id: 3,
            instruction: `Não é necessário, mas se você tiver um distribuidor, agora é a hora de usar ele.`,
            tip: 'Gire em um sentido, depois em outro, para distribuir o café uniformemente', 
          },

          {
            id: 4,
            instruction: 'Tampe o café com pressão constante',
            tip: `Use aproximadamente 15kg de pressão, mas não se preocupe com a pressão exata.
              O puck(bolo de café) deve ser firme e uniforme.
              É bom observar nesse passo se o café está muito perto do final do filtro, se estiver, você pode usar uma quantidade menor de café. 
              O ideal é que o café fique um pouco mais centralizado, nem muito perto do centro nem muito perto das bordas.`
          },
          {
            id: 5,
            instruction: 'Extraia aproximadamente o volume de café de acordo com a proporção em 25-30 segundos',
            tip: 'O tempo começa a contar quando você liga a bomba'
          },
          {
            id: 6,
            instruction: 'O espresso é complexo, o que tem aqui são apenas dicas para voce começar o prosesso de regulagem, como é chamado no mundo profissional.',
            tip: 'Não se preocupe se ficar ruim de primeira, é normal, o importante é que voce comece a entender o processo e o que você gosta.'
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