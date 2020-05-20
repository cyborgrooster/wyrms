class Worm {

    /* global vars */
    private aal: HTMLElement;
    
    private x: number;
    private y: number;

    private leftKey: number;
    private rightKey: number;
    private upKey: number;
    private downKey: number;

    private leftSpeed: number = 0;
    private rightSpeed: number = 0;

    constructor() {
        this.aal = document.createElement("aal");

        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.aal);

        this.leftKey = 37;
        this.rightKey = 39;
        this.upKey = 38;
        this.downKey = 40;

        this.x = 0;
        this.y = 500;

        
        this.aal.style.transform = `translate(${this.x}px, ${this.y}px)`

        window.addEventListener("keyup",(e: KeyboardEvent) => this.onKeyLeft(e));
        window.addEventListener("keydown",(e: KeyboardEvent) => this.onKeyRight(e))
    }

    private onKeyLeft(e: KeyboardEvent): void {
        // Hiermee kan je checken welke keycode achter een bepaalde toets zit. 
        console.log(e.keyCode)

        switch (e.keyCode) {
            case this.leftKey:
                this.leftSpeed = -5;
                break;
            case this.rightKey:
                this.rightSpeed = 0;
                break;
            case this.upKey:
                alert("yo");
                break;
            case this.downKey:
                alert("ey");
                break;
        }
    }

    private onKeyRight(e: KeyboardEvent): void {
        // Hiermee kan je checken welke keycode achter een bepaalde toets zit. 
        console.log(e.keyCode)

        switch (e.keyCode) {
            case this.leftKey:
                this.leftSpeed = 0;
                break;
            case this.rightKey:
                this.rightSpeed = 5;
                break;
            case this.upKey:
                alert("yo");
                break;
            case this.downKey:
                alert("ey");
                break;
        }
    }
        
    public update() {
        let newY = this.y - this.leftSpeed + this.rightSpeed

        // check of de paddle binnen beeld blijft
        if (newY > 0 && newY + 100 < window.innerHeight) this.y = newY

        this.aal.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}