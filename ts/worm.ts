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

        window.addEventListener("keyleft",(e: KeyboardEvent) => this.onKeyLeft(e));
        window.addEventListener("keyright",(e: KeyboardEvent) => this.onKeyRight(e))
    }

    private onKeyLeft(e: KeyboardEvent): void {
        // Hiermee kan je checken welke keycode achter een bepaalde toets zit. 
        console.log(e.keyCode)

        switch (e.keyCode) {
            case this.leftKey:
                this.leftSpeed = 5
                break
            case this.rightKey:
                this.rightSpeed = 5
                break
        }
    }

    private onKeyRight(e: KeyboardEvent): void {
        // Hiermee kan je checken welke keycode achter een bepaalde toets zit. 
        console.log(e.keyCode)

        switch (e.keyCode) {
            case this.leftKey:
                this.leftSpeed = 10
                break
            case this.rightKey:
                this.rightSpeed = 10
                break
        }
    }

    public update() {
        let newY = this.y - this.leftSpeed + this.rightSpeed

        // check of de paddle binnen beeld blijft
        if (newY > 0 && newY + 100 < window.innerHeight) this.y = newY

        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}