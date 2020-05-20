class Game {

    private worm: Worm;

    constructor() {
        this.worm = new Worm(); //maakt nieuwe worm aan
        this.gameLoop(); //update frames
    }

    private gameLoop(){
        this.worm.update(); //voert update uit op scherm
        requestAnimationFrame(() => this.gameLoop); //refresht scherm
    }
}
window.addEventListener("load", () => new Game()) //maakt nieuwe game instantie aan