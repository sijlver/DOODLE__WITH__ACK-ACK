/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fire; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fire = function () {
	function Fire(ctx, img) {
		_classCallCheck(this, Fire);

		this.ctx = ctx;
		this.img = img;
		this.x = 1110;
		this.y = 300;
		this.width = 0;
		this.height = 0;
		this.sX = 0;
		this.sY = 0;
		this.time = 0;
		this.explosion = true;
	}

	_createClass(Fire, [{
		key: "update",
		value: function update() {
			if (this.x >= 150 && this.explosion) {
				this.width = 21;
				this.height = 21;
				this.x = Math.pow(1 - this.time, 2) * 1110 + 2 * this.time * (1 - this.time) * 755 + Math.pow(this.time, 2) * 200;
				this.y = Math.pow(1 - this.time, 2) * 300 + 2 * this.time * (1 - this.time) * -200 + Math.pow(this.time, 2) * 350;
				this.time += 0.008;
			} else {
				this.width = 62;
				this.height = 62;
				this.sX += 62;
			}
		}
	}, {
		key: "disappear",
		value: function disappear() {
			this.x = 1110;
			this.y = 300;
			this.sX = 0;
			this.width = 0;
			this.height = 0;
			this.time = 0;
			this.explosion = true;
		}
	}, {
		key: "render",
		value: function render() {
			this.ctx.drawImage(this.img, this.sX, this.sY, 62, 62, this.x, this.y, this.width, this.height);
		}
	}]);

	return Fire;
}();



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lines; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Lines = function () {
    function Lines(ctx, lineImg) {
        var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var sX = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        var sY = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 12;
        var sHeight = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 16;
        var lineJump = arguments[7];

        _classCallCheck(this, Lines);

        this.ctx = ctx;
        this.sX = sX;
        this.sY = sY;
        this.sHeight = sHeight;
        this.posY = y;
        this.posX = x;
        this.lineWidth = 80;
        this.lineHeight = sHeight;
        this.lineJump = lineJump;
        this.disappear = 1;
        this.img = lineImg;
    }

    _createClass(Lines, [{
        key: "update",
        value: function update() {
            var incr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;

            this.posY += incr;
        }
    }, {
        key: "render",
        value: function render() {
            this.ctx.drawImage(this.img, this.sX, this.sY, 57, this.sHeight, this.posX, this.posY, this.lineWidth, this.lineHeight);
        }
    }]);

    return Lines;
}();



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
    function Player(ctx, playerImg, score, button, continueBlock) {
        var _this = this;

        _classCallCheck(this, Player);

        this.ctx = ctx;
        this.y = 580;
        this.x = 750;
        this.sX = 0;
        this.run = 60;
        this.jump = 140;
        this.width = 50;
        this.height = 53;
        this.diff = 0;
        this.incr = 0;
        this.down = true;
        this.acceleration = 0;
        this.img = playerImg;
        this.score = score;
        document.addEventListener('keydown', function (e) {
            if (e.keyCode === 38 && button.classList.contains('start') && continueBlock.display === 'none') {
                _this.acceleration = 150;
                _this.score.innerHTML = Number(_this.score.innerHTML) - 100;
            } else if (e.keyCode === 39) {
                _this.sX = 197;
                _this.run = 0;
            } else if (e.keyCode === 37) {
                _this.sX = 0;
                _this.run = 0;
            }
        });
    }

    _createClass(Player, [{
        key: 'update',
        value: function update(lines, fire) {
            var _this2 = this;

            if (fire.x <= this.x + this.width && fire.x >= this.x && this.y <= fire.y && this.y + this.height >= fire.y && fire.explosion) {
                fire.explosion = false;
                this.x -= 70;
                this.score.innerHTML = Number(this.score.innerHTML) - 100;
            }
            lines.some(function (line, i) {
                if (line.posX < _this2.x + _this2.width && line.posX + line.lineWidth > _this2.x && line.posY <= _this2.y && line.posY + 8 >= _this2.y && _this2.down && i < 7) {
                    _this2.jump = 0;
                    if (line.lineJump === 'trampoline') {
                        _this2.acceleration = 320;
                    } else if (line.lineJump === 'disappear' && line.disappear < 2) {
                        _this2.acceleration = 0;
                        line.disappear++;
                    } else if (line.lineJump === 'score') {
                        _this2.acceleration = 0;
                        line.sX = 0;
                        line.lineJump = '';
                        _this2.score.innerHTML = Number(_this2.score.innerHTML) + 50;
                    } else if (line.lineJump === 'disappear' && line.disappear >= 2) {
                        _this2.acceleration = 0;
                        lines.splice(i, 1);
                        return true;
                    } else {
                        _this2.acceleration = 0;
                    }
                    lines.some(function (line1) {
                        if (_this2.diff <= 0 && line1.posY > line.posY) {
                            _this2.diff = line1.posY - line.posY;
                            _this2.incr = 2;
                            return true;
                        }
                        _this2.diff = 0;
                    });
                    return true;
                }
            });
            if (this.diff >= 0) {
                this.diff -= this.incr;
            }
            if (this.jump <= this.acceleration + 120) {
                this.y -= 8 + this.incr;
                this.jump += 8 + this.incr;
                this.down = false;
            } else if (this.jump <= this.acceleration + 160) {
                this.y -= 6 + this.incr;
                this.jump += 6 + this.incr;
            } else {
                this.down = true;
                this.y += 6 + this.incr;
            }
            if (this.run <= 60 && this.sX === 197 && this.x >= 824) {
                this.x = 424;
                this.run += 2;
            } else if (this.run <= 60 && this.sX === 0 && this.x <= 424 - this.width) {
                this.x = 824;
                this.run += 2;
            } else if (this.run <= 60 && this.sX === 197 && this.x <= 824) {
                this.x += 4;
                this.run += 2;
            } else if (this.run <= 60 && this.sX === 0 && this.x >= 424 - this.width) {
                this.x -= 4;
                this.run += 2;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            this.ctx.drawImage(this.img, this.sX, 0, 197, 193, this.x, this.y - this.height, this.width, this.height);
        }
    }]);

    return Player;
}();



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getImg; });
function getImg(src) {
    return new Promise(function (resolve) {
        var img = new Image();
        img.src = src;
        img.onload = function () {
            resolve(img);
        };
    });
}



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tank; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tank = function () {
	function Tank(ctx, tankImg, fire) {
		_classCallCheck(this, Tank);

		this.ctx = ctx;
		this.img = tankImg;
		this.x = 1060;
		this.y = 310;
		this.sX = 0;
		this.sY = 508;
		this.width = 145;
		this.height = 127;
		this.resolve = 'up';
		this.time = 0;
		this.waitTime = 0;
		this.fire = fire;
	}

	_createClass(Tank, [{
		key: 'update',
		value: function update() {
			if (this.sY <= 0) {
				wait.call(this, 'down');
			} else if (this.sY >= 508) {
				wait.call(this, 'up');
			}
			if (this.resolve === 'up') {
				this.sY -= 127;
			} else if (this.resolve === 'down') {
				this.sY += 127;
			}
			function wait(direction) {
				if (this.waitTime <= 300) {
					if (this.sY <= 0) {
						this.fire.update();
					}
					this.resolve = 'wait';
					this.waitTime += 2;
				} else {
					this.waitTime = 0;
					this.resolve = direction;
					this.fire.disappear();
				}
			}
		}
	}, {
		key: 'render',
		value: function render() {
			this.ctx.drawImage(this.img, this.sX, this.sY, this.width, this.height, this.x, this.y, this.width, this.height);
			this.fire.render();
		}
	}]);

	return Tank;
}();



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__promises__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lines__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fire__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tank__ = __webpack_require__(4);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }







