import { useState, useEffect, useCallback } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from './icons'

export default function Carousel({ items, autoPlayMs = 6000, ariaLabel }) {
  const [index, setIndex] = useState(0)
  const count = items.length

  const goTo = useCallback(
    (next) => {
      setIndex(((next % count) + count) % count)
    },
    [count],
  )

  useEffect(() => {
    if (autoPlayMs <= 0 || count <= 1) return
    const timer = setInterval(() => goTo(index + 1), autoPlayMs)
    return () => clearInterval(timer)
  }, [index, goTo, autoPlayMs, count])

  if (count === 0) return null

  const item = items[index]

  return (
    <div className="carousel" aria-label={ariaLabel}>
      <div className="carousel__viewport">
        <div className="carousel__slide" key={index}>
          {item.content}
        </div>
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            className="carousel__nav carousel__nav--prev"
            onClick={() => goTo(index - 1)}
            aria-label="Previous slide"
          >
            <ChevronLeftIcon />
          </button>
          <button
            type="button"
            className="carousel__nav carousel__nav--next"
            onClick={() => goTo(index + 1)}
            aria-label="Next slide"
          >
            <ChevronRightIcon />
          </button>

          <div className="carousel__dots" role="tablist" aria-label="Slide navigation">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                className={`carousel__dot${i === index ? ' carousel__dot--active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
