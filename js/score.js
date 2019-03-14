function Score(game, type) {
  this.game = game;
  this.type = type;
  this.points = 0;
  // this.numberOfPlayers = numberOfPlayers;

  this.countInterval = setInterval(function(){
    //his.onTimer();
  }.bind(this), 1000
  ); 
}

//-------------SCORE1 DRAW----------------

Score.prototype.draw = function() {
  if(this.type==1){
      this.game.ctx.font = "30px 'Press Start 2P'";
      this.game.ctx.fillStyle = "orange";
      this.game.ctx.fillText(
        "Score:" + Math.floor(this.points),
        this.game.canvas.width * 0.05,
        this.game.canvas.height * 0.05
      );
      this.game.ctx.textBaseline = "top";
    }
  if(this.type==2){

      this.game.ctx.font = "30px 'Press Start 2P'";
      this.game.ctx.fillStyle = "blue";
      this.game.ctx.fillText(
        "Score:" + Math.floor(this.points),
        this.game.canvas.width * 0.75,
        this.game.canvas.height * 0.05
      );
      this.game.ctx.textBaseline = "top";
    }

};


