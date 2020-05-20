/// <reference path="mole.ts"/>

class Game {
    
    private mole : Mole
    
    constructor() {
        this.mole = new Mole()
        this.gameLoop()
    }
    
    private gameLoop(){
        this.mole.update()
        requestAnimationFrame(()=>this.gameLoop())
    }
} 

window.addEventListener("load", () => new Game())