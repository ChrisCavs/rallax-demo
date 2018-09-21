import Typewriter from 't-writer.js'

document.addEventListener('DOMContentLoaded', () => {

  // ABOUT SECTION

  const about1 = document.querySelector('.about1')
  const about2 = document.querySelector('.about2')
  const about3 = document.querySelector('.about3')
  const about4 = document.querySelector('.about4')

  const aboutTw1 = new Typewriter(about1, { animateCursor: 'hide', typeSpeed: 60 })
  const aboutTw2 = new Typewriter(about2, { animateCursor: 'hide', typeSpeed: 60 })
  const aboutTw3 = new Typewriter(about3, { animateCursor: 'hide', typeSpeed: 60 })
  const aboutTw4 = new Typewriter(about4, { animateCursor: 'hide', typeSpeed: 60 })

  const clearAll = () => {
    aboutTw1.clearText()
    aboutTw2.clearText()
    aboutTw3.clearText()
    aboutTw4.clearText()

    aboutTw1.start()
  }

  aboutTw1
    .type('Fast')
    .removeCursor()
    .rest(300)
    .then(aboutTw2.start.bind(aboutTw2))
    .start()

  aboutTw2
    .type('Easy to use')
    .removeCursor()
    .rest(300)
    .then(aboutTw3.start.bind(aboutTw3))

  aboutTw3
    .type('Fully-featured')
    .removeCursor()
    .rest(300)
    .then(aboutTw4.start.bind(aboutTw4))

  aboutTw4
    .type('Dependency-free')
    .removeCursor()
    .rest(2000)
    .then(clearAll)

  // DEMO 4

  const test5 = document.querySelector('.test5')

  const testTw5 = new Typewriter(test5, {
    loop: true,
    typeColor: 'blue'
  })

  testTw5
    .type('A simple syntax makes it easy.')
    .rest(500)
    .start()

  // DEMO 1

  const test1 = document.querySelector('.test1')

  const testTw1 = new Typewriter(test1, {
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 80,
    typeColor: 'red'
  })

  testTw1
    .type('You can type')
    .rest(500)
    .changeOps({ deleteSpeed: 80 })
    .remove(4)
    .type('edit')
    .rest(500)
    .remove(4)
    .type('synchronize callbacks')
    .rest(500)
    .changeOps({ deleteSpeed: 20 })
    .remove(21)
    .type('change options on the go')
    .rest(500)
    .clear()
    .start()

  // DEMO 2

  const test2 = document.querySelector('.test2')

  const testTw2 = new Typewriter(test2, { 
    loop: true, 
    typeColor: 'red' 
  })

  testTw2
    .strings(
      400,
      "Set many strings",
      "In just one call", 
      "Using the 'strings' method"
    )
    .start()
  
  // DEMO 3

  const test3 = document.querySelector('.test3')
  const test4 = document.querySelector('.test4')

  const testTw3 = new Typewriter(test3, { typeSpeed: 60, deleteSpeed: 30 })
  const testTw4 = new Typewriter(test4, { typeSpeed: 60, deleteSpeed: 30 })

  testTw3
    .type('Combo typewriters to')
    .removeCursor()
    .then(testTw4.start.bind(testTw4))
    .start()

  testTw4
    .type("create complex effects")
    .rest(500)
    .clear()
    .changeTypeColor('red')
    .type("defy user expectations")
    .rest(500)
    .clear()
    .changeTypeColor('blue')
    .type("generate a custom loop")
    .rest(700)
    .clear()
    .removeCursor()
    .changeTypeColor('black')
    .then(testTw3.start.bind(testTw3))
})