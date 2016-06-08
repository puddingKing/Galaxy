// var $ = require('jquery');
var clientBody = require('../modules/tools/clientBody');
var backGround = require("../dev/back/backGround");
var rounds = require("../modules/rounds/rounds");

var galaxy = document.getElementById("galaxy");
var ctx = galaxy.getContext("2d");
galaxy.setAttribute("width",clientBody.clientWidth);
galaxy.setAttribute("height",clientBody.clientHeight);
var width = galaxy.width;
var height = galaxy.height;

(function(){
	backGround.bg(ctx,width,height);  //初始化背景
	rounds.init(ctx,width,height);   //初始化若干圆点
	anim();  //动画

	function anim(){
		ctx.clearRect(0,0,width,height);
		rounds.move(ctx,width,height);
		window.requestAnimationFrame(arguments.callee);
	}
})();

