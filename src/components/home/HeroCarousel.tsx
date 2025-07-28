import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const carouselImages = [
  'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
]

function HeroCarousel() {
  return (
    <div className="hidden lg:block">
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="p-2 relative w-full h-[24rem]">
                  <Image
                    src={image}
                    alt={`Hero image ${index + 1}`}
                    fill
                    className="rounded-md object-cover"
                    priority={index === 0}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default HeroCarousel
