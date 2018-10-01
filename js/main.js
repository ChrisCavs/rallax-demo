import rallax from '../../rallax.js/dist/rallax.js'

document.addEventListener('DOMContentLoaded', () => {

  rallax('.test1', './test-image3.jpg')

  rallax('.test3', './test-image3.jpg', {
    adjust: {
      scale: 0.1,
      offset: {
        top: 0,
        right: 0
      }
    }
  })

  rallax('.test4', './test-image3.jpg', {
    adjust: {
      scale: 0.1,
      offset: {
        top: 0,
        left: 0
      }
    }
  })
})
