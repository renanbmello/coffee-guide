import Link from 'next/link';
import { CategoryInfo } from '@/types/coffee';

export const metadata = {
  title: 'Guia do Café - Seu guia completo sobre café',
  description: 'Aprenda tudo sobre café: métodos, receitas e dicas',
};

export default function Home() {
  const categories: CategoryInfo[] = [
    {
      id: 'espresso',
      name: 'Espresso',
      description: 'Descubra a arte do café espresso e suas variações',
      imageUrl: '/images/espresso.jpg'
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 bg-coffee-50">
      <h1 className="text-4xl font-bold text-center mb-8 text-coffee-800">
        Bem-vindo ao Guia do Café
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/coffee/${category.id}`}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-gradient-to-b from-coffee-100 to-white">
                <h2 className="text-xl font-semibold mb-2 text-coffee-800">
                  {category.name}
                </h2>
                <p className="text-coffee-600">
                  {category.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}