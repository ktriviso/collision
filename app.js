$(document).ready(function(){
    const container = $('.container')
    const spaceship = $('img')

    // how many astroids you want
    for(let i = 0; i < 6; i++){
        makeAstroid();
    }

    function makeAstroid(){
        let id = Math.floor(Math.random()*999999) + 100000
        let astroid = $('<img></img>').attr({'id': id, 'src': 'as1.svg'})
        // get random coordinates every time you make an astroid
        let top = Math.random() * 480
        // if the id is even, start from left, if odd start from right
        if(astroid.attr('id') % 2 === 0){
            astroid.attr('class', 'left-astroid astroid')
        }else{
            astroid.attr('class', 'right-astroid astroid')
        }
        // window.innerHeight
        container.append(astroid)
        $(astroid).css('top', top)
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
