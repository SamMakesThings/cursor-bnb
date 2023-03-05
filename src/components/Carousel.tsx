import Image from 'next/image'
import { useState } from 'react'

export function Carousel({ images }: { images: string[] }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNextSlide = (changeBy: number) => {
    setCurrentSlide(currentSlide + changeBy)
  }

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
            src={images[currentSlide]}
            className={'absolute block object-cover aspect-square'}
            alt="..."
          />
        </div>
      </div>

      {/* <!-- Bottom dots --> */}
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
              onClick={() => setCurrentSlide(index)}
            ></button>
          )
        })}
      </div>

      {/* <!-- Left right buttons --> */}
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
            className={
              'text-transparent w-4 h-4 group-hover:text-gray-800 hover:!dark:text-gray-800'
            }
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
            className={
              'text-transparent w-4 h-4 group-hover:text-gray-800 hover:!dark:text-gray-800'
            }
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
