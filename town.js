


const offset5 = {
    x: -1700,
    y: -1700
}

const offset6 = {
    x: -2080,
    y: -2500
}

function changeOffSet(x1, y1){
    console.log(x1)
    offset5.x = x1
    offset5.y = y1
    console.log(offset5.x)
}


console.log(townEnmeny3)
const townBackgroundImage = new Image()
//houseBackgroundImage.src = './res/battleBackground.png'
townBackgroundImage.src = './res/maps/ice_town_map.png'
// player
const playerDownImage3 = new Image()
playerDownImage3.src = './res/playerRes/CDown2.png'
const playerUpImage3 = new Image()
playerUpImage3.src = './res/playerRes/CUp2.png'
const playerRightImage3 = new Image()
playerRightImage3.src = './res/playerRes/CRight2.png'
const playerLeftImage3 = new Image()
playerLeftImage3.src = './res/playerRes/CLeft2.png'
//enemy
const enemyDownImage1 = new Image()
// seting the image src to the image i want to use for the player
//playerDownImage2.src = './res/playerDown.png']
enemyDownImage1.src = './res/playerRes/EmDown.png'
const enemyUpImage1 = new Image()
enemyUpImage1.src = './res/playerRes/EmDown.png'
const enemyRightImage1 = new Image()
enemyRightImage1.src = './res/playerRes/EmDown.png'
const enemyLeftImage1 = new Image()
enemyLeftImage1.src = './res/playerRes/EmDown.png'

const townBattleZoneMap = []
for (let i = 0; i < townBattleZone.length; i+= 120){ 
    townBattleZoneMap.push(townBattleZone.slice(i, 120 + i ))
}
const townBattleZones = []
townBattleZoneMap.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        if(Symbol == 1){
            
            townBattleZones.push(
                new Boundary4({
                    position: {
                        // this will subtract -1050 from the Boundary offset
                        x: j * Boundary4.width + offset5.x,
                        y: i * Boundary4.height + offset5.y
                    }
                })
            )
        }
            
    })
})

const collisionMapTown = [] 
for (let i = 0; i < collision_for_town.length; i+= 120){ 
    
    collisionMapTown.push(collision_for_town.slice(i, 120 + i ))
    
}
const boundaries_for_town = []
collisionMapTown.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        if(Symbol == 872){
            
            boundaries_for_town.push(
                new Boundary4({
                    position: {
                        // this will subtract -1050 from the Boundary offset
                        x: j * Boundary4.width + offset5.x,
                        y: i * Boundary4.height + offset5.y
                    }
                })
            )
        }
            
    })
})

const enterLibraryMap = []
for (let i = 0; i < enter_libary.length; i+= 120){ 
    
    enterLibraryMap.push(enter_libary.slice(i, 120 + i ))
    
}

const boundaries_for_entering_library = []
enterLibraryMap.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        if(Symbol == 872){
            
            boundaries_for_entering_library.push(
                new Boundary4({
                    position: {
                        // this will subtract -1050 from the Boundary offset
                        x: j * Boundary4.width + offset5.x,
                        y: i * Boundary4.height + offset5.y
                    }
                })
            )
        }
            
    })
})

//cafe start 
const enterCafeMap = []
for (let i = 0; i < enter_cafe.length; i+= 120){ 
    
    enterCafeMap.push(enter_cafe.slice(i, 120 + i ))
    
}

const boundaries_for_entering_cafe = []
enterCafeMap.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        if(Symbol == 872){
            
            boundaries_for_entering_cafe.push(
                new Boundary4({
                    position: {
                        // this will subtract -1050 from the Boundary offset
                        x: j * Boundary4.width + offset5.x,
                        y: i * Boundary4.height + offset5.y
                    }
                })
            )
        }
            
    })
})
// cafe end 

// house start
const enterHouseMap = []
for (let i = 0; i < enter_house.length; i+= 120){ 
    
    enterHouseMap.push(enter_house.slice(i, 120 + i ))
    
}

const boundaries_for_entering_house = []
enterHouseMap.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        if(Symbol == 872){
            
            boundaries_for_entering_house.push(
                new Boundary4({
                    position: {
                        // this will subtract -1050 from the Boundary offset
                        x: j * Boundary4.width + offset5.x,
                        y: i * Boundary4.height + offset5.y
                    }
                })
            )
        }
            
    })
})
//house end 

const townBackground = new Sprite({
    position: {
        x: offset5.x,
        y: offset5.y
    },
    // seting the battleBackground to the image above 
    image: townBackgroundImage
})

const townEnmeny1 = new Sprite({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 500, 
        y: (canvas.height / 2 - 68 / 2) + 100
    },
    image: enemyDownImage1,
    frames: {
        max: 3,
        hold: 3
    },
    
    sprites: {
        up: enemyUpImage1,
        down: enemyDownImage1,
        left: enemyLeftImage1,
        right: enemyRightImage1
    }
})

const townEnmeny2 = new Sprite({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 500, 
        y: (canvas.height / 2 - 68 / 2) + 400
    },
    image: enemyDownImage1,
    frames: {
        max: 3,
        hold: 3
    },
    
    sprites: {
        up: enemyUpImage1,
        down: enemyDownImage1,
        left: enemyLeftImage1,
        right: enemyRightImage1
    }
})

const player3 = new Sprite({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2), 
        y: (canvas.height / 2 - 68 / 2)
    }, 

    image: playerDownImage3, 
    frames: {
        max: 3,
        hold: 3
    },
    sprites: {
        up: playerUpImage3,
        down: playerDownImage3,
        left: playerLeftImage3,
        right: playerRightImage3
    }
    // this sets up the sprite so we can animate our player moving right, left and etc. 
})

const playerSwordR = new Boundary8({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) + 50, 
        y: (canvas.height / 2 - 68 / 2)  - 50
    }
})
const playerSwordL = new Boundary8({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) - 50, 
        y: (canvas.height / 2 - 68 / 2) - 50
    }
})
const playerSwordD = new Boundary4({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2), 
        y: (canvas.height / 2 - 68 / 2) + 50
    }
})
const playerSwordU = new Boundary4({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) , 
        y: (canvas.height / 2 - 68 / 2) - 50
    }
})

