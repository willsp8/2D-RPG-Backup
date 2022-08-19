//note zoom in 400% when exporting images from tiled

// where the Sprite class is created should help with move the players and changing the x and y
const canvas = document.querySelector('#canvas1')
// this c stands for context and its purpose is for drawing out everything in our game 
const c = canvas.getContext('2d')

//this sets the canvas width 
canvas.width = 1024
//this sets the canvas height 
canvas.height = 576
let runFast = true
class Sprite{
    constructor({position, image, frames = {max: 1, hold: 10}, sprites, animate = false, rotation=0, height_of_image}){
        this.position = position
        this.image = new Image() 
        this.frames = {...frames, val: 0, elapsed: 0}
        this.image.onload = () => {
            this.width = this.image.width / this.frames.max 
            this.height = this.image.height // this should help change where the image is for the height 
        }
        this.image.src = image.src
        this.animate = animate
        this.sprites = sprites 
        this.opacity = 1
        this.rotation = rotation
        
    }

    draw_3(){
        c.drawImage(this.image, this.position.x, this.position.y)
    }
    clear(){
        c.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    // creating a draw method 
    draw (){
        c.save()
        c.beginPath()
        c.translate(this.position.x + this.width / 2, this.position.y + this.height / 2)
        
        c.rotate(this.rotation)
        
        c.translate(-this.position.x - this.width / 2, -this.position.y - this.height / 2)
        //this fixes the blur
        
        c.globalAlpha = this.opacity
        // this draws images onto the screen. and has three arugments
        //the first one needs to be our image and the second and third are the x and y position of our image
        // so the x and y will places us in the middle of the house thats where the player will start 
        //c.drawImage(this.image, this.position.x, this.position.y)

        //the reason we are draing the player in here is because the map image is bigger than the player image so the player is drawn before the map image 
        // the canvas.wdith / 2 - playerImage.width / 2 and canvas.height / 2 - playerImage.height / 2 puts the player in the middle of the screen or the canvas
        // note the four arugments after playerImage will crop our image so instead of showing the entire sprite it will show part of the sprite
        c.imageSmoothingEnabled = false;
        c.drawImage(
            this.image,
            //we are adding 48 pixels for each frame making it appear as if the player is running 
            this.frames.val * this.width,
            0,
            this.image.width / this.frames.max,
            this.image.height / this.frames.max + 48, // 24
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height / this.frames.max + 48 // 24
            
           
        )
        
        c.restore()

        // Store the current transformation matrix
        
        
        if(this.animate == true){
            // this will make the player sprite sheet run slower
            if (this.frames.max > 1){
                this.frames.elapsed++
            }

            // this will make the player sprite sheet run slower note: you need the code a above for this to work the if statment 
            if(this.frames.elapsed % this.frames.hold == 0){
                // this if statement go up to 4 or 3 in the index ofr a array and will add a frame from 0 to 3 which will make the player look like they are moving 
                if(this.frames.val < this.frames.max - 1) this.frames.val++
                else this.frames.val = 0
            }
        }
       
    }

    drawAI (){
        c.save()
        c.translate(this.position.x + this.width / 2, this.position.y + this.height / 2)
        c.rotate(this.rotation)
        c.translate(-this.position.x - this.width / 2, -this.position.y - this.height / 2)
        c.globalAlpha = this.opacity
        // this draws images onto the screen. and has three arugments
        //the first one needs to be our image and the second and third are the x and y position of our image
        // so the x and y will places us in the middle of the house thats where the player will start 
        //c.drawImage(this.image, this.position.x, this.position.y)

        //the reason we are draing the player in here is because the map image is bigger than the player image so the player is drawn before the map image 
        // the canvas.wdith / 2 - playerImage.width / 2 and canvas.height / 2 - playerImage.height / 2 puts the player in the middle of the screen or the canvas
        // note the four arugments after playerImage will crop our image so instead of showing the entire sprite it will show part of the sprite
        c.drawImage(
            this.image,
            //we are adding 48 pixels for each frame making it appear as if the player is running 
            this.frames.val * this.width,
            0,
            this.image.width / this.frames.max,
            this.image.height, 
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height
            
           
        )
        c.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI, false)
        
        c.strokeStyle = 'red';
        c.fillStyle = 'rgba(255, 0, 0, 0.2)'
        //c.fillStyle = 'rgba(0, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height) 
        c.beginPath();
       // c.arc(this.position.x + 20, this.position.y + 35, 45, 0, 2 * Math.PI);
        //console.log('radius')
        //console.log()
        c.stroke();
        c.restore()

        if(this.animate == true){
            // this will make the player sprite sheet run slower
            if (this.frames.max > 1){
                this.frames.elapsed++
            }

            // this will make the player sprite sheet run slower note: you need the code a above for this to work the if statment 
            if(this.frames.elapsed % this.frames.hold === 0){
                // this if statement go up to 4 or 3 in the index ofr a array and will add a frame from 0 to 3 which will make the player look like they are moving 
                if(this.frames.val < this.frames.max - 1) this.frames.val++
                else this.frames.val = 0
            }
        }
        
        
       

        
        
    }

    
}

