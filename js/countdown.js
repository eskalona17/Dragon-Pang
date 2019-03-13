
function Countdown(game) {
    this.game = game;
    this.i = 60;
    this.countInterval = setInterval(function(){
      this.onTimer();
    }.bind(this), 1000
    ); 
  }
  
  Countdown.prototype.onTimer = function(){
    this.i--;
    // if(this.i < 5 && this.i<0){
    //   this.game.ctx.fillStyle = "red";
    // }
    if (this.i < 0) {
      this.game.gameOver();
    }
    else {
        setTimeout(this.onTimer, 1000);
    }
  }

  //-------------SCORE DRAW----------------
  
  Countdown.prototype.draw = function() {
    this.game.ctx.font = "30px 'Press Start 2P'";
    this.game.ctx.fillStyle = "yellow";
    this.game.ctx.fillText((this.i),
      this.game.canvas.width * 0.47,
      this.game.canvas.height * 0.05
    );
    this.game.ctx.textBaseline = "top";
  };