const playerFireBall = new Boundary4({
    position: {
        x: (canvas.width / 2 - 192 / 4 / 2) , 
        y: (canvas.height / 2 - 68 / 2) - 50
    }
})



const battle2 = {
    initiated: false
}
let enemyStat3 = {
    ememyHealth: 25
}
let enemyStat4 = {
    ememyHealth: 25
}

let enemyStats = {
    ememyHealth: 25
}

let actionLockCounterCat = 0
let actionLockCounterCat2 = 0
let ALC1 = 0
let ALC2 = 0
let ALC3 = 0
let ALC4 = 0
let ALC5 = 0
let ALC6 = 0
let ALC7 = 0
let ALC8 = 0
let ALC9 = 0
let ALC10 = 0

let ALCShift = 0
let ALCShift2 = 0

let ALCControl = 0
let ALCControl2 = 0

let ALCFireBall = 0
let ALCFireBall2 = 0

let coolDownDone = false 
let shiftAllowed = false 
let spinMoveCoolDown = false

const town_movables = [ playerFireBall, townEnmeny3, townEnmeny4, TestBoundary3, AreaBoundary3, StartingPoint3, TestBoundary4, AreaBoundary4, StartingPoint4, 
    ...townBattleZones, townEnmeny2, townEnmeny1, townBackground, ...boundaries_for_town, ...boundaries_for_entering_library, ...boundaries_for_entering_cafe, ...boundaries_for_entering_house]
const movable_enemy1 = [townEnmeny2, townEnmeny1,  townEnmeny4, TestBoundary3,  TestBoundary4, AreaBoundary4, StartingPoint4]
const movable_enemy2 = [ townEnmeny3,  TestBoundary3, AreaBoundary3, StartingPoint3,]
const movableFireBall = [playerFireBall]
function rectangularCollisionHouse({rectangle1, rectangle2}){
    //if the right side of the player is greater than the left side of the red block than they are colliding 
    
    return(rectangle1.position.x + rectangle1.width >= rectangle2.position.x && 
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y)
        
    
}
let leave_library_timer = 0
let actionLockCounter1 = 0
let actionLockCounter2 = 0
let townEnemyDead = false
let townEnemyDead2 = false
let runfire = false
let toggledFireBall = false
let toggledFireBallD = false
let toggledFireBallR = false
let toggledFireBallL
let toggledFireBallU = false

let leftDone = false
let rightDone = false
let upDone = false
let downDone = false


