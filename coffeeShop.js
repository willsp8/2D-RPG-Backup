const offset7 = {
    x: -1350,
    y: -2050
}

const coffeeShopBackgroundImage = new Image()
//houseBackgroundImage.src = './res/battleBackground.png'
coffeeShopBackgroundImage.src = './res/maps/coffee_shop_map.png'

const playerDownImage4 = new Image()
playerDownImage4.src = './res/playerRes/CDown2.png'
const playerUpImage4 = new Image()
playerUpImage4.src = './res/playerRes/CUp2.png'
const playerRightImage4 = new Image()
playerRightImage4.src = './res/playerRes/CRight2.png'
const playerLeftImage4 = new Image()
playerLeftImage4.src = './res/playerRes/CLeft2.png'

const collisionMapCoffeeShop = [] 
for (let i = 0; i < collision_for_coffee_shop.length; i+= 90){ 
    
    collisionMapCoffeeShop.push(collision_for_coffee_shop.slice(i, 90 + i ))
    
}
const boundaries_for_CoffeeShop = []
collisionMapCoffeeShop.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        if(Symbol == 968){
            
            boundaries_for_CoffeeShop.push(
                new Boundary4({
                    position: {
                        // this will subtract -1050 from the Boundary offset
                        x: j * Boundary4.width + offset7.x,
                        y: i * Boundary4.height + offset7.y
                    }
                })
            )
        }
            
    })
})

const leaveCafeMap = []
for (let i = 0; i < leave_cafe.length; i+= 90){ 
    
    leaveCafeMap.push(leave_cafe.slice(i, 90 + i ))
    
}

const boundaries_for_leaving_cafe = []
leaveCafeMap.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        if(Symbol == 968){
            
            boundaries_for_leaving_cafe.push(
                new Boundary4({
                    position: {
                        // this will subtract -1050 from the Boundary offset
                        x: j * Boundary4.width + offset7.x,
                        y: i * Boundary4.height + offset7.y
                    }
                })
            )
        }
            
    })
})

let buy1 = false
const player4 = new Sprite({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2), 
        y: (canvas.height / 2 - 68 / 2)
    }, 

    image: playerDownImage4, 
    frames: {
        max: 6,
        hold: 9
    },
    
    sprites: {
        up: playerUpImage4,
        down: playerDownImage4,
        left: playerLeftImage4,
        right: playerRightImage4
    }
    // this sets up the sprite so we can animate our player moving right, left and etc. 
})

const baristaDownImage = new Image()
baristaDownImage.src = "./res/playerRes/baristaDown.png"


const barista = new Sprite({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 400, 
        y: (canvas.height / 2 - 68 / 2) - 385
    }, 

    image: baristaDownImage, 
    frames: {
        max: 3,
        hold: 16
    }
    // this sets up the sprite so we can animate our player moving right, left and etc. 
})

const baristaBoundary = new Boundary4({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 400, 
        y: (canvas.height / 2 - 68 / 2) - 285
    }
})

const coffeeShopBackground = new Sprite({
    position: {
        x: offset7.x,
        y: offset7.y
    },
    // seting the battleBackground to the image above 
    image: coffeeShopBackgroundImage
})

