"use strict";
var Game = (function () {
    function Game() {
        console.log("game created");
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
        this.movementSpeed = 0;
        this.worm = document.createElement("worm");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.worm);
        this.y = window.innerHeight - this.worm.clientHeight;
        this.worm.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.akey = 65;
        this.dkey = 68;
        this.wkey = 87;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Worm.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.dkey:
                this.movementSpeed = 3;
                break;
            case this.akey:
                this.movementSpeed = -3;
                break;
        }
    };
    Worm.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
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