class Monster extends Sprite{
    constructor({position, image, frames = {max: 1, hold: 10}, sprites, animate = false, rotation=0, isEnemy=false, name, attacks, health}){
        super({
            position, image, frames, sprites, animate, rotation,
        })
        this.health = health
        this.magic = 100
        this.isEnemy = isEnemy
        this.name = name
        this.attacks = attacks

    }
    faint(){
        console.log('faint')
        document.querySelector('#dialogueBox').innerHTML = this.name + ' fainted!'
        gsap.to(this.position, {
            y: this.position.y + 20
        })

        gsap.to(this, {
            opacity: 0
        })
    }

    // creating a attack method 
    attack({attack, player, recipient, renderedSprites}) {
        // this will make the dialogue apear when you attack
        document.querySelector('#dialogueBox').style.display = 'block'
        document.querySelector('#dialogueBox').innerHTML = this.name + ' used ' + attack.name
        if(this.isEnemy){
            document.querySelector('#playerHealthBar_2').innerHTML = recipient.health
        }else{
            document.querySelector('#enemyHealthBar_2').innerHTML = recipient.health
        }
        let healthBar = '#enemyHealthBar'
        let healthBar_player = '#playerHealthBar'
        let magicBar = '#playerMagicBar'
        if(this.isEnemy) healthBar = '#playerHealthBar'
        let rotation = 1
        if(this.isEnemy == true) rotation = -2.2
        
            console.log('last statment')
            console.log(recipient)
            recipient.health -= attack.damage
        
        
        
        
        
        
        console.log('player')
        console.log(player.health)
        
        
        // this will deal with the animations and decrease and increase health 
        switch(attack.name) {
            case 'Fireball':
                if(player.magic > 0){
                       
                
                player.magic -= attack.cost
                const fireballImage = new Image()
                fireballImage.src = './res/fireball.png'
                const fireball = new Sprite({
                    position: {
                        x: this.position.x,
                        y: this.position.y
                    },
                    image: fireballImage,
                    frames: {
                        max: 4, 
                        hold: 10
                    },
                    animate: true,
                    rotation: rotation
                })
                if(this.isEnemy){
                    document.querySelector('#playerHealthBar_2').innerHTML = 'Health: ' + recipient.health
                    
                }else{
                    document.querySelector('#enemyHealthBar_2').innerHTML = 'Health: ' + recipient.health
                    document.querySelector('#playerMagicBar_2').innerHTML = 'Magic: ' + player.magic
                }

                
                renderedSprites.splice(1, 0, fireball)
                // makes sure to animate the fireball attack traveling towards the enemy
                gsap.to(fireball.position, {
                  x: recipient.position.x,
                  y: recipient.position.y,
                  onComplete: () => {
                      // enemy actually gets hit
                      if(this.isEnemy == false){
                        gsap.to(magicBar, {
                            width: player.magic + '%'
                        })
                      }
                        gsap.to(recipient.position, {
                            x: recipient.position.x + 10,
                            yoyo: true,
                            repeat: 5,
                            duration: 0.08
                        })

                        gsap.to(recipient, {
                            opacity: 0, 
                            repeat: 5,
                            yoyo: true,
                            duration: 0.08
                        })
                        // removes fireball from the screen 
                        renderedSprites.slice(1, 1)
                  }  
                  
                })
                }
            break
            case 'Tackle':
                // this makes a gsap timeline
                
                const tl = gsap.timeline()
                
                let movementDistance = 20
                if(this.isEnemy) movementDistance = -20
                console.log('enemy bar')
                console.log(healthBar)
                console.log(recipient.health)
                // this.position gets the current position of sprite 
                // so when we attack our player will move 20 pixels to the left\
                if(this.isEnemy){
                    document.querySelector('#playerHealthBar_2').innerHTML = 'Health: ' + recipient.health
                    
                }else{
                    document.querySelector('#enemyHealthBar_2').innerHTML = 'Health: ' + recipient.health
                    document.querySelector('#playerMagicBar_2').innerHTML = 'Magic: ' + player.magic
                }
               
                tl.to(this.position, {
                    x: this.position.x - movementDistance
                }).to(this.position, {
                    x: this.position.x + movementDistance * 2,
                    duration: 0.1,
                    onComplete: () => {
                        // enemy actually gets hit
                        
                        gsap.to(recipient.position, {
                            x: recipient.position.x + 10,
                            yoyo: true,
                            repeat: 5,
                            duration: 0.08
                        })

                        gsap.to(recipient, {
                            opacity: 0, 
                            repeat: 5,
                            yoyo: true,
                            duration: 0.08
                        })
                    }
                }).to(this.position, {
                    x: this.position.x 
                })
                
            break
            case 'Heal':
                 // this makes a gsap timeline
                if(player.magic > 0 && player.health < 75 && this.isEnemy == false){

                    console.log('health of player')
                    const t2 = gsap.timeline()
                    player.magic -= attack.cost
                    player.health += attack.restore
                    document.querySelector('#playerHealthBar_2').innerHTML = 'Health: ' + player.health
                    document.querySelector('#playerMagicBar_2').innerHTML = 'Magic: ' + player.magic
                    document.querySelector('#enemyHealthBar_2').innerHTML = 'Health: ' + recipient.health
                    let movementDistance2 = 20
                    if(this.isEnemy) movementDistance2 = -20
                    // this.position gets the current position of sprite
                    // so when we attack our player will move 20 pixels to the left
                
                        t2.to(this.position, {
                            x: this.position.x - movementDistance2
                        }).to(this.position, {
                            x: this.position.x + movementDistance2 * 2,
                            duration: 0.1,
                        
                        }).to(this.position, {
                            x: this.position.x
                        })
    
                }
               
            break
            case 'Fast':
            break
            case 'Coffee':
                 // this makes a gsap timeline
                

                 
                const t3 = gsap.timeline()
                
                
                let movementDistance3 = 20
                if(this.isEnemy) movementDistance3 = -20
                if(numOfCoffee > 0 && player.health < 75 ){
                    player.health += attack.restore
                    document.querySelector('#playerHealthBar_2').innerHTML = 'Health: ' + player.health
                    document.querySelector('#playerMagicBar_2').innerHTML = 'Magic: ' + player.magic
                    document.querySelector('#enemyHealthBar_2').innerHTML = 'Health: ' + recipient.health
                
                console.log('health bar for coffee')
                console.log(healthBar)
                // this.position gets the current position of sprite
                // so when we attack our player will move 20 pixels to the left
               
                    t3.to(this.position, {
                        x: this.position.x - movementDistance3
                    }).to(this.position, {
                        x: this.position.x + movementDistance3 * 2,
                        duration: 0.1,
                        
                        
                    }).to(this.position, {
                        x: this.position.x
                    })
                    numOfCoffee = numOfCoffee - 1
                    playerInventory.splice(playerInventory.indexOf('coffee'), 1)
                }else if(numOfCoffee == 0){
                    document.querySelector('#dialogueBox').innerHTML ='we are out of coffee'
                    
                    
                    break
                } 
            break
            case 'GreenTea':
                 // this makes a gsap timeline
                

                 
                const t4 = gsap.timeline()
                
                
                let movementDistance4 = 20
                if(this.isEnemy) movementDistance4 = -20
                if(numGreenTea > 0 && player.magic < 85 ){

                    player.magic += attack.magicRestore
                    document.querySelector('#playerHealthBar_2').innerHTML = 'Health: ' + player.health
                    document.querySelector('#playerMagicBar_2').innerHTML = 'Magic: ' + player.magic
                    document.querySelector('#enemyHealthBar_2').innerHTML = 'Health: ' + recipient.health
                
                console.log('health bar for coffee')
                console.log(healthBar)
                // this.position gets the current position of sprite
                // so when we attack our player will move 20 pixels to the left
               
                    t4.to(this.position, {
                        x: this.position.x - movementDistance4
                    }).to(this.position, {
                        x: this.position.x + movementDistance4 * 2,
                        duration: 0.1,
                        
                        
                    }).to(this.position, {
                        x: this.position.x
                    })
                    numGreenTea = numGreenTea - 1
                }else if(numGreenTea == 0){
                    document.querySelector('#dialogueBox').innerHTML ='we are out of green Tea'
                    
                    
                    break
                } 
            break
            
        }
       
    }



}


