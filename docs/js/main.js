"use strict";
var Mole = (function () {
    function Mole() {
        var _this = this;
        this.speed = 3;
        this.molHP = 3;
        this.div = document.createElement("mole");
        this.hpBar = document.createElement("hpBar");
        this.akey = 65;
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        game.appendChild(this.hpBar);
        this.x = 1300;
        this.y = 705;
        this.gotHit = false;
        console.log(this.molHP);
        window.addEventListener("keydown", function (event) { return _this.onKeyDown(event); });
        window.addEventListener("keyup", function (event) { return _this.onKeyUp(event); });
    }
    Mole.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case this.akey:
                this.gotHit = true;
                break;
        }
    };
    Mole.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case this.akey:
                break;
        }
    };
    Mole.prototype.update = function () {
        this.x += this.speed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        if (this.molHP == 2) {
            this.hpBar.className = "heart1";
        }
        if (this.gotHit == true) {
            this.molHP = this.molHP - 1;
            console.log(this.molHP);
            this.gotHit = false;
        }
        if (this.molHP < 1) {
            this.div.style.backgroundImage = "url('')";
            this.molHP = this.molHP = 4;
        }
        if (this.x > 1800) {
            this.div.className = "mole2";
            this.speed = -3;
        }
        else if (this.x < 1200) {
            this.div.className = "mole";
            this.speed = 3;
        }
    };
    return Mole;
}());
var Game = (function () {
    function Game() {
        this.mole = new Mole();
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.mole.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map