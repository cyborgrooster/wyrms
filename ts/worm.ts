class Worm {

    /* global vars */
    private aal: HTMLElement;
    
    private x: number;
    private y: number;

    private leftKey: number;
    private rightKey: number;
    //private upKey: number;
    //private downKey: number;

    private leftSpeed: number = 0;
    private rightSpeed: number = 0;
    //private upSpeed: number = 0;
    //private downSpeed: number = 0;

    constructor() {
        this.aal = document.createElement("aal");

        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.aal);

        this.leftKey = 87;
        this.rightKey = 83;
        //this.upKey = 38;
        //this.downKey = 40;

        this.x = 0;
        this.y = 500;
        this.aal.style.transform = `translate(${this.x}px, ${this.y}px)`

        window.addEventListener("keyup",(e: KeyboardEvent) => this.onKeyUp(e));
        window.addEventListener("keydown",(e: KeyboardEvent) => this.onKeyDown(e))
    }

    public getWorm(){
        return this.aal.getBoundingClientRect();
    }

    private onKeyUp(e: KeyboardEvent): void {
        console.log(e.keyCode)

        switch (e.keyCode) {
            case this.leftKey:
                this.leftSpeed = 5;
                
                break;
            case this.rightKey:
                this.rightSpeed = 5;
                break;
            /*case this.upKey:
                this.upSpeed = 5;
                break;
            case this.downKey:
                this.downSpeed = 5;
                break;*/
        }
    }

    private onKeyDown(e: KeyboardEvent): void {
        console.log(e.keyCode)

        switch (e.keyCode) {
            case this.leftKey:
                this.leftSpeed = 0;
                break;
            case this.rightKey:
                this.rightSpeed = 0;
                break;
            /*case this.upKey:
                this.upSpeed = 0;
                break;
            case this.downKey:
                this.downSpeed = 0;
                break;*/
        }
    }
        
    public update() {
        this.x += this.rightSpeed;
        this.y += this.leftSpeed;
  
        this.aal.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}