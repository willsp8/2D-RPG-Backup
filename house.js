const offset2 = {
    x: -1050,
    y: -620
}
const offset3 = {
    x: 0,
    y: 0
}
const offset4 = {
    x: -700,
    y: -1500
}
const collisionsMapHouse = []
for (let i = 0; i < Collision_for_house.length; i+= 70){ 
    
    collisionsMapHouse.push(Collision_for_house.slice(i, 70 + i ))
    
}
const boundaries_for_house = []
collisionsMapHouse.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        if(Symbol == 872){
            
            boundaries_for_house.push(
                new Boundary4({
                    position: {
                        // this will subtract -1050 from the Boundary offset
                        x: j * Boundary4.width + offset4.x,
                        y: i * Boundary4.height + offset4.y
                    }
                })
            )
        }
            
    })
})

const houseBackgroundImage = new Image()
//houseBackgroundImage.src = './res/battleBackground.png'
houseBackgroundImage.src = './res/maps/players_room.png'
const playerDownImage2 = new Image()
// seting the image src to the image i want to use for the player
//playerDownImage2.src = './res/playerDown.png']
playerDownImage2.src = './res/playerRes/CDown2.png'

//all the lines of code create images for the player which are left right down and up. 
const playerUpImage2 = new Image()
playerUpImage2.src = './res/playerRes/CUp2.png'
const playerRightImage2 = new Image()
playerRightImage2.src = './res/playerRes/CRight2.png'
const playerLeftImage2 = new Image()
playerLeftImage2.src = './res/playerRes/CLeft2.png'

// cat 
const catUpImage = new Image()
catUpImage.src = './res/animals/catWalkUp.png'
const catDownImage = new Image()
catDownImage.src = './res/animals/catWalkDown.png'
const catRightImage = new Image()
catRightImage.src = './res/animals/catWalkRight.png'
const catLeftImage = new Image()
catLeftImage.src = './res/animals/catWalkLeft.png'
const catIdleImage = new Image()
catIdleImage.src = './res/animals/catIdle.png'

let houseAnimateId 


const leaveHouseMap = []
for (let i = 0; i < leave_house.length; i+= 70){ 
    
    leaveHouseMap.push(leave_house.slice(i, 70 + i ))
    
}

const boundaries_for_leaving_House = []
leaveHouseMap.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        if(Symbol == 872){
            
            boundaries_for_leaving_House.push(
                new Boundary4({
                    position: {
                        // this will subtract -1050 from the Boundary offset
                        x: j * Boundary4.width + offset4.x,
                        y: i * Boundary4.height + offset4.y
                    }
                })
            )
        }
            
    })
})

const testBoundary = new Boundary4({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) + 100, 
        y: (canvas.height / 2 - 68 / 2) + 100
    }
})

const testBoundary2 = new Boundary4({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) + 50, 
        y: (canvas.height / 2 - 68 / 2) 
    }
})
const testBoundary3 = new Boundary4({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 50, 
        y: (canvas.height / 2 - 68 / 2) 
    }
})
const testBoundary4 = new Boundary4({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) , 
        y: (canvas.height / 2 - 68 / 2) + 50
    }
})
const testBoundary5 = new Boundary4({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) , 
        y: (canvas.height / 2 - 68 / 2) - 50
    }
})

const houseBackground = new Sprite({
    position: {
        x: offset4.x,
        y: offset4.y
    },
    // seting the battleBackground to the image above 
    image: houseBackgroundImage
})
//x: (canvas.width / 2 - 192 / 4 / 2) + 100, 
//y: (canvas.height / 2 - 68 / 2) + 210
const player2 = new Sprite({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2), 
        y: (canvas.height / 2 - 68 / 2)
    }, 

    image: playerDownImage2, 
    frames: {
        max: 3,
        hold: 16
    },
    sprites: {
        up: playerUpImage2,
        down: playerDownImage2,
        left: playerLeftImage2,
        right: playerRightImage2
    }
    // this sets up the sprite so we can animate our player moving right, left and etc. 
})

const cat = new Sprite({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) + 700, 
        y: (canvas.height / 2 - 68 / 2) + 100
    }, 

    image: catIdleImage, 
    frames: {
        max: 4,
        hold: 9
    },
    sprites: {
        up: catUpImage,
        down: catDownImage,
        left: catLeftImage,
        right: catRightImage
    }
    // this sets up the sprite so we can animate our player moving right, left and etc. 
})
const catTestBoundary2 = new Boundary5({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) + 390, 
        y: (canvas.height / 2 - 68 / 2) + (45)
    }
})

const catAreaBoundary = new Boundary6({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) + 290, 
        y: (canvas.height / 2 - 68 / 2) - 50
    }
})

const catStartingPoint = new Boundary7({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) + 290, 
        y: (canvas.height / 2 - 68 / 2) + 50
    }
})

