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
        this.div = document.createElement("aal");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        this.leftKey = 0;
        this.rightKey = 0;
        this.x = 0;
        this.y = 0;
        window.addEventListener("keyleft", function (e) { return _this.onKeyLeft(e); });
        window.addEventListener("keyright", function (e) { return _this.onKeyRight(e); });
    }
    Worm.prototype.onKeyLeft = function (e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
            case this.leftKey:
                this.leftSpeed = 5;
                break;
            case this.rightKey:
                this.rightSpeed = 5;
                break;
        }
    };
    Worm.prototype.onKeyRight = function (e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
            case this.leftKey:
                this.leftSpeed = 10;
                break;
            case this.rightKey:
                this.rightSpeed = 10;
                break;
        }
    };
    Worm.prototype.update = function () {
        var newY = this.y - this.leftSpeed + this.rightSpeed;
        if (newY > 0 && newY + 100 < window.innerHeight)
            this.y = newY;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Worm;
}());
//# sourceMappingURL=main.js.map