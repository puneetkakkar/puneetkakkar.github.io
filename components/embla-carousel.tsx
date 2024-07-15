'use client'

import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { ReactNode, useCallback } from 'react'
import { DotButton, useDotButton } from './embla-carousel-dot-button'

type PropType = {
  // slides: number[]
  options?: EmblaOptionsType
  children: ReactNode
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { children, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  return (
    <section className='embla flex flex-col-reverse m-0 w-full'>
      <div className='embla__viewport h-full' ref={emblaRef}>
        <div className='embla__container h-full'>{children}</div>
      </div>

      <div className='dark:hidden grid embla__controls mt-3'>
        <div className='embla__dots'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' light__embla__dot--selected ' : ''
              )}
            />
          ))}
        </div>
      </div>

      <div className='hidden dark:grid embla__controls mt-3'>
        <div className='embla__dots'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' dark__embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