Promise.all([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__promises__["a" /* getImg */])('./img/bg.png'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__promises__["a" /* getImg */])('./img/player.png'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__promises__["a" /* getImg */])('./img/platforms.png'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__promises__["a" /* getImg */])('./img/tank.png'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__promises__["a" /* getImg */])('./img/fire.png')]).then(function (results) {
    return init.apply(undefined, _toConsumableArray(results));
});

function init(bgImg, playerImg, lineImg, tankImg, fireImg) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var arr = [{ x: 700, y: 580 }, { x: 720, y: 480 }, { x: 600, y: 430 }, { x: 500, y: 380 }, { x: 620, y: 250 }, { x: 400, y: 200 }, { x: 500, y: 100 }, { x: 620, y: 80 }, { x: 720, y: 80 }, { x: 600, y: 20 }, { x: 400, y: -80 }];
    var score = document.getElementById('score');
    var button = document.getElementById('start');
    var continueBlock = document.querySelector('.continue');
    var continueButton = document.getElementById('continueButton');
    var player = new __WEBPACK_IMPORTED_MODULE_1__player__["a" /* Player */](ctx, playerImg, score, button, getComputedStyle(continueBlock));
    var fire = new __WEBPACK_IMPORTED_MODULE_3__fire__["a" /* Fire */](ctx, fireImg);
    var tank = new __WEBPACK_IMPORTED_MODULE_4__tank__["a" /* Tank */](ctx, tankImg, fire);
    var lines = arr.map(function (obj) {
        return new __WEBPACK_IMPORTED_MODULE_2__lines__["a" /* Lines */](ctx, lineImg, obj.x, obj.y);
    });
    var lose = false;
    canvas.width = 1200;
    canvas.height = 600;

    function randomLine(lines) {
        var rand = Math.round(1 + 10 * Math.random());
        var last = lines[lines.length - 1];
        var x = Math.round(400 + 320 * Math.random());
        var y = last.posY - 60 * Math.round(1 + Math.random());
        switch (rand) {
            case 5:
                {
                    return new __WEBPACK_IMPORTED_MODULE_2__lines__["a" /* Lines */](ctx, lineImg, x, y, 118, 0, 28, 'trampoline');
                }
            case 6:
                {
                    return new __WEBPACK_IMPORTED_MODULE_2__lines__["a" /* Lines */](ctx, lineImg, x, y, 179, 12, 16, 'disappear');
                }
            case 7:
                {
                    return new __WEBPACK_IMPORTED_MODULE_2__lines__["a" /* Lines */](ctx, lineImg, x, y, 59, 0, 28, 'score');
                }
            default:
                {
                    return new __WEBPACK_IMPORTED_MODULE_2__lines__["a" /* Lines */](ctx, lineImg, x, y);
                }
        }
    }
    function startFun(e) {
        e.target.classList.toggle('start');
        gameLoop();
        e.preventDefault();
    }
    function loseFun(player) {
        if (player.y >= 600 || Number(score.innerHTML) <= -200) {
            continueBlock.style.display = 'block';
            lose = true;
            continueButton.addEventListener('click', function (e) {
                e.preventDefault();
                location.reload(true);
            });
        }
    }
    function updateLines(player) {
        for (var i = 0; i < lines.length; i++) {
            if (lines[i].posY >= canvas.height) {
                lines.splice(i, 1);
                score.innerHTML = Number(score.innerHTML) + 10;
                lines.push(randomLine(lines));
                lines.push(randomLine(lines));
                break;
            }
            if (player.diff > 0) {
                if (player.acceleration) {
                    lines[i].update(18);
                } else {
                    lines[i].update();
                }
            }
            lines[i].render();
        }
    }
    function gameLoop() {
        ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
        updateLines(player);
        player.update(lines, fire);
        player.render();
        loseFun(player);
        button.addEventListener('click', startFun);
        if (button.classList.contains('start') && !lose) {
            window.requestAnimationFrame(gameLoop);
        }
        if (Number(score.innerHTML) >= 200) {
            tank.update();
        } else if (Number(score.innerHTML) < 200 && tank.sY < 508) {
            tank.resolve = 'down';
            tank.update();
        }
        tank.render();
    }
    gameLoop();
}

/***/ })
/******/ ]);