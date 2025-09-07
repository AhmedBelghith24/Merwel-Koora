"use client"

import { fetchFeaturedProducts } from '@/utils/actions'
import EmptyList from '../global/EmptyList'
import SectionTitle from '../global/SectionTitle'
import ProductsGrid from '../products/ProductsGrid'
import { useEffect, useState } from 'react'
import { Product } from '@/utils/types'

function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const data = await fetchFeaturedProducts()
        setProducts(data)
      } catch (error) {
        console.error('Error loading featured products:', error)
        setError(error instanceof Error ? error.message : 'Failed to load products')
      } finally {
        setIsLoading(false)
      }
    }
    
    loadProducts()
  }, [])

  if (isLoading) {
    return (
      <section className="pt-24">
        <SectionTitle text="featured products" />
        <div className="text-center">Loading featured products...</div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="pt-24">
        <SectionTitle text="featured products" />
        <div className="text-center text-red-500">
          Error: {error}
        </div>
      </section>
    )
  }

  if (products.length === 0) return <EmptyList />
  
  return (
    <section className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid products={products} />
    </section>
  )
}
export default FeaturedProducts
