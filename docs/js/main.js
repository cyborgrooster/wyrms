"use strict";
var Game = (function () {
    function Game() {
        console.log("The game has been created!");
        this.worm = new Worm;
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.worm.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Worm = (function () {
    function Worm() {
        var _this = this;
        this.x = 0;
        this.y = 0;
        this.dy = 0;
        this.scale = 1;
        this.movementSpeed = 0;
        this.jumpHeight = -10;
        this.jumping = false;
        this.gravity = 0.2;
        this.health = 3;
        this.dead = false;
        this.gotHit = false;
        this.hitsTaken = 0;
        this.worm = document.createElement("worm");
        this.hpDisplay = document.createElement("hpdisplay");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.worm);
        game.appendChild(this.hpDisplay);
        this.y = window.innerHeight - this.worm.clientHeight;
        this.worm.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.akey = 65;
        this.dkey = 68;
        this.wkey = 87;
        this.skey = 83;
        window.addEventListener("keydown", function (event) { return _this.onKeyDown(event); });
        window.addEventListener("keyup", function (event) { return _this.onKeyUp(event); });
    }
    Worm.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case this.dkey:
                this.movementSpeed = 3;
                this.scale = -1;
                break;
            case this.akey:
                this.movementSpeed = -3;
                this.scale = 1;
                break;
            case this.wkey:
                if (!this.jumping) {
                    this.jumping = true;
                    console.log("jumped");
                    this.dy = this.jumpHeight;
                }
                break;
            case this.skey:
                this.gotHit = true;
                console.log("you got shot");
                break;
        }
    };
    Worm.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case this.dkey:
                this.movementSpeed = 0;
                break;
            case this.akey:
                this.movementSpeed = 0;
                break;
        }
    };
    Worm.prototype.update = function () {
        this.x = this.x + this.movementSpeed;
        if (this.jumping) {
            this.dy += this.gravity;
            this.y += this.dy;
        }
        if (this.y >= window.innerHeight - this.worm.clientHeight) {
            this.jumping = false;
            this.dy = 0;
        }
        if (this.gotHit) {
            this.hitsTaken = this.hitsTaken + 1;
            this.health = this.health - 1;
            console.log(this.health);
            this.gotHit = false;
        }
        if (this.hitsTaken == 1) {
            this.hpDisplay.classList.add("hit1");
        }
        if (this.hitsTaken == 2) {
            this.hpDisplay.classList.add("hit2");
        }
        if (this.health == 0) {
            this.dead = true;
            this.hpDisplay.classList.add("hit3");
            this.worm.remove();
        }
        if (this.dead) {
            console.log("game over");
        }
        this.worm.style.transform = "translate(" + this.x + "px, " + this.y + "px) scaleX(" + this.scale + ")";
    };
    return Worm;
}());
//# sourceMappingURL=main.js.map