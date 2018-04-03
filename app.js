$(document).ready(function() {

  const container = $('.container')
  const containerLocation = container[0].getBoundingClientRect()
  const spaceship = $('img')
  const startButton = $('button')
  const body = $('body')
  const asteroidCollection = document.getElementsByClassName('asteroid')

  $(spaceship).attr({
    'src': 'ufo_1.svg',
    'id': 'spaceship'
  })

  // how many asteroids are made
  for (let i = 0; i < 6; i++) {
    makeAsteroid()
  }

  function choose() {
    for (let j = 0; j < asteroidCollection.length; j++) {
        animationRight(asteroidCollection[j])
        animationLeft(asteroidCollection[j])
        collision(spaceship[0].getBoundingClientRect(), asteroidCollection[j].getBoundingClientRect())
    }
  }
  setInterval(choose, 1000)

  // collision detection
  function collision(rect1, rect2) {
    if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.height + rect1.y > rect2.y) {
      console.log('collision')
    }
  }

  function makeAsteroid() {
    let asteroid = $('<img></img>').attr({
      'class': 'asteroid',
      'src': 'as1.svg'
    })
    container.append(asteroid)
  }

  // animation
  function animationRight(elem){
      let top = Math.random() * containerLocation.height
      let speed = Math.floor(Math.random() * 4000) + 1500
      $(elem).animate({right: '1px', top: top}, speed);
  }
  function animationLeft(elem){
      let top = Math.random() * containerLocation.height
      let speed = Math.floor(Math.random() * 4000) + 1500
      $(elem).animate({left: '1px', top: top}, speed);
  }

  // moving the spaceship with arrow keys
  $(document).keyup(function(e) {
    let currentX = spaceship.css('bottom')
    let currentY = spaceship.css('right')
    let configX = parseInt(currentX.replace('px', ''))
    let configY = parseInt(currentY.replace('px', ''))
    if (e.which === 38) {
      configX += 15
      spaceship.css('bottom', configX)
    } else if (e.which === 40) {
      configX -= 15
      spaceship.css('bottom', configX)
    } else if (e.which === 37) {
      configY += 30
      spaceship.css('right', configY)
    } else if (e.which === 39) {
      configY -= 30
      spaceship.css('right', configY)
    }
  });

})
