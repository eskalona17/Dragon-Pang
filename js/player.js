function Player(game, type) {
  this.game = game;
  this.type = type;
  this.x = this.game.canvas.width * 0.2;
  this.y = 400;
  this.w = 85;
  this.h = 200;


  this.img = new Image();
  if(this.type==1){
      this.img.src = "img/sprites_goku.png";
      this.LEFT_KEY = 37;
      this.RIGHT_KEY = 39;
      this.SPACE = 32;
    }
  if(this.type==2){
      this.img.src = "img/sprites_vegeta_2.png";
      this.x = this.game.canvas.width * 0.7;
      this.LEFT_KEY = 65;
      this.RIGHT_KEY = 68;
      this.SPACE = 84;
    }

  this.img.frames = 12;
  this.img.frameIndex = 0;

  this.speed = 10;
  this.moveRight = false;
  this.moveLeft = false;

  this.bullets = [];

  this.bullets2 = [];

  this.setListeners();
}

//-------------PLAYER DRAW----------------

Player.prototype.draw = function() {
  this.game.ctx.drawImage(
    //drawImage(image1, sx1, sy1, sWidth1, sHeight1, dx, dy, dWidth, dHeight);
    this.img, //image
    this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
    0,
    Math.floor(this.img.width / this.img.frames),
    this.img.height,
    this.x,
    this.y,
    this.w,
    this.h
  );

};

//-------------PLAYER SHOOT----------------

Player.prototype.shoot = function() {
  if(this.type==1){
  this.bullets.push(new Bullet(this.game, this.x, this.y, 1));
}
if(this.type==2){
  this.bullets2.push(new Bullet(this.game, this.x, this.y, 2));
}
};

//-------------PLAYER SETLISTENERS----------------

var pressed = false;

Player.prototype.setListeners = function() {
  document.addEventListener("keydown", function(event){
  if(this.type==1){
    if (event.keyCode === this.RIGHT_KEY) {
      this.moveRight = true;
      if (this.img.frameIndex < 11) {
        this.img.frameIndex++;
      } else this.img.frameIndex = 6;
    }

    if (event.keyCode === this.LEFT_KEY) {
      this.moveLeft = true;
      if (this.img.frameIndex > 0) {
        this.img.frameIndex--;
      } else this.img.frameIndex = 5;
    }

    if (event.keyCode === this.SPACE) {
      hit.play();
      if(!pressed){
      this.shoot();
      pressed = true;
    }    
    }
    
  }
  
  if(this.type==2){
    if (event.keyCode === this.RIGHT_KEY) {
      this.moveRight = true;
      if (this.img.frameIndex < 11) {
        this.img.frameIndex++;
      } else this.img.frameIndex = 6;
    }

    if (event.keyCode === this.LEFT_KEY) {
      this.moveLeft = true;
      if (this.img.frameIndex > 0) {
        this.img.frameIndex--;
      } else this.img.frameIndex = 5;
    }

    if (event.keyCode === this.SPACE) {
      hit.play();
      if(!pressed){
        this.shoot();
        pressed = true;
      }    
    }
  }
}.bind(this));
document.addEventListener("keyup", function(){
      pressed = false
    if(this.type==1){
        if (event.keyCode === this.RIGHT_KEY) {
          this.moveRight = false;
        }
        if (event.keyCode === this.LEFT_KEY) {
          this.moveLeft = false;
        }
      }
      if(this.type==2){
        if (event.keyCode === this.RIGHT_KEY) {
          this.moveRight = false;
        }
        if (event.keyCode === this.LEFT_KEY) {
          this.moveLeft = false;
        }
      }
    }.bind(this));
};


//-------------PLAYER MOVE----------------

Player.prototype.move = function() {
  if (this.moveRight == true) {
    if (this.x + this.w < this.game.canvas.width) this.x += this.speed;
  }

  if (this.moveLeft == true) {
    if (this.x > 0) this.x -= this.speed;
  }
};


