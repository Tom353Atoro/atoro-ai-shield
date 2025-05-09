
import type { UseEmblaCarouselType } from "embla-carousel-react"

export type AutoplayOptionsType = {
  delay?: number
  playOnInit?: boolean
  stopOnInteraction?: boolean
  stopOnMouseEnter?: boolean
  stopOnTouch?: boolean
}

export type AutoplayType = {
  options?: AutoplayOptionsType
  play: () => void
  stop: () => void
  reset: () => void
  isPlaying: () => boolean
}

export function autoplayPlugin(
  options: AutoplayOptionsType = {}
): () => AutoplayType {
  const {
    delay = 4000,
    playOnInit = true,
    stopOnInteraction = true,
    stopOnMouseEnter = true,
    stopOnTouch = true,
  } = options

  return (emblaApi: UseEmblaCarouselType[1]): AutoplayType => {
    let timer = 0
    let isPlaying = false

    function play(): void {
      if (isPlaying) return
      isPlaying = true
      startTimer()
    }

    function stop(): void {
      if (!isPlaying) return
      isPlaying = false
      clearTimer()
    }

    function reset(): void {
      if (isPlaying) {
        clearTimer()
        startTimer()
      }
    }

    function clearTimer(): void {
      window.clearTimeout(timer)
    }

    function startTimer(): void {
      clearTimer()
      if (!emblaApi || !emblaApi.canScrollNext()) {
        emblaApi?.scrollTo(0)
      }
      timer = window.setTimeout(() => {
        if (!emblaApi) return
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext()
        } else {
          emblaApi.scrollTo(0)
        }
        startTimer()
      }, delay)
    }

    function init(): void {
      if (playOnInit) play()

      if (stopOnInteraction) {
        emblaApi?.on("pointerDown", stop)
      }

      emblaApi?.on("reInit", reset)
    }

    function setupAutoplayHandlers(container: HTMLElement | null): void {
      if (!container) return

      if (stopOnMouseEnter) {
        container.addEventListener("mouseenter", () => {
          stop()
        })
        container.addEventListener("mouseleave", () => {
          if (playOnInit) play()
        })
      }

      if (stopOnTouch) {
        container.addEventListener("touchstart", () => {
          stop()
        }, { passive: true })
        container.addEventListener("touchend", () => {
          if (playOnInit) play()
        })
      }
    }

    requestAnimationFrame(() => {
      const rootNode = emblaApi?.rootNode()
      if (rootNode) {
        setupAutoplayHandlers(rootNode.parentElement)
      }
    })

    init()

    return {
      options,
      play,
      stop,
      reset,
      isPlaying: () => isPlaying,
    }
  }
}
