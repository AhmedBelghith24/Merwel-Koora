import Link from 'next/link'
import { Button } from '@/components/ui/button'
import HeroCarousel from './HeroCarousel'

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          Discover & Trade Vintage Soccer Jerseys in 🇹🇳
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Passionate about football history? Buy, sell, or trade rare and
          authentic vintage soccer jerseys with fellow fans across Tunisia. Join
          the ultimate community for jersey collectors and football lovers.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Browse Jerseys</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  )
}
export default Hero
