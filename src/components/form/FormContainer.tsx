'use client'

import { useActionState } from 'react' // Replaces deprecated useFormState
import { useEffect } from 'react'
import { toast } from 'sonner' // ✅ Use sonner directly
import { actionFunction } from '@/utils/types'

const initialState = {
  message: '',
}

function FormContainer({
  action,
  children,
}: {
  action: actionFunction
  children: React.ReactNode
}) {
  const [state, formAction] = useActionState(action, initialState)

  useEffect(() => {
    if (state?.message) {
      toast(state.message)
    }
  }, [state])

  return <form action={formAction}>{children}</form>
}

export default FormContainer
