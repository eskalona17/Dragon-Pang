function Game(canvasId, numberOfPlayers) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  // this.paco = document.getElementById('credits');
  this.numberOfPlayers = numberOfPlayers;

  // this.audio = new Audio("sounds/game.mp3");

  this.player = new Player(this, 1);
  this.balls = [
    new Ball(this, 55, 500, 70, 1), 
    new Ball(this, 55, 1000, 70, 1)
  ];
  this.score = new Score(this, 1);

  if (this.numberOfPlayers == 2) {
    this.player2 = new Player(this, 2);
    this.score2 = new Score(this, 2);
    this.balls = [
      new Ball(this, 55, 500, 70, 2), 
      new Ball(this, 55, 1000, 70, 2),
      new Ball(this, 55, 1000, 70, 2),
    ];
  }

  this.countdown = new Countdown(this);
  this.framesCounter = 0;
}

//-------------GAME START----------------

Game.prototype.start = function () {
  // this.audio.play();
  this.intervalId = setInterval(
    function () {
      this.clear();
      this.draw();
      this.moveAll();
      this.checkCollision();
      this.clearBullets();
      // this.onTimer();
    }.bind(this),
    16
  );
};

//-------------GAME CLEAR----------------

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

//-------------GAME DRAW---------------

Game.prototype.draw = function () {
  this.player.draw();
  if (this.numberOfPlayers == 2) {
    this.player2.draw();
  }
  this.score.draw();
  if (this.numberOfPlayers == 2) {
    this.score2.draw();
  }
  this.countdown.draw();
  this.balls.forEach(function (e) { 
    e.draw();
  });
  this.player.bullets.forEach(function (e) {
    e.draw();
  });
  if (this.numberOfPlayers == 2) {
    this.player2.bullets2.forEach(function (e) {
      e.draw();
    });
  }
};

//-------------GAME MOVE ALL----------------

Game.prototype.moveAll = function () {
  this.balls.forEach(function (e) {
    e.moveAlone();
  });
  this.player.bullets.forEach(function (e) {
    e.move();
  });
  if (this.numberOfPlayers == 2) {
    this.player2.bullets2.forEach(function (e) {
      e.move();
    });
  }
  this.player.move();
  if (this.numberOfPlayers == 2) {
    this.player2.move();
  }

};

//-------------GAME CHECKCOLLISION----------------

Game.prototype.checkCollision = function () 
{
  for (var i = 0; i < this.balls.length; i++) {
    this.balls[i].collidesWithPlayer(this.balls[i], this.player, this.player2);
  }

  for (var i = 0; i < this.balls.length; i++) {
    this.balls[i].collidesWithBullets(this.balls[i], this.player.bullets, i);
    if(this.numberOfPlayers==2){
      this.balls[i].collidesWithBullets(this.balls[i], this.player.bullets, this.player2.bullets2, i);
      }
  }
};

//-------------GAME CLEAR BULLETS----------------

Game.prototype.clearBullets = function () {
  this.player.bullets = this.player.bullets.filter(
    function (e) {
      return e.y > 0;
    }.bind(this)
  );
if(this.numberOfPlayers==2){
  this.player2.bullets2 = this.player2.bullets2.filter(
    function (e) {
      return e.y > 0;
    }.bind(this)
  );
}
};


// Game.prototype.stop = function() {
//   clearInterval(this.interval);
// };

//--------------GAME OVER----------------------

Game.prototype.gameOver = function () {

  this.ctx.font = "70px 'Press Start 2P'";
  this.ctx.fillStyle = "red";
  this.ctx.fillText("GAME OVER!", canvas.width * 0.20, canvas.height * 0.25);
  this.ctx.font = "40px 'Press Start 2P'";
  this.ctx.fillStyle = "yellow";
  this.ctx.fillText("Press P to play again!", canvas.width * 0.15, canvas.height * 0.50);
  this.ctx.textBaseline = "top";
  clearInterval(this.intervalId);
  // var paco = this.game.score.points;
  // document.getElementById("credits").style.visibility = 'inherit';

  // this.guardar.classList.remove("guardar");

  // clearInterval(this.countInterval);
  // this.stop();

  // if(confirm("GAME OVER. Play again?")) {
  //   this.start();
  // }

  // document.onkeydown = function (event) {

  //   if (event.keyCode === 80) {

  //     /*Captura de datos escrito en los inputs*/
  //     this.name = document.getElementById("name").value;
  //     /*Guardando los datos en el LocalStorage*/
  //     debugger
  //     localStorage.setItem("name", this.name);
  //     localStorage.setItem("score: ", this.game.score.points);
  //     /*Limpiando los campos o inputs*/
  //     // document.getElementById("name").value = "";
  //     // document.getElementById("score").value = "";

  //     location.reload();
  //   }
  // };
};

// ---------------- RESET ----------------
// Game.prototype.reset = function() {
//   this.start();
// };
