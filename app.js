$(document).ready(function() {

  const container = $('.container')
  const containerLocation = container[0].getBoundingClientRect()
  const spaceship = $('#spaceship')
  const spaceshipLocation = spaceship[0].getBoundingClientRect()
  const planet = $('#planet')
  const planetLocation = planet[0].getBoundingClientRect()
  console.log(planetLocation)
  const startButton = $('button')
  const body = $('body')
  const asteroidCollection = document.getElementsByClassName('asteroid')
  let life = 10

  $(planet).attr({
      'src': 'planet-remix.svg'
  })

  $(spaceship).attr({
    'src': 'ufo_1.svg'
  })

  // how many asteroids are made
  for (let i = 0; i < 6; i++) {
    makeAsteroid()
  }

  function initiateGame() {
    for (let j = 0; j < asteroidCollection.length; j++) {
        animationRight(asteroidCollection[j])
        animationLeft(asteroidCollection[j])
        collision(spaceship[0].getBoundingClientRect(), asteroidCollection[j].getBoundingClientRect())
        winner(spaceship[0].getBoundingClientRect(), planetLocation)
    }
  }
  setInterval(initiateGame, 1000)

  // collision detection
  function collision(ship, ast) {
    if (ship.x < ast.x + ast.width && ship.x + ship.width > ast.x && ship.y < ast.y + ast.height && ship.height + ship.y > ast.y) {
      console.log('collision')
      life--
      if(life === 0){
          alert('you died')
      }
    }
  }

  // winning logic
  function winner(ship, planet) {
      if(ship.x < planet.x + planet.width && ship.x + ship.width > planet.x && ship.y < planet.y + planet.height && ship.height + ship.y > planet.y){
          alert('youre safe')
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
      let width = Math.random() * containerLocation.width
      let speed = Math.floor(Math.random() * 3000) + 1000
      $(elem).animate({right: width, top: top}, speed);
  }
  function animationLeft(elem){
      let top = Math.random() * containerLocation.height
      let width = Math.random() * containerLocation.width
      let speed = Math.floor(Math.random() * 3000) + 1000
      $(elem).animate({left: width, top: top}, speed);
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
