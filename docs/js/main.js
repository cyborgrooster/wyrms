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
        this.movementSpeed = 0;
        this.jumpHeight = -5;
        this.jumping = false;
        this.onGround = false;
        this.gravity = 0.2;
        this.worm = document.createElement("worm");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.worm);
        this.y = window.innerHeight - this.worm.clientHeight;
        this.worm.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.akey = 65;
        this.dkey = 68;
        this.wkey = 87;
        window.addEventListener("keydown", function (event) { return _this.onKeyDown(event); });
        window.addEventListener("keyup", function (event) { return _this.onKeyUp(event); });
    }
    Worm.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case this.dkey:
                this.movementSpeed = 3;
                break;
            case this.akey:
                this.movementSpeed = -3;
                break;
            case this.wkey:
                if (this.onGround) {
                    this.jumping = true;
                }
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
        this.dy += this.gravity;
        this.y += this.dy;
        if (this.y >= window.innerHeight - this.worm.clientHeight) {
            this.onGround = true;
            this.jumping = false;
            console.log("ik sta op de grond");
            this.dy = 0;
        }
        else {
            this.onGround = false;
        }
        if (this.jumping == true) {
            this.dy = this.jumpHeight;
        }
        if (this.movementSpeed > 0) {
            this.worm.style.transform = "translate(" + this.x + "px, " + this.y + "px) scaleX(-1)";
        }
        if (this.movementSpeed < 0) {
            this.worm.style.transform = "translate(" + this.x + "px, " + this.y + "px) scaleX(1)";
        }
    };
    return Worm;
}());
//# sourceMappingURL=main.js.map