const coffee_shop_movables = [baristaBoundary, barista, coffeeShopBackground, ...boundaries_for_CoffeeShop, ...boundaries_for_leaving_cafe]
function animateCoffeeShop(){
    const coffeeShopAnimateId =  window.requestAnimationFrame(animateCoffeeShop)
    coffeeShopBackground.draw()
    boundaries_for_CoffeeShop.forEach((boundary) => {
        boundary.draw()
    })

    boundaries_for_leaving_cafe.forEach((boundary) => {
        boundary.draw()
    })

    barista.draw()
    baristaBoundary.draw()
    barista.animate = true
    player4.drawAI()
    let moving4 = true
    player4.animate = false
    
    
    if(rectangularCollision2({
        rectangle1: baristaBoundary,
        //makes a clone of the boundary object 
        rectangle2: player4,
        x: 0,
        y: 0
    })){
        //keys.e.pressed = true
       if(dialogueToggled == true){
        console.log('args')
        moving4 = false
        document.querySelector('#baristaInterface').style.display = 'block'
        document.querySelectorAll('button').forEach((button) => {
            buy1 = true
            button.addEventListener('click', (e) =>{
                
                console.log(e.currentTarget.innerHTML)
                console.log('what')
                if(e.currentTarget.innerHTML == 'Buy Coffee' && playerStats.playerMoney >= 100 && buy1 == true ){
                   
                        playerStats.playerMoney = playerStats.playerMoney - 100
                        playerStats.playerCoffee = playerStats.playerCoffee + 1
                        
                    
                    document.querySelector('#dialogueBoxForBarista').style.display = 'block'
                    document.querySelector('#dialogueBoxForBarista').innerHTML = 'One Coffee'
                    document.querySelector('#pWallet').innerHTML = '$' + playerStats.playerMoney
                    document.querySelector('#pCoffee').innerHTML = 'Coffee: ' + playerStats.playerCoffee
                    document.querySelector('#dialogueBoxForBarista').addEventListener('click', (e) => {
                        e.currentTarget.style.display = 'none'
                        
                    
                    })
                    //playerStats.playerMoney = playerStats.playerMoney - 100
                    
                    buy1 = false
                }else if(e.currentTarget.innerHTML == 'Buy Green Tea' && playerStats.playerMoney >= 100 && buy1 == true ){
                    playerStats.playerMoney = playerStats.playerMoney - 100
                    playerStats.playerGreenTea = playerStats.playerGreenTea + 1
                    document.querySelector('#dialogueBoxForBarista').style.display = 'block'
                    document.querySelector('#dialogueBoxForBarista').innerHTML = 'One Green Tea'
                    document.querySelector('#pWallet').innerHTML = '$' + playerStats.playerMoney
                    document.querySelector('#pGreenTea').innerHTML = 'Green Tea: ' + playerStats.playerGreenTea
                    document.querySelector('#dialogueBoxForBarista').addEventListener('click', (e) => {
                        e.currentTarget.style.display = 'none'
                    })
                    
                    buy1 = false
                }else if(e.currentTarget.innerHTML == 'Buy Coffee' && playerStats.playerMoney <= 100 && buy1 == true ){
                    document.querySelector('#dialogueBoxForBarista').style.display = 'block'
                    document.querySelector('#dialogueBoxForBarista').innerHTML = 'Sorry you need to get some more money'
                    
                    document.querySelector('#dialogueBoxForBarista').addEventListener('click', (e) => {
                        e.currentTarget.style.display = 'none'
                        
                    
                    })
                }else if(e.currentTarget.innerHTML == 'Buy Green Tea' && playerStats.playerMoney <= 100 && buy1 == true ){
                    document.querySelector('#dialogueBoxForBarista').style.display = 'block'
                    document.querySelector('#dialogueBoxForBarista').innerHTML = 'Sorry you need to get some more money'
                    
                    document.querySelector('#dialogueBoxForBarista').addEventListener('click', (e) => {
                        e.currentTarget.style.display = 'none'
                        
                    
                    })
                }
            })
        })
       }else if(dialogueToggled == false){
        console.log('args left')
        document.querySelector('#baristaInterface').style.display = 'none'
        moving4 = true

       }
        
    }

    openMenu()

    
    
    if(keys.w.pressed == true && lastKey == 'w') {

        player4.animate = true
        player4.image = player4.sprites.up
        keys.r.pressed = true
        for (let i = 0; i < boundaries_for_CoffeeShop.length; i++){
            const boundary = boundaries_for_CoffeeShop[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player4,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y + 3
                        }
                    }
                })
            ){
               
                moving4 = false
                break
            }
        }
        
        if(moving4 == true){
            // so this should only move the movable objects in the array we put above animate and should allow the collision blocks to stay in place
            coffee_shop_movables.forEach((movable) => {
            movable.position.y += 3})
            
        }
                
        
    }else if (keys.s.pressed == true && lastKey == 's') {
        
        player4.animate = true
        player4.image = player4.sprites.down
        keys.r.pressed = true
        for (let i = 0; i < boundaries_for_CoffeeShop.length; i++){
            const boundary = boundaries_for_CoffeeShop[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player4,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 3
                        }
                    }
                })
            ){
               
                moving4 = false
                break
            }
        }

        // leave cafe 
        for (let i = 0; i < boundaries_for_leaving_cafe.length; i++){
            const boundary = boundaries_for_leaving_cafe[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player4,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 3
                        }
                    }
                })
            ){
                window.cancelAnimationFrame(coffeeShopAnimateId)
                animateTown()
                moving4 = false
                break
            }
        }

        if(moving4 == true){
            // so this should only move the movable objects in the array we put above animate and should allow the collision blocks to stay in place
            coffee_shop_movables.forEach((movable) => {
            movable.position.y -= 3})
        //console.log(background.position.y)
        }
        
        
    }else if(keys.a.pressed == true && lastKey == 'a') {

        player4.animate = true
        player4.image = player4.sprites.left
        keys.r.pressed = true
        for (let i = 0; i < boundaries_for_CoffeeShop.length; i++){
            const boundary = boundaries_for_CoffeeShop[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player4,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x + 3,
                            y: boundary.position.y
                        }
                    }
                })
            ){
               
                moving4 = false
                break
            }
        }
      

        if(moving4 == true){
            // so this should only move the movable objects in the array we put above animate and should allow the collision blocks to stay in place
            coffee_shop_movables.forEach((movable) => {
            movable.position.x += 3})
        }
        
        
        //console.log(background.position.x)
    }else if(keys.d.pressed == true && lastKey == 'd') {

        player4.animate = true
        player4.image = player4.sprites.right
        keys.r.pressed = true
        for (let i = 0; i < boundaries_for_CoffeeShop.length; i++){
            const boundary = boundaries_for_CoffeeShop[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player4,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x - 3,
                            y: boundary.position.y
                        }
                    }
                })
            ){
               
                moving4 = false
                break
            }
        }

        if(moving4 == true){
            // so this should only move the movable objects in the array we put above animate and should allow the collision blocks to stay in place
            coffee_shop_movables.forEach((movable) => {
            movable.position.x -= 3})
        }
        
       
       // console.log(background.position.x)
    }else{
        //keys.e.pressed = true
    }
} 

