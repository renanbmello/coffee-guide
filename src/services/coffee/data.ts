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
    'pour-over': {
      id: 'pour-over',
      name: 'Café Coado',
      description: 'Método manual que ressalta as características sutis do café.',
      imageUrl: '/images/cafe-coado.png'
    }
  },
  subCategories: {
    'espresso': [
      {
        id: 'traditional',
        name: 'Espresso Tradicional',
        imageUrl: '/images/espresso/tradicional.png'
      },
    //   {
    //     id: 'ristretto',
    //     name: 'Ristretto',
    //     imageUrl: '/images/espresso/ristretto.png'
    //   },
    //   {
    //     id: 'lungo',
    //     name: 'Lungo',
    //     imageUrl: '/images/espresso/lungo.png'
    //   }
    ],
    'pour-over': [
      {
        id: 'v60',
        name: 'Hario V60',
        imageUrl: '/images/pourOver/v60.png'
      },
    //   {
    //     id: 'chemex',
    //     name: 'Chemex',
    //     imageUrl: '/images/coffee/pour-over/chemex.jpg'
    //   }
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
    'pour-over': {
      'v60': {
        id: 'v60',
        name: 'Hario V60',
        description: 'Método manual que ressalta as características sutis do café.',
        imageUrl: '/images/pourOver/v60.png',
        ratio: 13,
        defaultDose: 25,
        tools: [{
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
            id: 'filtro-v60',
            name: 'Filtro V60',
            description: 'Filtro padrão da Hario.',
            imageUrl: '/images/tools/filtro-v60.png'
          },
          {
            id: 'filter',
            name: 'Filtro',
            description: 'Flitro de papel para V60, pode achar facilmente na internet.',
            imageUrl: '/images/tools/filtro-hario-v60-foto1.jpg'
          },
          {
            id: 'timer',
            name: 'Timer',
            description: 'Para medir o tempo de extração, pode ser um celular com cronômetro.',
            imageUrl: '/images/tools/cronometro.png'
          },
          {
            id: 'chaleira',
            name: 'Chaleira',
            description: 'Para aquecer a água, pode ser uma chaleira elétrica.',
            imageUrl: '/images/tools/chaleira.jpg'
          }
        ],
        steps: [{
            id: 1,
            instruction: 'Moa os grãos de café com uma granulometria média, uma textura similar à grãos de areia.',
            tip: `A proporção deve ser algo em torno de 1:12 até 1:15, ou seja, para cada grama de café, você deve usar 12 a 15 gramas de água.
            Depois é só calcular a quantidade de café que você quer e a quantidade de água que você quer, e dividir por pela proporção.
            Por exemplo, se você quer 400ml de café, e for usar a proporção de 1:12, você deve usar 33g de café.`
          },
          {
            id: 2,
            instruction: 'Coloque a chaleira sobre a fonte de calor, e comece a aquecer a água.',
            tip: 'Não se preocupe com a temperatura exata, o importante é que a água esteja quente, inclusive pode ferver.'
          },
          {
            id: 3,
            instruction: 'Dobre o filtro de papel de acordo com a marcação que tem nele.',
            tip: ``
          },
          {
            id: 4,
            instruction: 'Escalde o filtro com água quente, não pule essa etapa.',
            tip: 'Seu café vai ficar muito melhor sem gosto de papel.'
          },
          {
            id: 5,
            instruction: 'Coloque o café no filtro.',
            tip: 'De uma leve balança no filtro para que o café fique mais uniforme.',
            imageUrl: '/images/coffee/pour-over/v60/1.jpg'
          }, 
          {
            id: 6,
            instruction: 'Comece a despejar a água quente sobre o café, começando pelo centro e fazendo um movimento circular.',
            tip: `Também comece seu cronômetro.
            Despeje até que o café esteja totalmente hidratado`
          },
          {
            id: 7,
            instruction: 'Mexa o café!.',
            tip: `Mexa o café para que ele seja mais uniforme.
            Pode usar uma colher ou mexer o porta-filtro.`
          },
          {
            id: 8,
            instruction: 'Espere cerca de 30 segundos.',
            tip: `Isso vai ajudar a extrair os aromas do café.`
          },
          {
            id: 9,
            instruction: 'Despeje em espiral 60% da água total da bebida. ',
            tip: `Se você quer 400ml de café, você deve despejar 240ml de água nesse passo.`
          }, 
          {
            id: 10,
            instruction: ' Despeje em espiral os outros 40% da água, mantendo-o cheio.',
            tip: `despejando lentamente o restante da água da bebida em 30 segundos.`
          },
          {
            id: 11,
            instruction: 'Espere o café drenar completamente. ',
            tip: `Espere o café drenar completamente. 
            Você quer a cama de café plana e nenhuma moagem grande de café na lateral do papel de filtro.`
          }, 
          {
            id: 12,
            instruction: 'Despeje o café em um copo.',
            tip: `Esse processo deve durar em torno de 3 a 4 minutos.`
          }
        ]
      }
    }
  }
} 