const catTestBoundary3 = new Boundary4({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) + 350, 
        y: (canvas.height / 2 - 68 / 2) + 100
    }
})
const catTestBoundary4 = new Boundary4({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) + 400, 
        y: (canvas.height / 2 - 68 / 2) + 150
    }
})
const catTestBoundary5 = new Boundary4({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) + 400, 
        y: (canvas.height / 2 - 68 / 2) + 100
    }
})
const cat2 = new Sprite({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) + 400, 
        y: (canvas.height / 2 - 68 / 2) + 50
    }, 

    image: catIdleImage, 
    frames: {
        max: 4,
        hold: 16
    },
    sprites: {
        up: catUpImage,
        down: catDownImage,
        left: catLeftImage,
        right: catRightImage
    }
    // this sets up the sprite so we can animate our player moving right, left and etc. 
})



let actionLockCounterCat_1 = 0
let actionLockCounterCat_12 = 0
let ALC1_1 = 0
let ALC2_2 = 0
let ALC3_3 = 0
let ALC4_4 = 0
let ALC5_5 = 0
let ALC6_6 = 0
let ALC7_7 = 0
let ALC8_8 = 0
let ALC9_9 = 0
let ALC1_10 = 0

const movables_house = [catStartingPoint, catAreaBoundary, catTestBoundary2, catTestBoundary3, catTestBoundary4, catTestBoundary5, cat2, cat, houseBackground, ...boundaries_for_house, testBoundary, ...boundaries_for_leaving_House]
const movable_cat = [catStartingPoint, catAreaBoundary, catTestBoundary2, catTestBoundary3, catTestBoundary4, catTestBoundary5, cat2, cat]
function rectangularCollisionHouse({rectangle1, rectangle2}){
    //if the right side of the player is greater than the left side of the red block than they are colliding 
    
    return(rectangle1.position.x + rectangle1.width >= rectangle2.position.x && 
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y)
        
    
}

