class Worm {

    /* global vars */
    private div: HTMLElement;
    
    private x: number;
    private y: number;

    private leftKey: number;
    private rightKey: number;

    private leftSpeed: number = 0;
    private rightSpeed: number = 0;

    constructor() {
        this.div = document.createElement("aal");

        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);

        this.leftKey = 0;
        this.rightKey = 0;

        this.x = 0;
        this.y = 0;

        window.addEventListener("keyleft",(e: KeyboardEvent) => this.onKeyPress(e));
        window.addEventListener("keyright",(e: KeyboardEvent) => this.onKeyPress(e))

    }
}