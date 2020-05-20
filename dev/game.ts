class Game {
    
    worm : Worm
    
    constructor() {
        console.log("game created")

        this.worm = new Worm

        this.gameLoop()
    }
    
    private gameLoop() {
        this.worm.update()
        requestAnimationFrame(()=>this.gameLoop())
    }
} 

window.addEventListener("load", () => new Game())