function animatehouse(fps){
    //console.log('house')
    // code i put in to make sure that the interface is turned off when starting the game 
    document.querySelector('#userInterface').style.display = 'none'
    document.querySelector('#npcUserInterface').style.display = 'none'
    document.querySelector('#craftingInterface').style.display = 'none'
    document.querySelector('#inventory').style.display = 'none'
    document.querySelector('#librainanNPCInterface').style.display = 'none'
    document.querySelector('#officeNPCInterface').style.display = 'none'
    document.querySelector('#catNPCInterface').style.display = 'none'
    document.querySelector('#ComputerInterface').style.display = 'none'
    
    const houseAnimateId = window.requestAnimationFrame(animatehouse)
    console.log(houseAnimateId)
    houseBackground.draw()
    testBoundary.draw()
    catAreaBoundary.draw()
    catStartingPoint.draw()
    cat.drawAI()
    cat2.drawAI()
    let moving2 = true
    let movingCat2 = true
    boundaries_for_house.forEach((boundary) => {
        boundary.draw()
    })

    
    boundaries_for_leaving_House.forEach((boundary1) => {
        boundary1.draw()
    })

    // for computer
    
    if(rectangularCollision2({
        rectangle1: player2,
        //makes a clone of the boundary object 
        rectangle2: testBoundary,
        x: 0,
        y: 0
    })){
        if(keys.f.pressed == true){
            document.querySelector('#ComputerInterface').style.display = 'block' 
            moving2 = false
            
        }else{
            document.querySelector('#ComputerInterface').style.display = 'none' 
        }
    }else{
        document.querySelector('#ComputerInterface').style.display = 'none' 
    }
    
    
    player2.drawAI()
    catTestBoundary2.draw()
    player2.animate = false
    
    
    movable_cat.forEach(movable => {
        actionLockCounterCat_1 = actionLockCounterCat_1 + 1
        if(actionLockCounterCat_1 == 50){
            if(actionLockCounterCat_12 <= 9)
            {
                if(rectangularCollision2({
                    rectangle1: player2,
                    //makes a clone of the boundary object 
                    rectangle2: cat,
                    x: 30,
                    y: 0
                })
                ||
                rectangularCollision2({
                    rectangle1: player2,
                    //makes a clone of the boundary object 
                    rectangle2: cat,
                    x: -70,
                    y: 0
                })
                ||
                rectangularCollision2({
                    rectangle1: player2,
                    //makes a clone of the boundary object 
                    rectangle2: cat,
                    x: 0,
                    y: -30
                })
                ||
                rectangularCollision2({
                    rectangle1: player2,
                    //makes a clone of the boundary object 
                    rectangle2: cat,
                    x: 0,
                    y: 30
                })
                )
                {
                    if(rectangularCollision2({
                        rectangle1: player2,
                        //makes a clone of the boundary object 
                        rectangle2: cat,
                        x: 3,
                        y: 0
                    })
                    ||
                    rectangularCollision2({
                        rectangle1: player2,
                        //makes a clone of the boundary object 
                        rectangle2: cat,
                        x: -3,
                        y: 0
                    })
                    ||
                    rectangularCollision2({
                        rectangle1: player2,
                        //makes a clone of the boundary object 
                        rectangle2: cat,
                        x: 0,
                        y: -3
                    })
                    ||
                    rectangularCollision2({
                        rectangle1: player2,
                        //makes a clone of the boundary object 
                        rectangle2: cat,
                        x: 0,
                        y: 3
                    }))
                    {
                        if(keys.f.pressed == true){
                            document.querySelector('#catNPCInterface').style.display = 'block' 
                            console.log('we jusst want')
                        }else{
                            document.querySelector('#catNPCInterface').style.display = 'none' 
                        }
                    }else{
                        document.querySelector('#catNPCInterface').style.display = 'none' 
                    }
                }else if(rectangularCollision2({
                    rectangle1: player2,
                    //makes a clone of the boundary object 
                    rectangle2: cat,
                    x: 30,
                    y: 0
                }) == false
                ||
                rectangularCollision2({
                    rectangle1: player2,
                    //makes a clone of the boundary object 
                    rectangle2: cat,
                    x: -70,
                    y: 0
                }) == false
                ||
                rectangularCollision2({
                    rectangle1: player2,
                    //makes a clone of the boundary object 
                    rectangle2: cat,
                    x: 0,
                    y: -30
                }) == false
                ||
                rectangularCollision2({
                    rectangle1: player2,
                    //makes a clone of the boundary object 
                    rectangle2: cat,
                    x: 0,
                    y: 30
                }) == false
                ){
                    cat.animate = true
                    cat.image = cat.sprites.right
                    cat.animate = true
                    cat.position.x += 12
                    actionLockCounterCat_12 = actionLockCounterCat_12 + 1
                }
                
            }else if(actionLockCounterCat_12 > 9 && actionLockCounterCat_12 <= 19){
                if(rectangularCollision2({
                    rectangle1: player2,
                    //makes a clone of the boundary object 
                    rectangle2: cat,
                    x: 30,
                    y: 0
                }))
                {
                    if(rectangularCollision2({
                        rectangle1: player2,
                        //makes a clone of the boundary object 
                        rectangle2: cat,
                        x: 3,
                        y: 0
                    })
                    ||
                    rectangularCollision2({
                        rectangle1: player2,
                        //makes a clone of the boundary object 
                        rectangle2: cat,
                        x: -3,
                        y: 0
                    })
                    ||
                    rectangularCollision2({
                        rectangle1: player2,
                        //makes a clone of the boundary object 
                        rectangle2: cat,
                        x: 0,
                        y: -3
                    })
                    ||
                    rectangularCollision2({
                        rectangle1: player2,
                        //makes a clone of the boundary object 
                        rectangle2: cat,
                        x: 0,
                        y: 3
                    }))
                    {
                        if(keys.f.pressed == true){
                            document.querySelector('#catNPCInterface').style.display = 'block' 
                            console.log('we jusst want')
                        }else{
                            document.querySelector('#catNPCInterface').style.display = 'none' 
                        }
                    }else{
                        document.querySelector('#catNPCInterface').style.display = 'none' 
                    }
                }else if(rectangularCollision2({
                    rectangle1: player2,
                    //makes a clone of the boundary object 
                    rectangle2: cat,
                    x: -30,
                    y: 0
                }) == false){
                    
                    cat.animate = true
                    cat.image = cat.sprites.left
                    cat.animate = true
                    cat.position.x -= 12
                    actionLockCounterCat_12 = actionLockCounterCat_12 + 1
                }
            }else{
                if(rectangularCollision2({
                    rectangle1: player2,
                    //makes a clone of the boundary object 
                    rectangle2: cat,
                    x: 30,
                    y: 0
                }) == false
                ||
                rectangularCollision2({
                    rectangle1: player2,
                    //makes a clone of the boundary object 
                    rectangle2: cat,
                    x: -70,
                    y: 0
                }) == false
                ||
                rectangularCollision2({
                    rectangle1: player2,
                    //makes a clone of the boundary object 
                    rectangle2: cat,
                    x: 0,
                    y: -30
                }) == false
                ||
                rectangularCollision2({
                    rectangle1: player2,
                    //makes a clone of the boundary object 
                    rectangle2: cat,
                    x: 0,
                    y: 30
                }) == false){
                    actionLockCounterCat_12 = 0 
                }
                if(rectangularCollision2({
                    rectangle1: player2,
                    //makes a clone of the boundary object 
                    rectangle2: cat,
                    x: 3,
                    y: 0
                })
                ||
                rectangularCollision2({
                    rectangle1: player2,
                    //makes a clone of the boundary object 
                    rectangle2: cat,
                    x: -3,
                    y: 0
                })
                ||
                rectangularCollision2({
                    rectangle1: player2,
                    //makes a clone of the boundary object 
                    rectangle2: cat,
                    x: 0,
                    y: -3
                })
                ||
                rectangularCollision2({
                    rectangle1: player2,
                    //makes a clone of the boundary object 
                    rectangle2: cat,
                    x: 0,
                    y: 3
                }))
                {
                    if(keys.f.pressed == true){
                        document.querySelector('#catNPCInterface').style.display = 'block' 
                        console.log('we jusst want')
                    }else{
                        document.querySelector('#catNPCInterface').style.display = 'none' 
                    }
                }else{
                    document.querySelector('#catNPCInterface').style.display = 'none' 
                }
                
            }
            actionLockCounterCat_1 = 0 
        }

    })

    // collision between boundaries and cat2
        // for (let i = 0; i < boundaries_for_house.length; i++){
        //     const boundary = boundaries_for_house[i]
        //     if(
        //         rectangularCollisionHouse({
        //             rectangle1: cat2,
        //             //makes a clone of the boundary object 
        //             rectangle2: {
        //                 ...boundary, 
        //                 position: {
        //                     x: boundary.position.x + 3,
        //                     y: boundary.position.y
        //                 }
        //             }
        //         })
        //     ){
        //         console.log('dont move cat')
        //         movingCat2 = false
        //         //cat2.position.x -= 4
        //         break
        //     }

        //     if(
        //         rectangularCollisionHouse({
        //             rectangle1: cat2,
        //             //makes a clone of the boundary object 
        //             rectangle2: {
        //                 ...boundary, 
        //                 position: {
        //                     x: boundary.position.x - 3,
        //                     y: boundary.position.y
        //                 }
        //             }
        //         })
        //     ){
            
        //         movingCat2 = false
        //         //cat2.position.x += 4
        //         console.log('dont move cat ')
        //         break
        //     }
        //     if(
        //         rectangularCollisionHouse({
        //             rectangle1: cat2,
        //             //makes a clone of the boundary object 
        //             rectangle2: {
        //                 ...boundary, 
        //                 position: {
        //                     x: boundary.position.x,
        //                     y: boundary.position.y - 3
        //                 }
        //             }
        //         })
        //     ){
            
        //         movingCat2 = false
        //         //cat2.position.y += 4
        //         console.log('dont move cat')
        //         break
        //     }
        //     if(
        //         rectangularCollisionHouse({
        //             rectangle1: cat2,
        //             //makes a clone of the boundary object 
        //             rectangle2: {
        //                 ...boundary, 
        //                 position: {
        //                     x: boundary.position.x ,
        //                     y: boundary.position.y + 3
        //                 }
        //             }
        //         })
        //     ){
            
        //         movingCat2 = false
        //         //cat2.position.y -= 4
        //         console.log('dont move cat')
        //         break
        //     }
            
        // }
    
    
    // collision between enemies weapon and player feature
        enemyAttack(player2, catTestBoundary2, movingCat2)
        

    //cat2 movement feature
        const angle = Math.atan2(player2.position.y - cat2.position.y, player2.position.x - cat2.position.x )
        const angle2 = Math.atan2(catStartingPoint.position.y - cat2.position.y, catStartingPoint.position.x - cat2.position.x )
        movable_cat.forEach(move =>{
            enemyAI(player2, cat2, catTestBoundary2, catAreaBoundary, catStartingPoint, movingCat2, angle, angle2)
        })
        
    
    // player attack to enemy feature
    playerAttack(player2, cat2, catTestBoundary2, catAreaBoundary, testBoundary, movingCat2)
       

    
        
    // health for enemy and player feature   
        if(enemyStats.ememyHealth <= 0 && cat2.position.x != 1200 ){
            cat2.position.x = 1200
            catTestBoundary2.position.x = 1200
            catAreaBoundary.position.x = 1200
            console.log('enemy has died')
            
        }else if(playerStats.playerHealth <= 0)
        {   
            console.log('player has died')
        }

    

    if(keys.w.pressed == true && lastKey == 'w') {
        
        player2.animate = true
        player2.image = player2.sprites.up

        if( rectangularCollision2({
            rectangle1: player2,
            //makes a clone of the boundary object 
            rectangle2: cat,
            x: 0,
            y: 3
        })
            
        ){
            moving2 = false
            cat.image = cat.sprites.down
        }

        // moving is true run the lines of code below
        for (let i = 0; i < boundaries_for_house.length; i++){
            const boundary = boundaries_for_house[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player2,
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
               
                moving2 = false
                break
            }
        }
      
        
        if(moving2 == true){
            // so this should only move the movable objects in the array we put above animate and should allow the collision blocks to stay in place
            movables_house.forEach((movable) => {
            movable.position.y += 3})
            
        }
                
        
    }else if (keys.s.pressed == true && lastKey == 's') {
        player2.animate = true
        player2.image = player2.sprites.down

        if( rectangularCollision2({
            rectangle1: player2,
            //makes a clone of the boundary object 
            rectangle2: cat,
            x: 0,
            y: -3
        })
            
        ){
            moving2 = false
            cat.image = cat.sprites.down
        }

        for (let i = 0; i < boundaries_for_house.length; i++){
            const boundary = boundaries_for_house[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player2,
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
                
                moving2 = false
                break
            }
        }

        //for leaving 
        for (let i = 0; i < boundaries_for_leaving_House.length; i++){
            const boundary = boundaries_for_leaving_House[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player2,
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
                window.cancelAnimationFrame(houseAnimateId)
                animateTown()
                moving2 = false
                break
            }
        }
        
        // moving is true run the lines of code below
        if(moving2 == true){
            // so this should only move the movable objects in the array we put above animate and should allow the collision blocks to stay in place
            movables_house.forEach(movable => {
            movable.position.y -= 3})
        //console.log(background.position.y)
        }
        
        
    }else if(keys.a.pressed == true && lastKey == 'a') {
        player2.animate = true
        player2.image = player2.sprites.left

        if( rectangularCollision2({
            rectangle1: player2,
            //makes a clone of the boundary object 
            rectangle2: cat,
            x: 2.8,
            y: 0
        })
            
        ){
            moving2 = false
            cat.image = cat.sprites.down
        }

        for (let i = 0; i < boundaries_for_house.length; i++){
            const boundary = boundaries_for_house[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player2,
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
               
                moving2 = false
                break
            }
        }
        
        // moving is true run the lines of code below
        if(moving2 == true){
            // so this should only move the movable objects in the array we put above animate and should allow the collision blocks to stay in place
            movables_house.forEach(movable => {
            movable.position.x += 3})
        }
        
        
        //console.log(background.position.x)
    }else if(keys.d.pressed == true && lastKey == 'd') {
        player2.animate = true
        player2.image = player2.sprites.right

        if( rectangularCollision2({
            rectangle1: player2,
            //makes a clone of the boundary object 
            rectangle2: cat,
            x: -2.8,
            y: 0
        })
            
        ){
            moving2 = false
            cat.image = cat.sprites.up
        }

        for (let i = 0; i < boundaries_for_house.length; i++){
            const boundary = boundaries_for_house[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player2,
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
               
                moving2 = false
                break
            }
        }
        // moving is true run the lines of code below
        if(moving2 == true){
            // so this should only move the movable objects in the array we put above animate and should allow the collision blocks to stay in place
            movables_house.forEach(movable => {
            movable.position.x -= 3})
        }
        
       
       // console.log(background.position.x)
    }

    
}

