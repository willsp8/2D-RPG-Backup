let playerStats = {
    playerHealth: 100,
    playerMagic: 1000,
    playerEnergy: 100,
    playerMoney: 400,
    playerCoffee: 1,
    playerGreenTea: 2
}





const enemyDownImage2 = new Image()
// seting the image src to the image i want to use for the player
//playerDownImage2.src = './res/playerDown.png']
enemyDownImage2.src = './res/playerRes/EmDown.png'
const enemyUpImage2 = new Image()
enemyUpImage2.src = './res/playerRes/EmUp.png'
const enemyRightImage2 = new Image()
enemyRightImage2.src = './res/playerRes/EmUp.png'
const enemyLeftImage2 = new Image()
enemyLeftImage2.src = './res/playerRes/EMLeft.png'

const townEnmeny3 = new Sprite({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 500, 
        y: (canvas.height / 2 - 68 / 2) + 500
    },
    image: enemyDownImage2,
    frames: {
        max: 3,
        hold: 3
    },
    
    sprites: {
        up: enemyUpImage2,
        down: enemyDownImage2,
        left: enemyLeftImage2,
        right: enemyRightImage2
    }
})



const TestBoundary3 = new Boundary5({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 515, 
        y: (canvas.height / 2 - 68 / 2) + 485
    }
})

const AreaBoundary3 = new Boundary6({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 625, 
        y: (canvas.height / 2 - 68 / 2) + 400
    }
})

const StartingPoint3 = new Boundary7({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 650, 
        y: (canvas.height / 2 - 68 / 2) + 500
    }
})

const townEnmeny4 = new Sprite({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 500, 
        y: (canvas.height / 2 - 68 / 2) + 200
    },
    image: enemyDownImage2,
    frames: {
        max: 3,
        hold: 3
    },
    
    sprites: {
        up: enemyUpImage2,
        down: enemyDownImage2,
        left: enemyLeftImage2,
        right: enemyRightImage2
    }
})

const TestBoundary4 = new Boundary5({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 515, 
        y: (canvas.height / 2 - 68 / 2) + 190
    }
})

const AreaBoundary4 = new Boundary6({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 625,
        y: (canvas.height / 2 - 68 / 2) + 95
    }
})

const StartingPoint4 = new Boundary7({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 600, 
        y: (canvas.height / 2 - 68 / 2) + 200
    }
})

