import { fetchProductDetails } from '@/utils/actions'
import { formatCurrency } from '@/utils/format'
import { redirect } from 'next/navigation'

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  // Await the params Promise
  const { id } = await params;

  let product;

  try {
    product = await fetchProductDetails(id);
  } catch (error) {
    console.error("Failed to fetch product:", error);
    redirect('/');
  }

  if (!product) {
    redirect('/');
  }

  const { image, title, price, description } = product;

  return (
    <section className="mt-6">
      <div className="grid gap-y-8 lg:grid-cols-2 lg:gap-x-16 lg:items-center">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-semibold capitalize">{title}</h1>
          <p className="mt-3 text-xl text-muted-foreground">
            {formatCurrency(price)}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
        </div>
      </div>
    </section>
  );
}
