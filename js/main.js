import rallax from '/Users/Chris/Documents/libraries/rallax.js/dist/rallax.js'

document.addEventListener('DOMContentLoaded', () => {
  const secondBlock = document.querySelectorAll('.description')[1]
  
  const stopTop = () => {
    return secondBlock.getBoundingClientRect().top < 200
  }

  const startTop = () => {
    return secondBlock.getBoundingClientRect().top >= 200
  }

  const dead = rallax('.dead', {disable: stopTop, enable: startTop})
  const simple = rallax('.simple', { speed: 0.6, disable: stopTop, enable: startTop})
  const parallax = rallax('.parallax', { speed: 0.4, disable: stopTop, enable: startTop})
  const scrolling = rallax('.scrolling', { speed: 0.5, disable: stopTop, enable: startTop})


})
