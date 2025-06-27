import React from 'react'
import { Button } from '@/components/ui/button'
import { PiShoppingCartThin } from 'react-icons/pi'
import Link from 'next/link'

async function CartButton() {
  // Temporary cart count
  const numItemsInCart = 9

  return (
    <Button asChild variant="outline" size="icon" className="relative">
      <Link href="/cart" className="flex items-center justify-center">
        <PiShoppingCartThin className="w-6 h-6" />
        {numItemsInCart > 0 && (
          <span className="absolute -top-[10px] -right-[10px] bg-green-400 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
            {numItemsInCart}
          </span>
        )}
      </Link>
    </Button>
  )
}

export default CartButton