function enemyAttack(player, testBoundary, moving ){
    if(rectangularCollision2({
        rectangle1: player,
        //makes a clone of the boundary object 
        rectangle2: testBoundary,
        x: 6,
        y: 0
    }))
    {
        moving = false
        
        console.log('player hit')
        ALC3_3 = ALC3_3 + 1
        if(ALC3_3 == 50 ){
            
            if(ALC4_4  <= 9 ){
                testBoundary.draw()
                playerStats.playerHealth = playerStats.playerHealth - 1
                ALC4_4 = ALC4_4 + 1
            }else{
                ALC4_4 = 0
            }
            ALC3_3 = 0
        }
            
        // cat2.position.x -= 5
        // testBoundary.position.x -= 5
    }else if(rectangularCollision2({
        rectangle1: testBoundary,
        //makes a clone of the boundary object 
        rectangle2: player,
        x: -6,
        y: 0
    }))
    {
        moving = false
        ALC5_5 = ALC5_5 + 1
        if(ALC5_5 == 50 ){
            
            if(ALC6_6  <= 9 ){
                testBoundary.draw()
                playerStats.playerHealth = playerStats.playerHealth - 1
                ALC6_6 = ALC6_6 + 1
            }else{
                ALC6_6 = 0
            }
            ALC5_5 = 0
        }
        
        // cat2.position.x += 5
        // testBoundary.position.x += 5
    } else if(rectangularCollision2({
        rectangle1: testBoundary,
        //makes a clone of the boundary object 
        rectangle2: player,
        x: 0,
        y: 6
    }))
    {   
        moving = false
        console.log('player hit')
        ALC7_7 = ALC7_7 + 1
        if(ALC7_7 == 50 ){
            
            if(ALC8_8  <= 9 ){
                testBoundary.draw()
                playerStats.playerHealth = playerStats.playerHealth - 1
                ALC8_8 = ALC8_8 + 1
            }else{
                ALC8_8 = 0
            }
            ALC7_7 = 0
        }
        
        // cat2.position.y -= 5
        // testBoundary.position.y -= 5
    }else if(rectangularCollision2({
        rectangle1: testBoundary,
        //makes a clone of the boundary object 
        rectangle2: player,
        x: 0,
        y: -6
    }))
    {
        moving = false
        console.log('player hit')
        ALC9_9 = ALC9_9 + 1
        if(ALC9_9 == 50 ){
            
            if(ALC1_10  <= 9 ){
                testBoundary.draw()
                playerStats.playerHealth = playerStats.playerHealth - 1
                ALC1_10 = ALC1_10 + 1
            }else{
                ALC1_10 = 0
            }
            ALC9_9 = 0
        }
        // cat2.position.y += 5
        // testBoundary.position.y += 5
    }else{
         ALC3_3 = 0
        ALC4_4 = 0
        ALC5_5 = 0
        ALC6_6 = 0
        ALC7_7 = 0
        ALC8_8 = 0
        ALC9_9 = 0
        ALC1_10 = 0
    }
}

