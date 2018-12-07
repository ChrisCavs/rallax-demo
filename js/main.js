import rallax from 'rallax.js'

document.addEventListener('DOMContentLoaded', () => {
  window.onbeforeunload = () => {
    window.scrollTo(0, 0)
  }

  const dead = rallax('.dead')
  const simple = rallax('.simple')
  const parallax = rallax('.parallax')
  const scrolling = rallax('.scrolling')

  const objects = [dead, simple, parallax, scrolling]

  dead.when(
    () => dead.scrollY() > 320,
    () => dead.changeSpeed(1.1)
  ).when(
    () => dead.scrollY() <= 320,
    () => dead.changeSpeed(0.5)
  )

  simple.when(
    () => simple.scrollY() > 320,
    () => simple.changeSpeed(0.95)
  ).when(
    () => simple.scrollY() <= 320,
    () => simple.changeSpeed(0.6)
  )

  parallax.when(
    () => parallax.scrollY() > 320,
    () => parallax.changeSpeed(0.8)
  ).when(
    () => parallax.scrollY() <= 320,
    () => parallax.changeSpeed(0.7)
  )

  scrolling.when(
    () => scrolling.scrollY() > 320,
    () => scrolling.changeSpeed(0.64)
  ).when(
    () => scrolling.scrollY() <= 320,
    () => scrolling.changeSpeed(0.8)
  )

  objects.forEach(obj => {
      obj.when(
        () => obj.scrollY() > 750,
        () => obj.stop()
      )
      obj.when(
        () => obj.scrollY() <= 750,
        () => obj.start()
      )
    })
  
  const image = document.querySelector('.parallax-image')
  const imageContainer = document.querySelector('.container')
  const imageContainerRect = imageContainer.getBoundingClientRect()
  const winHeight = window.innerHeight

  const imageTop = -(window.innerHeight * 0.3) * 2
  const imageHeight = imageContainerRect.height + (winHeight * 0.3)
  const imageWidth = imageContainerRect.width + 200
  const imageLeft = -100

  Object.assign(image.style, {
    position: 'relative',
    top: `${imageTop}px`,
    left: `${imageLeft}px`,
    height: `${imageHeight}px`,
    width: `${imageWidth}px`,
  })

  const imageParallax = rallax(image)
})
