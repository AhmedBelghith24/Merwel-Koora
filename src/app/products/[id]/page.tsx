// src/app/products/page.tsx
import React from 'react'
import BreadCrumbs from '@/components/products/BreadCrumbs'
import ProductCard from '@/components/products/ProductCard'
import { fetchAllProducts } from '@/utils/actions'

interface ProductsPageProps {
  // Next.js 15 now passes searchParams as a Promise
  searchParams: Promise<{
    layout?: 'grid' | 'list'
    search?: string
  }>
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  // await the params to get the actual values
  const { layout = 'grid', search = '' } = await searchParams

  // fetch your product list however you like
  const products = await fetchAllProducts(search)

  return (
    <section className="px-4 py-8">
      <BreadCrumbs />

      <div className={layout === 'list' ? 'space-y-6' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} layout={layout} />
        ))}
      </div>
    </section>
  )
}
