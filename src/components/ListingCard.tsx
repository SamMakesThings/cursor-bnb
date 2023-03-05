import { Carousel } from '@/components/Carousel'

export type ListingCardProps = {
  name: string
  location: string
  dates: string
  price: string
  images: string[]
}

export function ListingCard({
  name,
  location,
  dates,
  price,
  images,
}: ListingCardProps) {
  return (
    <div className={'flex flex-col justify-items-stretch'}>
      <Carousel images={images} />
      <div className={'flex flex-row justify-between  mt-2'}>
        <p className={'font-medium'}>{name}</p>
        <p className={'font-light'}>★ 4.95</p>
      </div>
      <p className={'font-light text-stone-500 text-sm'}>{location}</p>
      <p className={'font-light text-stone-500 text-sm'}>{dates}</p>
      <div className={'flex flex-row mt-1.5'}>
        <p className={'font-medium'}>{price}</p>
        <p className={'font-light ml-1'}> night</p>
      </div>
    </div>
  )
}
