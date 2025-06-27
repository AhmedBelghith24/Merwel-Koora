import React from 'react'
import { TbShirtSport } from 'react-icons/tb'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/" className="inline-block">
        <TbShirtSport className="w-20 h-20 text-white" />
      </Link>
    </Button>
  )
}

export default Logo