function enemyAI(player, enemy, testBoundary, areaBoundary, enemystartingpoint, moving, angle, angle2){
    ALC1_1 = ALC1_1 + 1;

            if(ALC1_1 == 50 ){
                
                if(ALC2_2  <= 9 && moving == true){
                    
                    if(rectangularCollision2({
                        rectangle1: player,
                        //makes a clone of the boundary object 
                        rectangle2: areaBoundary,
                        x: 0,
                        y: 0
                    }))
                    {
                        if(angle >= 1.7 && angle < 3.2)
                        {
                            enemy.position.x -= angle
                            enemy.position.y += angle
                            //attack 
                            testBoundary.position.x -= angle
                            testBoundary.position.y += angle
                        
                            //area to start following player
                            areaBoundary.position.x -= angle
                            areaBoundary.position.y += angle
                            console.log('on  3')
                        }else if(angle <= -1 && angle < -1.7)
                        {
                            enemy.position.x += angle
                            enemy.position.y += angle
                            // attack
                             testBoundary.position.x += angle
                             testBoundary.position.y += angle
                            //area
                            areaBoundary.position.x += angle
                            areaBoundary.position.y += angle
                            console.log('on  2')
                        }
                        if(angle >= -1.7 && angle < -.01)
                        {
                            console.log('on  1')
                            enemy.position.x -= angle - 3
                            enemy.position.y += angle 
                            //attack 
                             testBoundary.position.x -= angle - 3
                             testBoundary.position.y += angle
                            // area
                            areaBoundary.position.x -= angle - 3
                            areaBoundary.position.y += angle
                        }else if(angle >= -.01 && angle < 1.7){
                            enemy.position.x += angle + 2
                            enemy.position.y += angle + 2
                            //attack
                             testBoundary.position.x += angle + 2
                             testBoundary.position.y += angle + 2
                            // area
                            areaBoundary.position.x += angle + 2
                            areaBoundary.position.y += angle + 2

                            console.log('on  4')
                        }
                        //for the starting point
                    }else if(rectangularCollision2({
                        rectangle1: enemystartingpoint,
                        //makes a clone of the boundary object 
                        rectangle2: enemy,
                        x: 0,
                        y: 0
                    }) == false)
                    {
                        if(angle2 >= 1.7 && angle2 < 3.2)
                        {
                            enemy.position.x -= angle2
                            enemy.position.y += angle2
                            //attack 
                             testBoundary.position.x -= angle2
                             testBoundary.position.y += angle2
                        
                            //area to start following player
                            areaBoundary.position.x -= angle2
                            areaBoundary.position.y += angle2
                            console.log('on  3')
                        }else if(angle2 <= -1 && angle2 < -1.7)
                        {
                            enemy.position.x += angle2
                            enemy.position.y += angle2
                            // attack
                             testBoundary.position.x += angle2
                             testBoundary.position.y += angle2
                            //area
                            areaBoundary.position.x += angle2
                            areaBoundary.position.y += angle2
                            console.log('on  2')
                        }
                        if(angle2 >= -1.7 && angle2 < -.01)
                        {
                            console.log('on  1')
                            enemy.position.x -= angle2 - 3
                            enemy.position.y += angle2 
                            //attack 
                             testBoundary.position.x -= angle2 - 3
                             testBoundary.position.y += angle2
                            // area
                            areaBoundary.position.x -= angle2 - 3
                            areaBoundary.position.y += angle2
                        }else if(angle2 >= -.01 && angle2 < 1.7){
                            enemy.position.x += angle2 + 2
                            enemy.position.y += angle2 + 2
                            //attack
                             testBoundary.position.x += angle2 + 2
                             testBoundary.position.y += angle2 + 2
                            // area
                            areaBoundary.position.x += angle2 + 2
                            areaBoundary.position.y += angle2 + 2

                            console.log('on  4')
                        }
                    }else if(
                        rectangularCollision2({
                            rectangle1: enemystartingpoint,
                            //makes a clone of the boundary object 
                            rectangle2: enemy,
                            x: 0,
                            y: 0
                        })
                    ){
                        enemy.position.x += 9
                            
                            //attack 
                             testBoundary.position.x += 9
                            
                        
                            //area to start following player
                            areaBoundary.position.x += 9
                            
                    }
                    
                    
                    
                    //  testBoundary.position.x -= 12
                    //areaBoundary.position.x -= 12
                    // catTestBoundary3.position.x -= 12
                    // catTestBoundary4.position.x -= 12
                    // catTestBoundary5.position.x -= 12
                    
                    ALC2_2 = ALC2_2 + 1
                }else if(ALC2_2 > 9 &&  ALC2_2 <= 19 && moving == true){
                    // this gets the bottom left corner
                    // if(angle < -2){
                    //     enemy.position.x += angle
                    // }else if(angle >= 0){
                    //     enemy.position.y += angle
                    // }else if(angle > 0 ){
                    //     enemy.position.y -= angle
                    // }
                    if(rectangularCollision2({
                        rectangle1: player,
                        //makes a clone of the boundary object 
                        rectangle2: areaBoundary,
                        x: 0,
                        y: 0
                    }))
                    {
                        if(angle >= 1.7 && angle < 3.2)
                        {
                            enemy.position.x -= angle
                            enemy.position.y += angle
                            //attack 
                             testBoundary.position.x -= angle
                             testBoundary.position.y += angle
                        
                            //area to start following player
                            areaBoundary.position.x -= angle
                            areaBoundary.position.y += angle
                            console.log('on  3')
                        }else if(angle <= -1 && angle < -1.7)
                        {
                            enemy.position.x += angle
                            enemy.position.y += angle
                            // attack
                             testBoundary.position.x += angle
                             testBoundary.position.y += angle
                            //area
                            areaBoundary.position.x += angle
                            areaBoundary.position.y += angle
                            console.log('on  2')
                        }
                        if(angle >= -1.7 && angle < -.01)
                        {
                            console.log('on  1')
                            enemy.position.x -= angle - 3
                            enemy.position.y += angle 
                            //attack 
                             testBoundary.position.x -= angle - 3
                             testBoundary.position.y += angle
                            // area
                            areaBoundary.position.x -= angle - 3
                            areaBoundary.position.y += angle
                        }else if(angle >= -.01 && angle < 1.7){
                            enemy.position.x += angle + 2
                            enemy.position.y += angle + 2
                            //attack
                             testBoundary.position.x += angle + 2
                             testBoundary.position.y += angle + 2
                            // area
                            areaBoundary.position.x += angle + 2
                            areaBoundary.position.y += angle + 2

                            console.log('on  4')
                        }
                    }else if(rectangularCollision2({
                        rectangle1: enemystartingpoint,
                        //makes a clone of the boundary object 
                        rectangle2: enemy,
                        x: 0,
                        y: 0
                    }) == false)
                    {
                        if(angle2 >= 1.7 && angle2 < 3.2)
                        {
                            enemy.position.x -= angle2
                            enemy.position.y += angle2
                            //attack 
                             testBoundary.position.x -= angle2
                             testBoundary.position.y += angle2
                        
                            //area to start following player
                            areaBoundary.position.x -= angle2
                            areaBoundary.position.y += angle2
                            console.log('on  3')
                        }else if(angle2 <= -1 && angle2 < -1.7)
                        {
                            enemy.position.x += angle2
                            enemy.position.y += angle2
                            // attack
                             testBoundary.position.x += angle2
                             testBoundary.position.y += angle2
                            //area
                            areaBoundary.position.x += angle2
                            areaBoundary.position.y += angle2
                            console.log('on  2')
                        }
                        if(angle2 >= -1.7 && angle2 < -.01)
                        {
                            console.log('on  1')
                            enemy.position.x -= angle2 - 3
                            enemy.position.y += angle2 
                            //attack 
                             testBoundary.position.x -= angle2 - 3
                             testBoundary.position.y += angle2
                            // area
                            areaBoundary.position.x -= angle2 - 3
                            areaBoundary.position.y += angle2
                        }else if(angle2 >= -.01 && angle2 < 1.7){
                            enemy.position.x += angle2 + 2
                            enemy.position.y += angle2 + 2
                            //attack
                             testBoundary.position.x += angle2 + 2
                             testBoundary.position.y += angle2 + 2
                            // area
                            areaBoundary.position.x += angle2 + 2
                            areaBoundary.position.y += angle2 + 2

                            console.log('on  4')
                        }
                    }else if(
                        rectangularCollision2({
                            rectangle1: enemystartingpoint,
                            //makes a clone of the boundary object 
                            rectangle2: enemy,
                            x: 0,
                            y: 0
                        })
                    ){
                        enemy.position.x -= 9
                            
                            //attack 
                             testBoundary.position.x -= 9
                            
                            //area to start following player
                            areaBoundary.position.x -= 9
                            
                    }


                    // add if statemetn for when the player is at front and ect so if(angle > 1.5 && angle <1.7)
                    // than more to the right or left 
                    
                    
                    //  testBoundary.position.x += 12
                    // catTestBoundary3.position.x += 12
                    // catTestBoundary4.position.x += 12
                    // catTestBoundary5.position.x += 12
                    //areaBoundary.position.x += 12 
                    ALC2_2 = ALC2_2 + 1
                }else{
                    
                    ALC2_2 = 0
                }
                ALC1_1 = 0
            }
}