//  creating a class for the Boundary
class Boundary{
    static width = 48
    static height = 48
    constructor({position}) {
        this.position = position
        this.width = 48
        this.height = 48
    }
    //draws boundary onto the screen
    draw() {
        // un comment if you want to see red blocks
        c.fillStyle = 'rgba(255, 0, 0, 0.2)'
        //c.fillStyle = 'rgba(0, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height) 
        
    }
}

class Boundary2{
    static width = 16
    static height = 16
    constructor({position}) {
        this.position = position
        this.width = 16
        this.height = 16
    }
    //draws boundary onto the screen
    draw() {
        // un comment if you want to see red blocks
        c.fillStyle = 'rgba(255, 0, 0, .5)'
        //c.fillStyle = 'rgba(0, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height) 
        
    }
}

class Boundary3{
    static width = 32
    static height = 32
    constructor({position}) {
        this.position = position
        this.width = 32
        this.height = 32
    }
    //draws boundary onto the screen
    draw() {
        // un comment if you want to see red blocks
        c.fillStyle = 'rgba(255, 0, 0, .5)'
        //c.fillStyle = 'rgba(0, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height) 
        
    }
}

class Boundary4{
    static width = 48
    static height = 48
    constructor({position}) {
        this.position = position
        this.width = 48
        this.height = 48
    }
    //draws boundary onto the screen
    draw() {
        // un comment if you want to see red blocks
        c.fillStyle = 'rgba(255, 0, 0, .5)'
        //c.fillStyle = 'rgba(0, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height) 
        
    }
}

