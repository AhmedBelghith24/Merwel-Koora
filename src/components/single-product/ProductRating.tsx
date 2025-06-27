import { FaStar } from 'react-icons/fa'

async function ProductRating({ productId }: { productId: string }) {
  console.log('Rating for product ID:', productId) // Temporary usage

  const rating = 4.2
  const count = 25

  return (
    <span className="flex gap-1 items-center text-md mt-1 mb-4">
      <FaStar className="w-3 h-3" />
      {rating} ({count}) reviews
    </span>
  )
}

export default ProductRating
