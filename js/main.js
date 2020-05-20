"use strict";
var Game = (function () {
    function Game() {
        this.worm = new Worm();
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.worm.update();
        requestAnimationFrame(function () { return _this.gameLoop; });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Worm = (function () {
    function Worm() {
        var _this = this;
        this.moveSpeed = 0;
        this.aal = document.createElement("aal");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.aal);
        this.leftKey = 87;
        this.rightKey = 83;
        this.x = 0;
        this.y = 500;
        this.aal.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
    }
    Worm.prototype.getWorm = function () {
        return this.aal.getBoundingClientRect();
    };
    Worm.prototype.onKeyUp = function (e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
            case this.leftKey:
                this.moveSpeed = -5;
                break;
            case this.rightKey:
                this.moveSpeed = 5;
                break;
        }
    };
    Worm.prototype.onKeyDown = function (e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
            case this.leftKey:
                this.moveSpeed = 0;
                break;
            case this.rightKey:
                this.moveSpeed = 0;
                break;
        }
    };
    Worm.prototype.update = function () {
        this.x += this.moveSpeed;
        this.aal.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Worm;
}());
//# sourceMappingURL=main.js.map