$(document).ready(function(){
    const container = $('.container')
    const spaceship = $('img')

    // how many asteroids you want
    for(let i = 0; i < 8; i++){
        makeasteroid();
    }

    function makeasteroid(){
        let id = Math.floor(Math.random()*999999) + 100000
        let asteroid = $('<img></img>').attr({'id': id, 'src': 'as1.svg'})
        // get random coordinates every time you make an asteroid
        let top = Math.random() * 480
        // if the id is even, start from left, if odd start from right
        if(asteroid.attr('id') % 2 === 0){
            asteroid.attr('class', 'left-asteroid asteroid')
        } else if (asteroid.attr('id') % 3 === 0){
            asteroid.attr('class', 'slow-asteroid asteroid')
        } else if (asteroid.attr('id') % 5 === 0){
            asteroid.attr('class', 'fast-asteroid asteroid')
        } else{
            asteroid.attr('class', 'right-asteroid asteroid')
        }
        // window.innerHeight
        container.append(asteroid)
        $(asteroid).css('top', top)
    }

    // grab arrow key events
    // Up: 38 - Down: 40 - Right: 39 - Left: 37
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