function playerAttack(player, enemy, enmeySword, enemyArea, playerSword, moving){
    if(keys.space.pressed == true){
        // note we need to change some things 
        if(player.image == player.sprites.right){
            playerSword.draw()
            if(rectangularCollision2({
                rectangle1: playerSword,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })){       
                        if(moving == true){
                           
                            enemy.position.x += .1
                            enmeySword.position.x += .1
                           enemyArea.position.x += .1
                            enemyStats.ememyHealth = enemyStats.ememyHealth - 1
                            console.log('hit up ')  
                        }
                        
                
                }
            
            
        }
        if(player.image == player.sprites.left){
            testBoundary3.draw()
            if(rectangularCollision2({
                rectangle1: testBoundary3,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })){
                //note to self this makes the cat move towards the right away from the player like link between worlds
                //note this then makes the the console log hit or go 4 to 5 times which should help with the rest of the stuff also create collsion for cat and boundies
                    if(moving == true){
                        
                        enemy.position.x -= 3
                        enmeySword.position.x -= 3
                       enemyArea.position.x -= 3
                        enemyStats.ememyHealth = enemyStats.ememyHealth - 1
                        console.log('hit up ')  
                    }
                        
                }

                
            
            
        }
        if(player.image == player.sprites.up){
            testBoundary5.draw()
            if(rectangularCollision2({
                rectangle1: testBoundary5,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })){
                if(moving == true){
                    
                    enemy.position.y -= 3
                    enmeySword.position.y -= 3
                   enemyArea.position.y -= 3
                    enemyStats.ememyHealth = enemyStats.ememyHealth - 1
                    console.log('hit up ') 
                }
                    
            }
        }
        if(player.image == player.sprites.down){
            testBoundary4.draw()
            if(rectangularCollision2({
                rectangle1: testBoundary4,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })){
                
                
                if(moving == true){
                    
                    enemy.position.y += 3
                    enmeySword.position.y += 3
                   enemyArea.position.y += 3
                    enemyStats.ememyHealth = enemyStats.ememyHealth - 1
                    console.log('hit up ') 
                }
        
            }
        }
    

    }
}

