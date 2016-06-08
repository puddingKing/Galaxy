var backGround = {
	"bg":function(ctx,width,height){
		ctx.clearRect(0,0,width,height);
		ctx.save();
		ctx.fillStyle = "#eaeaea";
		ctx.fillRect(0,0,width,height);
		ctx.restore();
	}
}
module.exports = backGround;