class Worm {

    private worm: HTMLElement

    private x: number = 0
    private y: number = 0
    private dy: number = 0

    private akey: number
    private dkey: number
    private wkey: number

    private movementSpeed: number = 0
    private jumpHeight: number = -5
    private jumping: boolean = false

    private onGround: boolean = false
    private gravity: number = 0.2


    constructor() {
        //create the worm element
        this.worm = document.createElement("worm")

        //get the game element
        let game = document.getElementsByTagName("game")[0]

        //append the worm element to the game element
        game.appendChild(this.worm)

        //set position of the worm to the bottom of the screen
        this.y = window.innerHeight - this.worm.clientHeight
        this.worm.style.transform = `translate(${this.x}px, ${this.y}px)`

        //set the keys for the controls
        this.akey = 65
        this.dkey = 68
        this.wkey = 87

        //add event listeners
        window.addEventListener("keydown", (event: KeyboardEvent) => this.onKeyDown(event))
        window.addEventListener("keyup", (event: KeyboardEvent) => this.onKeyUp(event))
    }
    
    /**
     * Change the movementspeed on keydown
     * 
     * @param event 
     */

    private onKeyDown(event: KeyboardEvent): void {
        // console.log(e.keyCode)
        switch (event.keyCode) {
            case this.dkey:
                this.movementSpeed = 3
                break
            case this.akey:
                this.movementSpeed = -3
                break
            case this.wkey:
                if(this.onGround) {
                this.jumping = true
                }
        }
    }

    /**
     * Change the movementspeed on keyup
     * 
     * @param event 
     */
    private onKeyUp(event: KeyboardEvent): void {
        switch (event.keyCode) {
            case this.dkey:
                this.movementSpeed = 0
                break
            case this.akey:
                this.movementSpeed = 0
                break
        }
    }

    /**
     * Update the worm if there is movement
     */
    public update() {
        this.x = this.x + this.movementSpeed
        this.dy += this.gravity
        this.y += this.dy

        //check if worm is on ground
        if(this.y >= window.innerHeight - this.worm.clientHeight) {
            this.onGround = true
            this.jumping = false
            console.log("ik sta op de grond")
            this.dy = 0
        } else {
            this.onGround = false
        }

        if (this.jumping == true) {
            this.dy = this.jumpHeight
        }

        if (this.movementSpeed > 0) {
            this.worm.style.transform = `translate(${this.x}px, ${this.y}px) scaleX(-1)`
        }

        if (this.movementSpeed < 0) {
            this.worm.style.transform = `translate(${this.x}px, ${this.y}px) scaleX(1)`
        }

    }

}