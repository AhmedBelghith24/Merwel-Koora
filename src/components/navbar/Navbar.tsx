import Container from '@/components/global/Container'
import React from 'react'
import Logo from './Logo'
import NavSearch from './NavSearch'
import CartButton from './CartButton'
import DarkMode from './DarkMode'
import LinksDropdown from './LinksDropdown'
import { Suspense } from 'react'

function Navbar() {
  return (
    <nav className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <Container className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 py-4 lg:py-6">
        {/* Top row on mobile: Logo and action buttons */}
        <div className="flex justify-between items-center w-full lg:w-auto">
          <Logo />
          <div className="flex gap-2 items-center lg:hidden">
            <CartButton />
            <DarkMode />
            <LinksDropdown />
          </div>
        </div>

        {/* Search bar - full width on mobile, centered on desktop */}
        <div className="w-full lg:flex-1 lg:max-w-md lg:mx-8">
          <Suspense>
            <NavSearch />
          </Suspense>
        </div>

        {/* Action buttons - hidden on mobile, shown on desktop */}
        <div className="hidden lg:flex gap-4 items-center">
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
