/// <reference path="mole.ts"/>

class Game {
    
    worm : Worm
    private mole : Mole
    
    constructor() {
        console.log("The game has been created!")

        this.worm = new Worm
        this.mole = new Mole()

        this.gameLoop()
    }
    
    private gameLoop() {
        this.worm.update()
        this.mole.update()
        requestAnimationFrame(()=>this.gameLoop())
    }

} 

window.addEventListener("load", () => new Game())