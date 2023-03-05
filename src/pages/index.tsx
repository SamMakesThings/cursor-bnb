import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import testImg from '../../public/unsplashPhoto.jpeg'

const inter = Inter({ subsets: ['latin'] })

type ListingCardProps = {
  name: string
  location: string
  dates: string
  price: string
  images: string[]
}

export function Carousel({ images }: { images: string[] }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNextSlide = (changeBy: number) => {
    setCurrentSlide(currentSlide + changeBy)
  }

  console.log(currentSlide)

  return (
    <div
      id="default-carousel"
      className={'relative group'}
      data-carousel="static"
    >
      {/* <!-- Carousel wrapper --> */}
      <div className={'relative overflow-hidden rounded-lg aspect-square'}>
        {/* <!-- Item 1 --> */}
        <div
          className={'duration-700 ease-in-out object-cover aspect-square'}
          data-carousel-item
        >
          <Image
            fill
            style={{ objectFit: 'cover' }}
            src={'https://source.unsplash.com/random/800x800/?img=1'}
            className={'absolute block object-cover aspect-square'}
            alt="..."
          />
        </div>
        {/* <!-- Item 2 --> */}
        <div className={'hidden duration-700 ease-in-out'} data-carousel-item>
          <Image
            width={200}
            height={200}
            src={'https://source.unsplash.com/random/800x800/?img=2'}
            className={
              'absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            }
            alt="..."
          />
        </div>
        {/* <!-- Item 3 --> */}
        <div className={'hidden duration-700 ease-in-out'} data-carousel-item>
          <Image
            width={200}
            height={200}
            src={'https://source.unsplash.com/random/800x800/?img=3'}
            className={
              'absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            }
            alt="..."
          />
        </div>
      </div>
      {/* <!-- Slider indicators --> */}
      <div
        className={
          'absolute z-1 flex space-x-1.5 -translate-x-1/2 bottom-3 left-1/2'
        }
      >
        {images.map((image, index) => {
          const isCurrentSlide = index == currentSlide

          return (
            <button
              type="button"
              key={index}
              className={
                'w-1.5 h-1.5 rounded-full' +
                (isCurrentSlide ? ' bg-slate-100' : ' bg-slate-400')
              }
              aria-current={isCurrentSlide}
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
          )
        })}
      </div>
      {/* <!-- Slider controls --> */}
      <button
        type="button"
        className={
          'absolute top-0 left-0 z-2 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none' +
          (currentSlide == 0 ? ' hidden' : '')
        }
        data-carousel-prev
        onClick={() => handleNextSlide(-1)}
      >
        <span
          className={
            'inline-flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-white/80 hover:!bg-white'
          }
        >
          <svg
            aria-hidden="true"
            className={'text-white w-4 h-4 dark:text-gray-800'}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className={'sr-only'}>Previous</span>
        </span>
      </button>
      <button
        type="button"
        className={
          'absolute top-0 right-0 z-2 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none' +
          (currentSlide == images.length - 1 ? ' hidden' : '')
        }
        data-carousel-next
        onClick={() => handleNextSlide(1)}
      >
        <span
          className={
            'inline-flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-white/80 hover:!bg-white'
          }
        >
          <svg
            aria-hidden="true"
            className={'text-white w-4 h-4 dark:text-gray-800'}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className={'sr-only'}>Next</span>
        </span>
      </button>
    </div>
  )
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Cursor BNB</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Cursor bnb layout by&nbsp;
            <code className={styles.code}>Sam</code>
          </p>
          <div>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              for Cursor
              <Image
                src="/cursorLogo.svg"
                alt="Cursor Logo"
                className={styles.vercelLogo}
                width={25}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div
          className={
            'grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'
          }
        >
          <ListingCard
            name={'Cursor listing'}
            location={'Cursor'}
            dates={'2021-2022'}
            price={'$1,000'}
            images={[
              'https://source.unsplash.com/random/800x800/?img=1',
              'https://source.unsplash.com/random/800x800/?img=2',
              'https://source.unsplash.com/random/800x800/?img=3',
              'https://source.unsplash.com/random/800x800/?img=4',
            ]}
          />
          <ListingCard
            name={'Cursor listing'}
            location={'Cursor'}
            dates={'2021-2022'}
            price={'$1,000'}
            images={['https://source.unsplash.com/random/800x800/?img=5']}
          />
          <ListingCard
            name={'Cursor listing'}
            location={'Cursor'}
            dates={'2021-2022'}
            price={'$1,000'}
            images={['/cursorLogo.svg']}
          />
          <ListingCard
            name={'Cursor listing'}
            location={'Cursor'}
            dates={'2021-2022'}
            price={'$1,000'}
            images={['/cursorLogo.svg']}
          />
          <ListingCard
            name={'Cursor listing'}
            location={'Cursor'}
            dates={'2021-2022'}
            price={'$1,000'}
            images={['/cursorLogo.svg']}
          />
          <ListingCard
            name={'Cursor listing'}
            location={'Cursor'}
            dates={'2021-2022'}
            price={'$1,000'}
            images={['/cursorLogo.svg']}
          />
        </div>
      </main>
    </>
  )
}
