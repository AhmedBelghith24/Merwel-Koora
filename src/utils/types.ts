export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>

export type Product = {
  id: string
  name: string
  company: string
  description: string
  featured: boolean
  image: string
  price: number
  createdAt: Date
  updatedAt: Date
  clerkId: string
}

export type CartItem = {
  productId: string
  image: string
  title: string
  price: string
  amount: number
  company: string
}

export type CartState = {
  cartItems: CartItem[]
  numItemsInCart: number
  cartTotal: number
  shipping: number
  tax: number
  orderTotal: number
}
