'use client'

import { SignOutButton } from '@clerk/nextjs'
import { toast } from 'sonner' // ✅ use sonner directly
import Link from 'next/link'

function SignOutLink() {
  const handleLogout = () => {
    toast('Logging out...') // ✅ sonner toast format
  }

  return (
    <SignOutButton>
      <button className="w-full text-left" onClick={handleLogout} type="button">
        Logout
      </button>
    </SignOutButton>
  )
}

export default SignOutLink