class Boundary5{
    static width = 80
    static height = 80
    constructor({position}) {
        this.position = position
        this.width = 80
        this.height = 80
    }
    //draws boundary onto the screen
    draw() {
        // un comment if you want to see red blocks
        c.fillStyle = 'rgba(255, 0, 0, .5)'
        //c.fillStyle = 'rgba(0, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height) 
        
    }
}

class Boundary6{
    static width = 288
    static height = 288
    constructor({position}) {
        this.position = position
        this.width = 288
        this.height = 288
    }
    //draws boundary onto the screen
    draw() {
        // un comment if you want to see red blocks
        c.fillStyle = 'rgba(200, 247, .5)'
        //c.fillStyle = 'rgba(0, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height) 
        
    }
}

class Boundary7{
    static width = 288
    static height = 48
    constructor({position}) {
        this.position = position
        this.width = 288
        this.height = 48
    }
    //draws boundary onto the screen
    draw() {
        // un comment if you want to see red blocks
        //c.fillStyle = 'rgba(200, 3, 0)'
        c.fillStyle = 'rgba(0, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height) 
        
    }
}

// draws npc Boundary onto the screen 
class NpcBoundary{
    static width = 48
    static height = 48
    constructor({position}) {
        this.position = position
        this.width = 48
        this.height = 48
    }
    //draws boundary onto the screen
    draw() {
        // un comment if you want to see red blocks
        c.fillStyle = 'rgba(255, 0, 0, 0.2)'
        //c.fillStyle = 'rgba(0, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height) 
        
    }
}