let use = false
let use2 = false
let useCoffee = true
let useGreenTea = true
function openMenu(){
    if(menuToggled == true){
        
        document.querySelector('#playersHUB').style.display = 'none'
        
        document.querySelector('#playersWallet').innerHTML = '$' + playerStats.playerMoney
        //document.querySelector('#menu').style.display = 'block'
        document.querySelector('#menuHUB').style.display = 'block'
        document.querySelector('#PlayersHealthLevel').innerHTML = 'Health level: ' + playerStats.playerHealth
        document.querySelector('#playersMagicLevel').innerHTML = 'Magic level: ' + playerStats.playerMagic
        document.querySelector('#PlayerInventCoffee').innerHTML = 'Coffee: ' + playerStats.playerCoffee
        document.querySelector('#playerInventGreenTea').innerHTML = 'Green Tea: ' + playerStats.playerGreenTea
        // document.querySelector('#coffeeButton').innerHTML = 'Use: Coffee' 
        // document.querySelector('#GreenTeaButton').innerHTML = 'Use: Green Tea'
       
        document.querySelectorAll('button').forEach(button => {
            useCoffee = true
            useGreenTea = true
            button.addEventListener('click', (e) =>{
                
                console.log(e.currentTarget.innerHTML)
                if(e.currentTarget.innerHTML == 'Use: Coffee' &&  playerStats.playerCoffee > 0 && useCoffee == true){
                    console.log(e.currentTarget.innerHTML)
                    playerStats.playerHealth = playerStats.playerHealth + 25
                    playerStats.playerCoffee = playerStats.playerCoffee - 1
                    useCoffee = false
                }else if(e.currentTarget.innerHTML == 'Use: Coffee'&&  playerStats.playerCoffee == 0){
                    return 
                 }
                if(e.currentTarget.innerHTML == 'Use: Green Tea' &&  playerStats.playerGreenTea > 0 && useGreenTea == true){
                    //console.log(e.currentTarget.innerHTML)
                    playerStats.playerHealth = playerStats.playerHealth + 25
                    playerStats.playerGreenTea = playerStats.playerGreenTea - 1
                    useGreenTea = false
                    
                }
            })
        })
        
    }else if(menuToggled == false){
        //document.querySelector('#menu').style.display = 'none'
        document.querySelector('#playersHUB').style.display = 'block'
        document.querySelector('#menuHUB').style.display = 'none'
       
       
    }

}
