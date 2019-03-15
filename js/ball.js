function Ball(game, r, x, y, type) {
  this.game = game;
  this.type = type;
  this.x = x;
  this.y = y;
  this.vy = 0;
  this.vx = 2;
  this.r = r;
  this.gravity = 0.35;
  this.img = new Image();
  this.img.src = "img/ball.png";
}

//-----------BALL DRAW---------------

Ball.prototype.draw = function() {
  this.game.ctx.drawImage(
    this.img,
    this.x-56,
    this.y-50,
    this.r*2,
    this.r*2,
  )
  this.game.ctx.beginPath();
  this.game.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
  this.game.ctx.closePath();
 }

//-----------BALL COLLIDESWITHPLAYER---------------

Ball.prototype.collidesWithPlayer = function(ball, player, player2) {
  if(this.type==1){
  
  if (
    player.x < ball.x - 40 + ball.r &&
    player.x + player.w > ball.x - 40 &&
    player.y < ball.y - 50 + ball.r &&
    player.y  + player.h > ball.y - 50
  ) {
    finishgame.play();
    this.game.gameOver();
    battle_sound.pause();
    gameovervoice.play();
    // if(this.game.score.points>this.game.score2.points){
    //   alert('player one wins');
    // }else {
    //   alert('player two wins');
    // }
    // guardar.classList.remove("guardar");
  }
}
if(this.type==2){

  if (
    player.x < ball.x - 40 + ball.r &&
    player.x + player.w > ball.x - 40 &&
    player.y < ball.y - 50 + ball.r &&
    player.y  + player.h > ball.y - 50
  ) {
    this.game.stop();
    if(this.game.score.points>this.game.score2.points){
      finishgame.play();
      this.game.gameOver1();
      battle_sound.pause();
      gameovervoice.play();
    }else if (this.game.score.points == this.game.score2.points){
      finishgame.play();
      battle_sound.pause();
      gameovervoice.play();
      this.game.gameOver();
    }else {
      finishgame.play();
      this.game.gameOver2();
      battle_sound.pause();
      gameovervoice.play();
    }
  }


  if (
    player2.x < ball.x - 40 + ball.r &&
    player2.x + player2.w > ball.x - 40 &&
    player2.y < ball.y - 50 + ball.r &&
    player2.y  + player2.h > ball.y - 50
  ) {
    this.game.stop();

    if(this.game.score.points>this.game.score2.points){
      finishgame.play();
      this.game.gameOver1();
      battle_sound.pause();
      gameovervoice.play();
    }else if (this.game.score.points == this.game.score2.points){
      finishgame.play();
      battle_sound.pause();
      gameovervoice.play();
      this.game.gameOver();
    }else {
      finishgame.play();
      this.game.gameOver2();
      battle_sound.pause();
      gameovervoice.play();
    }

    // guardar.classList.remove("guardar");
  }
}
};

//-----------BALL COLLIDESWITHBULLETS---------------

Ball.prototype.collidesWithBullets = function(ball, bullets, bullets2, p) {
  if(this.type==1){
      for (var i = 0; i < bullets.length; i++) {
        if (
          bullets[i].x < ball.x + ball.r &&
          bullets[i].x + bullets[i].w > ball.x &&
          bullets[i].y < ball.y + ball.r &&
          bullets[i].y + bullets[i].h > ball.y
        ) {
          bullets.splice([i], 1);
          this.game.score.points += 25;
          var oldBall = {
            x: ball.x,
            y: ball.y,
            r: ball.r
          };
          this.game.balls.splice([p], 1);
          explosion.play();
          this.newBall();
         
          if (ball.r > 26) {
            var smallBall1 = new Ball(
              this.game,
              25,
              oldBall.x + 60,
              oldBall.y - 40,
              1
            );
           
            var smallBall2 = new Ball(
              this.game,
              25,
              oldBall.x - 60,
              oldBall.y - 40,
              1
            );
            this.game.balls.push(smallBall1, smallBall2);
            return true;
          }
        }
      }
    }
if(this.type==2){

  //player one
  for (var i = 0; i < bullets.length; i++) {
    if (
      bullets[i].x < ball.x + ball.r &&
      bullets[i].x + bullets[i].w > ball.x &&
      bullets[i].y < ball.y + ball.r &&
      bullets[i].y + bullets[i].h > ball.y
    ) {
      bullets.splice([i], 1);
      this.game.score.points += 25;
      var oldBall = {
        x: ball.x,
        y: ball.y,
        r: ball.r
      };
      this.game.balls.splice([p], 1);
      explosion.play();
      this.newBall();
     
      if (ball.r > 26) {
        var smallBall1 = new Ball(
          this.game,
          25,
          oldBall.x + 60,
          oldBall.y - 40,
          1
        );
       
        var smallBall2 = new Ball(
          this.game,
          25,
          oldBall.x - 60,
          oldBall.y - 40,
          1
        );
        this.game.balls.push(smallBall1, smallBall2);
        return true;
      }
    }
  }

  //player two
  for (var i = 0; i < bullets2.length; i++) {
    if (
      bullets2[i].x < ball.x + ball.r &&
      bullets2[i].x + bullets2[i].w > ball.x &&
      bullets2[i].y < ball.y + ball.r &&
      bullets2[i].y + bullets2[i].h > ball.y
    ) {
      bullets2.splice([i], 1);
      this.game.score2.points += 25;
      var oldBall = {
        x: ball.x,
        y: ball.y,
        r: ball.r
      };
      this.game.balls.splice([p], 1);
      explosion.play();

      this.newBall();
       
      if (ball.r > 26) {
        debugger
        var smallBall1 = new Ball(
          this.game,
          25,
          oldBall.x + 60,
          oldBall.y - 40,
          2
        );
  
        var smallBall2 = new Ball(
          this.game,
          25,
          oldBall.x - 60,
          oldBall.y - 40,
          2
        );
        this.game.balls.push(smallBall1, smallBall2);
        return true;
      }
    }
  }
}
};

//-----------BALL MOVEALONE---------------

Ball.prototype.moveAlone = function() {

  if (this.y <= 500) {
    this.vy += this.gravity;
    this.y += this.vy;
    this.x += this.vx;

    if (this.y + this.r > this.game.canvas.height || this.y - this.r < 0) {
      this.vy *= -1;
    }
    if (this.x + this.r > this.game.canvas.width || this.x - this.r < 0) {
      this.vx *= -1;
    }
  } else if (this.y > 500) {
    this.y += this.vy;
    this.x += this.vx;

    if (this.y + this.r + this.vy > this.game.canvas.height) {
      this.vy *= -1;
    }

    if (this.x + this.r > this.game.canvas.width || this.x - this.r < 0) {
      this.vx *= -1;
    }
  }
};

//------------NEW BALL---------------

Ball.prototype.newBall = function() {
  if(this.type==1){
    if (this.game.score.points % 50 === 0 && this.game.score.points!= 50 && 
      this.game.score.points!=150 && this.game.score.points!=250 && 
      this.game.score.points!=850 && this.game.score.points!=950) { 
        this.game.balls.push(new Ball(this.game, 55, 750, 70, 1));  
      }
}
  if(this.type==2){
    if (this.game.score2.points % 50 === 0 && this.game.score2.points!= 50 && 
      this.game.score2.points!=150 && this.game.score2.points!=250 && 
      this.game.score2.points!=850 && this.game.score2.points!=950) { 
      this.game.balls.push(new Ball(this.game, 55, 750, 70, 2)); 
    }   
  }
};

 
  // if(this.game.score.points === 125) {
  //   this.game.gameOver();
  // }

