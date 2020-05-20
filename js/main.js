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
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.aal = document.createElement("aal");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.aal);
        this.leftKey = 37;
        this.rightKey = 39;
        this.upKey = 38;
        this.downKey = 40;
        this.x = 0;
        this.y = 500;
        this.aal.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        window.addEventListener("keyup", function (e) { return _this.onKeyLeft(e); });
        window.addEventListener("keydown", function (e) { return _this.onKeyRight(e); });
    }
    Worm.prototype.onKeyLeft = function (e) {
        console.log(e.keyCode);
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
    };
    Worm.prototype.onKeyRight = function (e) {
        console.log(e.keyCode);
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
    };
    Worm.prototype.update = function () {
        var newY = this.y - this.leftSpeed + this.rightSpeed;
        if (newY > 0 && newY + 100 < window.innerHeight)
            this.y = newY;
        this.aal.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Worm;
}());
//# sourceMappingURL=main.js.map