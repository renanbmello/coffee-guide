import Link from 'next/link'
import { useMenu } from '@/hooks/useMenu'

export const SidebarNav = () => {
  const { categories, isActiveLink, isActiveCategory, getSubCategories } = useMenu()

  return (
    <nav className="p-4">
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id} className="space-y-1">
            <Link
              href={`/coffee/${category.id}`}
              className={`
                block font-medium py-2 px-3 rounded-lg transition-colors
                ${isActiveCategory(category.id)
                  ? 'bg-coffee-100 text-coffee-800'
                  : 'text-coffee-800 hover:bg-coffee-50'
                }
              `}
            >
              {category.name}
            </Link>
            <ul className="pl-4 space-y-1">
              {getSubCategories(category.id).map((subItem) => (
                <li key={subItem.id}>
                  <Link
                    href={`/coffee/${category.id}/${subItem.id}`}
                    className={`
                      block py-1 px-3 text-sm rounded-lg transition-colors
                      ${isActiveLink(`/coffee/${category.id}/${subItem.id}`)
                        ? 'bg-coffee-50 text-coffee-800'
                        : 'text-coffee-600 hover:bg-coffee-50'
                      }
                    `}
                  >
                    {subItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
} 