function animateTown(){
    const townAnimateId =  window.requestAnimationFrame(animateTown)
   
    
    townBackground.draw()
    townBattleZones.forEach((boundary) => {
        boundary.draw()
    })

    boundaries_for_town.forEach((boundary) => {
        boundary.draw()
    })
    
    boundaries_for_entering_library.forEach((boundary) => {
        boundary.draw()
    })

    boundaries_for_entering_cafe.forEach((boundary) => {
        boundary.draw()
    })

    boundaries_for_entering_house.forEach((boundary) => {
        boundary.draw()
    })
   //townEnmeny1.drawAI()
   // townEnmeny2.drawAI()
    
    //player.drawAI()

    AreaBoundary3.draw()
    TestBoundary3.draw()
    StartingPoint3.draw()
    townEnmeny3.draw()
    //playerSwordR.draw()
    // AreaBoundary4.draw()
    TestBoundary4.draw() 
    // StartingPoint4.draw()
    townEnmeny4.draw()

    player3.drawAI()
    let moving3 = true
    let movingnpc_1 = true
    let movingEnemy = true
    let movingEnemy2 = true
    let firemoving = true
   
    player3.animate = false
    shiftAllowed = true

    //enemy attack system
        enemyAttackTown(player3, TestBoundary4, movingEnemy)
        enemyAttackTown(player3, TestBoundary3, movingEnemy2)
    

    //enemy movement
        const angleE1 = Math.atan2(player3.position.y - townEnmeny4.position.y, player3.position.x - townEnmeny4.position.x )
        const angleE12 = Math.atan2(StartingPoint4.position.y - townEnmeny4.position.y, StartingPoint4.position.x - townEnmeny4.position.x )
        const angleE3 = Math.atan2(player3.position.y - townEnmeny3.position.y, player3.position.x - townEnmeny3.position.x )
        const angleE32 = Math.atan2(StartingPoint3.position.y - townEnmeny3.position.y, StartingPoint3.position.x - townEnmeny3.position.x )
        movable_enemy1.forEach(move =>{
            enemyAITown(player3, townEnmeny4, TestBoundary4, AreaBoundary4, StartingPoint4, movingEnemy, angleE1, angleE12)
            //enemyAITown(player3, townEnmeny3, TestBoundary3, AreaBoundary3, StartingPoint3, movingEnemy2, angleE3, angleE32)
        })
       

        movable_enemy2.forEach(move =>{
            
            enemyAITown(player3, townEnmeny3, TestBoundary3, AreaBoundary3, StartingPoint3, movingEnemy2, angleE3, angleE32)
        })
    // players attack 
        playerAttackTown(player3, townEnmeny4, TestBoundary4, AreaBoundary4, playerSwordR, playerSwordL, playerSwordD, playerSwordU, movingEnemy, enemyStat4)
        
        playerAttackTown(player3, townEnmeny3, TestBoundary3, AreaBoundary3, playerSwordR, playerSwordL, playerSwordD, playerSwordU, movingEnemy2, enemyStat3)
        playerAttackSpinTown(townEnmeny3, TestBoundary3, AreaBoundary3, playerSwordR, playerSwordL, playerSwordD, playerSwordU, movingEnemy2, enemyStat3)
        playerAttackSpinTown( townEnmeny4, TestBoundary4, AreaBoundary4, playerSwordR, playerSwordL, playerSwordD, playerSwordU, movingEnemy, enemyStat4)
        
        if(enemyStat4.ememyHealth <= 0 && townEnemyDead == false ){
            playerStats.playerMoney = playerStats.playerMoney + 100
            document.querySelector('#pWallet').innerHTML = '$' + playerStats.playerMoney
            townEnmeny4.position.x = 7000
            TestBoundary4.position.x = 7000
            AreaBoundary4.position.x = 7000
            console.log('enemy has died')
            townEnemyDead = true
            
            //add money here 
            
        }else if(playerStats.playerHealth <= 0)
        {   
            console.log('player has died')
            //window.cancelAnimationFrame(townAnimateId)
        }

        if(enemyStat3.ememyHealth <= 0 && townEnemyDead2 == false ){
            playerStats.playerMoney = playerStats.playerMoney + 200
            document.querySelector('#pWallet').innerHTML = '$' + playerStats.playerMoney
            townEnmeny3.position.x = 7000
            TestBoundary3.position.x = 7000
            AreaBoundary3.position.x = 7000
            console.log('enemy has died')
            townEnemyDead2 = true
        }else if(playerStats.playerHealth <= 0)
        {   
            console.log('player has died')
           // window.cancelAnimationFrame(townAnimateId)
        }

        openMenu()

        ALCShift = ALCShift + 1

        if(ALCShift == 50){
            console.log(' shift is ready')
            coolDownDone = true
            ALCShift = 0
        }

        playerFireBallAttack(player3, playerFireBall, townEnmeny4, boundaries_for_town, enemyStat4, playerStats, firemoving)
        playerFireBallAttack(player3, playerFireBall, townEnmeny3, boundaries_for_town, enemyStat3, playerStats, firemoving)
       
    // fire ball feature
        // if(keys.f.pressed == true){
        //     //playerFireBall.position.y = player3.position.y
        //     //playerFireBall.position.x = player3.position.x  
        //     if(player3.image == player3.sprites.left && rightDone == false && upDone == false && downDone == false && playerStats.playerMagic > 25) {
        //         toggledFireBallL = true
        //         leftDone = true
        //         //console.log('go to go')
                
        //     }else if(player3.image == player3.sprites.right && leftDone == false && upDone == false && downDone == false && playerStats.playerMagic > 25){
        //         toggledFireBallR = true
        //         rightDone = true
        //     }else if(player3.image == player3.sprites.up && upDone == false && leftDone == false && rightDone == false && downDone == false && playerStats.playerMagic > 25 ){
        //         toggledFireBallU = true
        //         upDone = true
        //     }else if(player3.image == player3.sprites.down && downDone == false && leftDone == false && rightDone == false && playerStats.playerMagic > 25){
        //         toggledFireBallD = true
        //         downDone = true
        //     }

        //     if(toggledFireBallL == true && leftDone == true){
        //         playerStats.playerMagic = playerStats.playerMagic - 1
        //         document.querySelector('#pMagic').innerHTML = 'Magic Level: ' + playerStats.playerMagic
        //         if( rectangularCollision2({
        //             rectangle1: playerFireBall,
        //             //makes a clone of the boundary object 
        //             rectangle2: townEnmeny4,
        //             x: 0,
        //             y: 0
        //         })
                    
        //          ){
        //             playerFireBall.draw()
        //             playerFireBall.position.y = townEnmeny4.position.y
        //             playerFireBall.position.x = townEnmeny4.position.x
        //             enemyStat4.ememyHealth = enemyStat4.ememyHealth - .1
        //             console.log(enemyStat4.ememyHealth)
        //             firemoving = false
        //          }
                
        //          for (let i = 0; i < boundaries_for_town.length; i++){
        //             const boundary = boundaries_for_town[i]
        //             if(
        //                 rectangularCollisionHouse({
        //                     rectangle1: playerFireBall,
        //                     //makes a clone of the boundary object 
        //                     rectangle2: {
        //                         ...boundary, 
        //                         position: {
        //                             x: boundary.position.x - 6,
        //                             y: boundary.position.y 
        //                         }
        //                     }
        //                 })
        //             ){
                       
        //                 firemoving = false
        //                 break
        //             }
        //         }   
                
        //         if(firemoving == true){
        //             playerFireBall.draw()
        //             playerFireBall.position.x -= 6
        //         }
                
        //     }else if(toggledFireBallR == true && rightDone == true){
        //         playerStats.playerMagic = playerStats.playerMagic - 1
        //         document.querySelector('#pMagic').innerHTML = 'Magic Level: ' + playerStats.playerMagic
                
        //         if( rectangularCollision2({
        //             rectangle1: playerFireBall,
        //             //makes a clone of the boundary object 
        //             rectangle2: townEnmeny4,
        //             x: 0,
        //             y: 0
        //         })
                    
        //          ){
        //             playerFireBall.draw()
        //             playerFireBall.position.y = townEnmeny4.position.y
        //             playerFireBall.position.x = townEnmeny4.position.x
        //             enemyStat4.ememyHealth = enemyStat4.ememyHealth - .05
        //             console.log(enemyStat4.ememyHealth)
        //             firemoving = false
        //          }

        //          for (let i = 0; i < boundaries_for_town.length; i++){
        //             const boundary = boundaries_for_town[i]
        //             if(
        //                 rectangularCollisionHouse({
        //                     rectangle1: playerFireBall,
        //                     //makes a clone of the boundary object 
        //                     rectangle2: {
        //                         ...boundary, 
        //                         position: {
        //                             x: boundary.position.x + 6,
        //                             y: boundary.position.y 
        //                         }
        //                     }
        //                 })
        //             ){
                       
        //                 firemoving = false
        //                 break
        //             }
        //         }

        //         if(firemoving == true){
        //             playerFireBall.draw()
        //             playerFireBall.position.x += 6
        //         }
                
        //     }else if (toggledFireBallU == true && upDone == true){
        //         playerStats.playerMagic = playerStats.playerMagic - 1
        //         document.querySelector('#pMagic').innerHTML = 'Magic Level: ' + playerStats.playerMagic
        //         if( rectangularCollision2({
        //             rectangle1: playerFireBall,
        //             //makes a clone of the boundary object 
        //             rectangle2: townEnmeny4,
        //             x: 0,
        //             y: 0
        //         })
                    
        //         ){
        //             playerFireBall.draw()
        //             playerFireBall.position.y = townEnmeny4.position.y
        //             playerFireBall.position.x = townEnmeny4.position.x
        //             enemyStat4.ememyHealth = enemyStat4.ememyHealth - .05
        //             console.log(enemyStat4.ememyHealth)
        //             firemoving = false
        //         }
        //         for (let i = 0; i < boundaries_for_town.length; i++){
        //             const boundary = boundaries_for_town[i]
        //             if(
        //                 rectangularCollisionHouse({
        //                     rectangle1: playerFireBall,
        //                     //makes a clone of the boundary object 
        //                     rectangle2: {
        //                         ...boundary, 
        //                         position: {
        //                             x: boundary.position.x,
        //                             y: boundary.position.y - 6
        //                         }
        //                     }
        //                 })
        //             ){
                       
        //                 firemoving = false
        //                 break
        //             }
        //         }

        //         if(firemoving == true){
        //             playerFireBall.draw()
        //             playerFireBall.position.y -= 6
        //         }

                
                
        //     }else if (toggledFireBallD == true && downDone == true){
        //         playerStats.playerMagic = playerStats.playerMagic - 1
        //         document.querySelector('#pMagic').innerHTML = 'Magic Level: ' + playerStats.playerMagic
        //         if( rectangularCollision2({
        //             rectangle1: playerFireBall,
        //             //makes a clone of the boundary object 
        //             rectangle2: townEnmeny4,
        //             x: 0,
        //             y: 0
        //         })
                    
        //          ){
        //             playerFireBall.draw()
        //             playerFireBall.position.y = townEnmeny4.position.y
        //             playerFireBall.position.x = townEnmeny4.position.x
        //             enemyStat4.ememyHealth = enemyStat4.ememyHealth - .05
        //             console.log(enemyStat4.ememyHealth)
        //             firemoving = false
                    
        //          }
        //          for (let i = 0; i < boundaries_for_town.length; i++){
        //             const boundary = boundaries_for_town[i]
        //             if(
        //                 rectangularCollisionHouse({
        //                     rectangle1: playerFireBall,
        //                     //makes a clone of the boundary object 
        //                     rectangle2: {
        //                         ...boundary, 
        //                         position: {
        //                             x: boundary.position.x,
        //                             y: boundary.position.y + 6
        //                         }
        //                     }
        //                 })
        //             ){
                       
        //                 firemoving = false
        //                 break
        //             }
        //         }

        //         if(firemoving == true){
        //             playerFireBall.draw()
        //             playerFireBall.position.y += 6
        //         }
                
        //     }
        //    // console.log(toggledFireBallL)
        //     setTimeout(throwFire, 2000)
            
        //     keys.f.pressed == false
        //     //toggledFireBallL = false

        // }else if (keys.f.pressed == false){
        //     console.log('f is not readys')
        //     playerFireBall.position.y = player3.position.y
        //     playerFireBall.position.x = player3.position.x
        // }
    // end of fire ball feature
        // if(player3.image == player3.sprites.down) {
        //     // movableFireBall.forEach(movable => {
        //     //     movable.position.y = (canvas.height / 2 - 68 / 2) - 50})
        //     if(keys.f.pressed == true){
        //         console.log('throwFire')
        //         if(keys.f.pressed == true ) {
        //             playerFireBall.position.y += 6
        //         }
                
        //         playerFireBall.draw()
        //         playerFireBall.position.y += 6
        //         setTimeout(throwFire, 1000)
               
                    
                    
        //     }else if(keys.f.pressed == false){
        //         playerFireBall.position.y = player3.position.y
        //         playerFireBall.position.x = player3.position.x  
        //     }
        // }

        // if(player3.image == player3.sprites.up) {
        //     // movableFireBall.forEach(movable => {
        //     //     movable.position.y = (canvas.height / 2 - 68 / 2) - 50})
        //     if(keys.f.pressed == true){
        //         console.log('throwFire')
               
                
        //         playerFireBall.draw()
        //         playerFireBall.position.y -= 6
        //         setTimeout(throwFire, 1000)
               
                    
                    
        //     }else if(keys.f.pressed == false){
        //         playerFireBall.position.y = player3.position.y
        //         playerFireBall.position.x = player3.position.x  
        //     }
        // }

        // if(player3.image == player3.sprites.left) {
        //     // movableFireBall.forEach(movable => {
        //     //     movable.position.y = (canvas.height / 2 - 68 / 2) - 50})
        //     if(keys.f.pressed == true){
        //         console.log('throwFire')
               
                
        //         playerFireBall.draw()
        //         playerFireBall.position.x -= 6
        //         setTimeout(throwFire, 1000)
               
                
                    
        //     }else if(keys.f.pressed == false){
        //         playerFireBall.position.y = player3.position.y
        //         playerFireBall.position.x = player3.position.x  
        //     }
                
        // }

        // if(player3.image == player3.sprites.right) {
        //     // movableFireBall.forEach(movable => {
        //     //     movable.position.y = (canvas.height / 2 - 68 / 2) - 50})
        //     if(keys.f.pressed == true){
        //         console.log('throwFire')
               
                
        //         playerFireBall.draw()
        //         playerFireBall.position.x += 6
        //         setTimeout(throwFire, 1000)
               
                
                    
        //     }else if(keys.f.pressed == false){
        //         playerFireBall.position.y = player3.position.y
        //         playerFireBall.position.x = player3.position.x  
        //     }
            
                
        // }
        // if(player3.image == player3.sprites.down) {
        //     //playerFireBall.position.y = (canvas.height / 2 - 68 / 2) + 50
        //     playerFireBall.draw()
        //     movableFireBall.forEach(movable => {
        //         movable.position.y -= 3})
                
        // }


    if(keys.w.pressed == true && lastKey == 'w') {
        
        player3.animate = true
        player3.image = player3.sprites.up
            
        if(rectangularCollision2({
            rectangle1: player3,
            //makes ad clone of the boundary object 
            rectangle2: townEnmeny1,
            x: 0,
            y: 3
        })
            
         ){
            moving3 = false
            
            movingnpc_1 = false
         }
        for (let i = 0; i < boundaries_for_town.length; i++){
            const boundary = boundaries_for_town[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player3,
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
               
                
                moving3 = false
                break
            }
        }
        
        for (let i = 0; i < boundaries_for_entering_library.length; i++){
            const boundary = boundaries_for_entering_library[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player3,
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
               
                window.cancelAnimationFrame(townAnimateId)
                animateLibrary()
                moving3 = false
                break
            }
        }

        // for entering library 
       

        // for entering cafe 
        for (let i = 0; i < boundaries_for_entering_cafe.length; i++){
            const boundary = boundaries_for_entering_cafe[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player3,
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
                window.cancelAnimationFrame(townAnimateId)
                animateCoffeeShop()
                moving3 = false
                break
            }
        }

        // entering house 
        for (let i = 0; i < boundaries_for_entering_house.length; i++){
            const boundary = boundaries_for_entering_house[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player3,
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
                window.cancelAnimationFrame(townAnimateId)
                animatehouse()
                moving3 = false
                break
            }
        }
        
        for (let i = 0; i < boundaries_for_town.length; i++){
            const boundary = boundaries_for_town[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player3,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y + 80
                        }
                    }
                })
            ){
               
                shiftAllowed = false
                
            }
        }

        
        
        // moving is true run the lines of code below
        if(moving3 == true){
            if(keys.shift.pressed == true){
                //console.log('should work')
                console.log(timespressed)
                if(coolDownDone == true && shiftAllowed == true){
                    
                    town_movables.forEach(movable => {
                        
                            movable.position.y += 80
                            
                        })
                        timespressed = 0
                    coolDownDone = false 
                }else if(coolDownDone == false){
                    town_movables.forEach(movable => {
                        movable.position.y += 3})
                }
                
                    
            }else{
               // console.log(' s key is not working')
                town_movables.forEach(movable => {
            movable.position.y += 3})
            }
            // so this should only move the movable objects in the array we put above animate and should allow the collision blocks to stay in place
            
        //console.log(background.position.y)
        }
        keys.shift.pressed = false
                
        
    }else if (keys.s.pressed == true && lastKey == 's') {
        player3.animate = true
        player3.image = player3.sprites.down
        if( rectangularCollision2({
            rectangle1: player3,
            //makes a clone of the boundary object 
            rectangle2: townEnmeny1,
            x: 0,
            y: -3
        })
            
         ){
            moving3 = false
            movingnpc_1 == false
         }
        for (let i = 0; i < boundaries_for_town.length; i++){
            const boundary = boundaries_for_town[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player3,
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
               
                moving3 = false
                break
            }
        }

        for (let i = 0; i < boundaries_for_town.length; i++){
            const boundary = boundaries_for_town[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player3,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 80
                        }
                    }
                })
            ){
               
                shiftAllowed = false
                
            }
        }

        
        
        // moving is true run the lines of code below
        if(moving3 == true){
            if(keys.shift.pressed == true){
                //console.log('should work')
                console.log(timespressed)
                if(coolDownDone == true && shiftAllowed == true){
                    
                    town_movables.forEach(movable => {
                        
                            movable.position.y -= 80
                            
                        })
                        timespressed = 0
                    coolDownDone = false 
                }else if(coolDownDone == false){
                    town_movables.forEach(movable => {
                        movable.position.y -= 3})
                }
                
                    
            }else{
                //console.log(' s key is not working')
                town_movables.forEach(movable => {
            movable.position.y -= 3})
            }
            // so this should only move the movable objects in the array we put above animate and should allow the collision blocks to stay in place
            
        //console.log(background.position.y)
        }
        keys.shift.pressed = false
        
    }else if(keys.a.pressed == true && lastKey == 'a') {
        
        player3.animate = true
        player3.image = player3.sprites.left
        if( rectangularCollisionHouse({
            rectangle1: player3,
            //makes a clone of the boundary object 
            rectangle2: townEnmeny1
            })
            
         ){
            moving3 = false
            town_movables.forEach(movable => {
                movable.position.x -= 1})
            movingnpc_1 = false
         }
        for (let i = 0; i < boundaries_for_town.length; i++){
            const boundary = boundaries_for_town[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player3,
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
               
                moving3 = false
                break
            }
        }
        // moving is true run the lines of code below
        for (let i = 0; i < boundaries_for_town.length; i++){
            const boundary = boundaries_for_town[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player3,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x + 80,
                            y: boundary.position.y
                        }
                    }
                })
            ){
               
                shiftAllowed = false
                
            }
        }

        
        
        // moving is true run the lines of code below
        if(moving3 == true){
            if(keys.shift.pressed == true){
                //console.log('should work')
                console.log(timespressed)
                if(coolDownDone == true && shiftAllowed == true){
                    
                    town_movables.forEach(movable => {
                        
                            movable.position.x += 80
                            
                        })
                        timespressed = 0
                    coolDownDone = false 
                }else if(coolDownDone == false){
                    town_movables.forEach(movable => {
                        movable.position.x += 3})
                }
                
                    
            }else{
               // console.log(' s key is not working')
                town_movables.forEach(movable => {
            movable.position.x += 3})
            }
        }
        
        keys.shift.pressed = false
        //console.log(background.position.x)
    }else if(keys.d.pressed == true && lastKey == 'd') {
        player3.animate = true
        player3.image = player3.sprites.right
        if( rectangularCollisionHouse({
            rectangle1: player3,
            //makes a clone of the boundary object 
            rectangle2: townEnmeny1
            })
            
         ){
            moving3 = false
            town_movables.forEach(movable => {
                movable.position.x += 3})
            movingnpc_1 = false
         }
        for (let i = 0; i < boundaries_for_town.length; i++){
            const boundary = boundaries_for_town[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player3,
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
               
                moving3 = false
                break
            }
        }
        // moving is true run the lines of code below
        for (let i = 0; i < boundaries_for_town.length; i++){
            const boundary = boundaries_for_town[i]
            if(
                rectangularCollisionHouse({
                    rectangle1: player3,
                    //makes a clone of the boundary object 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x - 80,
                            y: boundary.position.y
                        }
                    }
                })
            ){
               
                shiftAllowed = false
                
            }
        }

        
        
        // moving is true run the lines of code below
        if(moving3 == true){
            if(keys.shift.pressed == true){
                //console.log('should work')
                console.log(timespressed)
                if(coolDownDone == true && shiftAllowed == true){
                    
                    town_movables.forEach(movable => {
                        
                            movable.position.x -= 80
                            
                        })
                        timespressed = 0
                    coolDownDone = false 
                }else if(coolDownDone == false){
                    town_movables.forEach(movable => {
                        movable.position.x -= 3})
                }
                
                    
            }else{
               // console.log(' s key is not working')
                town_movables.forEach(movable => {
            movable.position.x -= 3})
            }
        }
        
        keys.shift.pressed = false
        
       
       // console.log(background.position.x)
    }

    movable_enemy1.forEach(movable_enemy => {
        //movable_boss.position.x += .4
        actionLockCounter1 = actionLockCounter1 + 1
        if(actionLockCounter1 == 50 )
        {
            if(actionLockCounter2 <= 19 ){
                
                    
                 
                // townEnmeny1.image = townEnmeny1.sprites.right
                // townEnmeny1.animate = true
                // townEnmeny1.position.x += 5
                // town Emeny 2
                townEnmeny2.image = townEnmeny2.sprites.right
                townEnmeny2.animate = true
                townEnmeny2.position.x += 5
                actionLockCounter2 = actionLockCounter2+ 1
                    
            }else if(actionLockCounter2 > 19 &&  actionLockCounter2 <= 39 ){
                

                
             
                        // townEnmeny1.image = townEnmeny1.sprites.left
                        // townEnmeny1.animate = true
                        // townEnmeny1.position.x -= 5
                // town emeny 2
                        townEnmeny2.image = townEnmeny2.sprites.left
                        townEnmeny2.animate = true
                        townEnmeny2.position.x -= 5
                actionLockCounter2 = actionLockCounter2 + 1
                    
                
            }else{
                    
                    townEnmeny1.position.x -= 12
                    actionLockCounter2 = 0
                 }
                
            
            actionLockCounter1 = 0
        } 
        // use this for small enemies not for boss
        //startBattle2(player3, townEnmeny1, 'coffee', townAnimateId, true)
        
        

    })


}
//c.clearRect(0, 0, canvas.width, canvas.height)
//so whenever a key is pushed down than it will call what ever is in the () => {
// part of the code also in the (e) basicallly adding an event object 
// window.addEventListener('keydown', (e) => {
//     //console.log(e.key)
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