//so whenever a key is pushed down than it will call what ever is in the () => {
// part of the code also in the (e) basicallly adding an event object 
// window.addEventListener('keydown', (e) => {
//     console.log(e.key)
//     // making an switch case statment 
//     switch(e.key){
//         case 'w':
//             // so when w is pressed it will set our keys const w to true instead of being false
//             keys.w.pressed = true
//             lastKey = 'w'
//             console.log('w pressed')
//             break
//         case 'a':
//             keys.a.pressed = true
//             lastKey = 'a'
//             break
//         case 'd':
//             keys.d.pressed = true
//             lastKey = 'd'
//             break
//         case 's':
//             keys.s.pressed = true
//             lastKey = 's'
//             break  
//         case 'f':
//             // we dont need to have lastkey for f becauses
//             keys.f.pressed = true
//             lastKey = 'f'
//             break     
//         case 'q':
//             // we dont need to have lastkey for f becauses
//             keys.q.pressed = true
            
//             break
//         case 'e':
//             // we dont need to have lastkey for f becauses
//             keys.e.pressed = true
//             keys.q.pressed = false
//             if(gamePaused == true){
//                 //window.cancelAnimationFrame(animationId)
//                 animate()
//                 gamePaused = false
//             }    
//             break  
//         case 'r':
//             keys.r.pressed = true
//             keys.f.pressed = false     
//     }
// })

// //this will listen for when the key is up and will set the keys const statement above to false
// window.addEventListener('keyup', (e) => {
//     //console.log(e.key)
//     // making an switch case statment 
//     switch(e.key){
//         case 'w':
//             // so when w is pressed it will set our keys const w back to false 
//             keys.w.pressed = false
//             console.log('w lifted')
//             break
//         case 'a':
//             keys.a.pressed = false
//             break
//         case 'd':
//             keys.d.pressed = false
//             break
//         case 's':
//             keys.s.pressed = false
//             break
//         case 'f':
//             //keys.f.pressed = false
//             break     
//         case 'q':
            
//             break     
//     }
// })