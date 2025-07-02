// src/app/products/page.tsx
import React from 'react'
import ProductsContainer from '@/components/products/ProductsContainer'

interface ProductsPageProps {
  // Next.js 15 now passes searchParams as a Promise
  searchParams: Promise<{
    layout?: string
    search?: string
  }>
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  // await to get the real values
  const { layout = 'grid', search = '' } = await searchParams

  return (
    <ProductsContainer
      layout={layout}
      search={search}
    />
  )
}