function enemyAttackTown(player, testBoundary, moving){
    
    if(rectangularCollision2({
        rectangle1: player,
        //makes a clone of the boundary object 
        rectangle2: testBoundary,
        x: 6,
        y: 0
    }))
    {
        moving = false
        
        //console.log('player hit')
        
        ALC3 = ALC3 + 1
        if(ALC3 == 50 ){
            
            if(ALC4  <= 9 ){
                testBoundary.draw()
                console.log('player was attacked')
                playerStats.playerHealth = playerStats.playerHealth - 1
                document.querySelector('#pHealth').innerHTML = 'Health Level: ' + playerStats.playerHealth
                console.log(playerStats.playerHealth)
                ALC4 = ALC4 + 1
            }else{
                ALC4 = 0
            }
            ALC3 = 0
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
        ALC5 = ALC5 + 1
        if(ALC5 == 50){
            
            if(ALC6  <= 9 ){
                testBoundary.draw()
                console.log('player was attacked')
                playerStats.playerHealth = playerStats.playerHealth - 1
                document.querySelector('#pHealth').innerHTML = 'Health Level: ' + playerStats.playerHealth
                console.log(playerStats.playerHealth)
                ALC6 = ALC6 + 1
            }else{
                ALC6 = 0
            }
            ALC5 = 0
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
       // console.log('player hit')
        ALC7 = ALC7 + 1
        if(ALC7 == 50 ){
            
            if(ALC8  <= 9 ){
                testBoundary.draw()
                console.log('player was attacked')
                playerStats.playerHealth = playerStats.playerHealth - 1
                document.querySelector('#pHealth').innerHTML = 'Health Level: ' + playerStats.playerHealth
                console.log(playerStats.playerHealth)
                ALC8 = ALC8 + 1
            }else{
                ALC8 = 0
            }
            ALC7 = 0
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
        ALC9 = ALC9 + 1
        if(ALC9 == 50 ){
            
            if(ALC10  <= 9 ){
                testBoundary.draw()
                console.log('player was attacked')
                playerStats.playerHealth = playerStats.playerHealth - 1
                document.querySelector('#pHealth').innerHTML = 'Health Level: ' + playerStats.playerHealth
                console.log(playerStats.playerHealth)
                ALC10 = ALC10 + 1
            }else{
                ALC10 = 0
            }
            ALC9 = 0
        }
        // cat2.position.y += 5
        // testBoundary.position.y += 5
    }else{
       
    }
}

function playerFireBallAttack(player, playerFireBall, enemy, 
    boundaries, enemyStats, playerStats, firemoving){
        
    if(keys.f.pressed == true){
        //playerFireBall.position.y = player.position.y
        //playerFireBall.position.x = player.position.x  
        if(player.image == player.sprites.left && rightDone == false && upDone == false && downDone == false && playerStats.playerMagic > 25) {
            toggledFireBallL = true
            leftDone = true
            //console.log('go to go')
            
        }else if(player.image == player.sprites.right && leftDone == false && upDone == false && downDone == false && playerStats.playerMagic > 25){
            toggledFireBallR = true
            rightDone = true
        }else if(player.image == player.sprites.up && upDone == false && leftDone == false && rightDone == false && downDone == false && playerStats.playerMagic > 25 ){
            toggledFireBallU = true
            upDone = true
        }else if(player.image == player.sprites.down && downDone == false && leftDone == false && rightDone == false && playerStats.playerMagic > 25){
            toggledFireBallD = true
            downDone = true
        }

        if(toggledFireBallL == true && leftDone == true){
            playerStats.playerMagic = playerStats.playerMagic - 1
            document.querySelector('#pMagic').innerHTML = 'Magic Level: ' + playerStats.playerMagic
            if( rectangularCollision2({
                rectangle1: playerFireBall,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })
                
             ){
                playerFireBall.draw()
                playerFireBall.position.y = enemy.position.y
                playerFireBall.position.x = enemy.position.x
                enemyStats.ememyHealth = enemyStats.ememyHealth - .1
                console.log(enemyStats.ememyHealth)
                firemoving = false
             }
            
             for (let i = 0; i < boundaries.length; i++){
                const boundary = boundaries[i]
                if(
                    rectangularCollisionHouse({
                        rectangle1: playerFireBall,
                        //makes a clone of the boundary object 
                        rectangle2: {
                            ...boundary, 
                            position: {
                                x: boundary.position.x - 6,
                                y: boundary.position.y 
                            }
                        }
                    })
                ){
                   
                    firemoving = false
                    break
                }
            }   
            
            if(firemoving == true){
                playerFireBall.draw()
                playerFireBall.position.x -= 6
            }
            
        }else if(toggledFireBallR == true && rightDone == true){
            playerStats.playerMagic = playerStats.playerMagic - 1
            document.querySelector('#pMagic').innerHTML = 'Magic Level: ' + playerStats.playerMagic
            if( rectangularCollision2({
                rectangle1: playerFireBall,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })
                
             ){
                playerFireBall.draw()
                playerFireBall.position.y = enemy.position.y
                playerFireBall.position.x = enemy.position.x
                enemyStats.ememyHealth = enemyStats.ememyHealth - .05
                console.log(enemyStats.ememyHealth)
                firemoving = false
             }

             for (let i = 0; i < boundaries.length; i++){
                const boundary = boundaries[i]
                if(
                    rectangularCollisionHouse({
                        rectangle1: playerFireBall,
                        //makes a clone of the boundary object 
                        rectangle2: {
                            ...boundary, 
                            position: {
                                x: boundary.position.x + 6,
                                y: boundary.position.y 
                            }
                        }
                    })
                ){
                   
                    firemoving = false
                    break
                }
            }

            if(firemoving == true){
                playerFireBall.draw()
                playerFireBall.position.x += 6
            }
            
        }else if (toggledFireBallU == true && upDone == true){
            playerStats.playerMagic = playerStats.playerMagic - 1
            document.querySelector('#pMagic').innerHTML = 'Magic Level: ' + playerStats.playerMagic
            if( rectangularCollision2({
                rectangle1: playerFireBall,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })
                
            ){
                playerFireBall.draw()
                playerFireBall.position.y = enemy.position.y
                playerFireBall.position.x = enemy.position.x
                enemyStats.ememyHealth = enemyStats.ememyHealth - .05
                console.log(enemyStats.ememyHealth)
                firemoving = false
            }
            for (let i = 0; i < boundaries.length; i++){
                const boundary = boundaries[i]
                if(
                    rectangularCollisionHouse({
                        rectangle1: playerFireBall,
                        //makes a clone of the boundary object 
                        rectangle2: {
                            ...boundary, 
                            position: {
                                x: boundary.position.x,
                                y: boundary.position.y - 6
                            }
                        }
                    })
                ){
                   
                    firemoving = false
                    break
                }
            }

            if(firemoving == true){
                playerFireBall.draw()
                playerFireBall.position.y -= 6
            }

            
            
        }else if (toggledFireBallD == true && downDone == true){
            playerStats.playerMagic = playerStats.playerMagic - 1
            document.querySelector('#pMagic').innerHTML = 'Magic Level: ' + playerStats.playerMagic
            if( rectangularCollision2({
                rectangle1: playerFireBall,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })
                
             ){
                playerFireBall.draw()
                playerFireBall.position.y = enemy.position.y
                playerFireBall.position.x = enemy.position.x
                enemyStats.ememyHealth = enemyStats.ememyHealth - .05
                console.log(enemyStats.ememyHealth)
                firemoving = false
                
             }
             for (let i = 0; i < boundaries.length; i++){
                const boundary = boundaries[i]
                if(
                    rectangularCollisionHouse({
                        rectangle1: playerFireBall,
                        //makes a clone of the boundary object 
                        rectangle2: {
                            ...boundary, 
                            position: {
                                x: boundary.position.x,
                                y: boundary.position.y + 6
                            }
                        }
                    })
                ){
                   
                    firemoving = false
                    break
                }
            }

            if(firemoving == true){
                playerFireBall.draw()
                playerFireBall.position.y += 6
            }
            
        }
       
        setTimeout(throwFire, 2000)
        keys.f.pressed == false

    }else if (keys.f.pressed == false){
       
        playerFireBall.position.y = player.position.y
        playerFireBall.position.x = player.position.x
    }
}

function throwFire(){
    console.log('rev')
    //console.log(keys.f.pressed)
    
   
    
    
    
    
        toggledFireBallL = false
        leftDone = false
    
        toggledFireBallR = false
        rightDone = false

        toggledFireBallU = false
        upDone = false

        toggledFireBallD = false
        downDone = false
        keys.f.pressed = false
    
    //playerFireBall.position.y = player3.position.y
    //playerFireBall.position.x = player3.position.x
    //console.log(keys.f.pressed)
}

function enemyAITown(player, enemy, testBoundary, areaBoundary, enemystartingpoint, moving, angle, angle2){
    ALC1 = ALC1 + 1;

            if(ALC1 == 50 ){
                
                if(ALC2  <= 9 && moving == true){
                    
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
                    
                    ALC2 = ALC2 + 1
                }else if(ALC2 > 9 &&  ALC2 <= 19 && moving == true){
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
                            //console.log('on  3')
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
                           // console.log('on  2')
                        }
                        if(angle >= -1.7 && angle < -.01)
                        {
                            //console.log('on  1')
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

                           // console.log('on  4')
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
                           // console.log('on  3')
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
                            //console.log('on  2')
                        }
                        if(angle2 >= -1.7 && angle2 < -.01)
                        {
                            //console.log('on  1')
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

                           // console.log('on  4')
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
                    ALC2 = ALC2 + 1
                }else{
                    
                    ALC2 = 0
                }
                ALC1 = 0
            }
}

function playerAttackTown(player, enemy, enmeySword, enemyArea, playerSwordR, playerSwordL, playerSwordD, playerSwordU, moving, enemyStat){
    if(keys.space.pressed == true){
        // note we need to change some things 
        if(player.image == player.sprites.right){
            playerSwordR.draw()
            console.log('hit right ')
            if(rectangularCollision2({
                rectangle1: playerSwordR,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })){       
                        if(moving == true){
                           
                            enemy.position.x += 4
                            enmeySword.position.x += 4
                           enemyArea.position.x += 4
                            enemyStat.ememyHealth = enemyStat.ememyHealth - 1
                            console.log('enemy health')
                            console.log(enemyStat.ememyHealth)   
                        }
                        
                
                }
            
            
        }
        if(player.image == player.sprites.left){
            playerSwordL.draw()
            if(rectangularCollision2({
                rectangle1: playerSwordL,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })){
                console.log('hit left ')
                //note to self this makes the cat move towards the right away from the player like link between worlds
                //note this then makes the the console log hit or go 4 to 5 times which should help with the rest of the stuff also create collsion for cat and boundies
                    if(moving == true){
                        
                        enemy.position.x -= 4
                        enmeySword.position.x -= 4
                       enemyArea.position.x -= 4
                        enemyStat.ememyHealth = enemyStat.ememyHealth - 1
                        console.log('enemy health')
                            console.log(enemyStat.ememyHealth)  
                    }
                        
                }

                
            
            
        }
        if(player.image == player.sprites.up){
            playerSwordU.draw()
            console.log('hit up ')
            if(rectangularCollision2({
                rectangle1: playerSwordU,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })){
                console.log('hit up ')
                if(moving == true){
                    
                    enemy.position.y -= 4
                    enmeySword.position.y -= 4
                   enemyArea.position.y -= 4
                    enemyStat.ememyHealth = enemyStat.ememyHealth - 1
                    
                    
                    console.log('enemy health')
                            console.log(enemyStat.ememyHealth) 
                }
                    
            }
        }
        if(player.image == player.sprites.down){
            playerSwordD.draw()
            if(rectangularCollision2({
                rectangle1: playerSwordD,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })){
                
                
                if(moving == true){
                    
                    enemy.position.y += 4
                    enmeySword.position.y += 4
                   enemyArea.position.y += 4
                    enemyStat.ememyHealth = enemyStat.ememyHealth - 1
                    console.log('enemy health')
                            console.log(enemyStat.ememyHealth) 
                }
        
            }
        }
    

    }
}

function playerAttackSpinTown(enemy, enmeySword, enemyArea, playerSwordR, playerSwordL, playerSwordD, playerSwordU, moving, enemyStat){
    ALCControl = ALCControl + 1
    //console.log(ALCControl)
    if(ALCControl == 50){
      //  console.log(' spin is ready')
        spinMoveCoolDown = true
        ALCControl = 0
    }
    if(keys.control.pressed == true && spinMoveCoolDown == true ){
        // note we need to change some things 

            playerSwordR.draw()
            
            if(rectangularCollision2({
                rectangle1: playerSwordR,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })){       
                        if(moving == true){
                            console.log('right was hit ')
                            enemy.position.x += 20
                            enmeySword.position.x += 20
                           enemyArea.position.x += 20
                            enemyStat.ememyHealth = enemyStat.ememyHealth - 3
                            console.log('enemy health')
                            console.log(enemyStat.ememyHealth)   
                        }
                        
                
                }
            
            
        
        
            playerSwordL.draw()
            if(rectangularCollision2({
                rectangle1: playerSwordL,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })){
                
                //note to self this makes the cat move towards the right away from the player like link between worlds
                //note this then makes the the console log hit or go 4 to 5 times which should help with the rest of the stuff also create collsion for cat and boundies
                    if(moving == true){
                        console.log('l was hit ')
                        enemy.position.x -= 20
                        enmeySword.position.x -= 20
                       enemyArea.position.x -= 20
                        enemyStat.ememyHealth = enemyStat.ememyHealth - 3
                        console.log('enemy health')
                            console.log(enemyStat.ememyHealth)  
                    }   
                        
                }

                
            
            
        
        
            playerSwordU.draw()
            
            if(rectangularCollision2({
                rectangle1: playerSwordU,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })){
                
                if(moving == true){
                    console.log('up was hit ')
                    enemy.position.y -= 20
                    enmeySword.position.y -= 20
                   enemyArea.position.y -= 20
                    enemyStat.ememyHealth = enemyStat.ememyHealth - 3
                    
                    
                    
                            
                }
                    
            }
        
        
            playerSwordD.draw()
            if(rectangularCollision2({
                rectangle1: playerSwordD,
                //makes a clone of the boundary object 
                rectangle2: enemy,
                x: 0,
                y: 0
            })){
                
                
                if(moving == true){
                   
                    console.log('d was hit ')
                    enemy.position.y += 20
                    enmeySword.position.y += 20
                   enemyArea.position.y += 20
                    enemyStat.ememyHealth = enemyStat.ememyHealth - 1
                    
                }
        
            }
        
            spinMoveCoolDown = false
            
    }
}