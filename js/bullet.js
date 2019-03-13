function Bullet(game, x, y , type) {
  this.game = game;
  this.x = x;
  this.y = y;
  this.type = type;

  if(this.type==1){
  this.x = this.game.player.x;
  this.y = this.game.player.y;
}
  if(this.type==2){
    this.x = this.game.player2.x;
    this.y = this.game.player2.y;
  }
  // this.y = 500;

  this.vy = 20;
  this.img = new Image();
  this.img.src = "img/ballspider.png";
  this.w = 70;
  this.h = 90;
}

//-------------BULLET DRAW----------------

Bullet.prototype.draw = function() {
  this.game.ctx.drawImage(
    this.img, 
    this.x, 
    this.y, 
    this.w, 
    this.h
  );
};

//-------------BULLET MOVE----------------

Bullet.prototype.move = function() {
  this.y -= this.vy;
};
