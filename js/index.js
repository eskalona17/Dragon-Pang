document.addEventListener("DOMContentLoaded", function(event) {

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var header = document.getElementsByTagName("header")[0];
  var new_bg = document.getElementById("canvas")[0];
  var guardar = document.getElementsByClassName("guardar");

  function onblack1(){
    setTimeout(function(){
      var game = new Game("canvas", 1);
      game.start();
      // header.classList.add("header-remove");
      document.getElementById('canvas').style.backgroundImage = 'url(img/900x.jpg)';
    },5000);
  }

  function onblack2(){
    setTimeout(function(){
      var game = new Game("canvas", 2);
      game.start();
      // header.classList.add("header-remove");
      document.getElementById('canvas').style.backgroundImage = 'url(img/bg4.gif)';
    },6500);
  }

  
  document.onkeydown = function(event) {
    //modo 1 jugador
    if (event.keyCode === 49) {
      document.getElementById('canvas').style.backgroundImage = 'url(img/loading2.gif)';
      header.classList.add("header-remove");
      onblack1();
    }

    //modo dos jugadores
    if (event.keyCode === 50) {
      document.getElementById('canvas').style.backgroundImage = 'url(img/loading3.gif)';
      header.classList.add("header-remove");
      onblack2();
    }

    //créditos
    // if (event.keyCode === 67) {
    //   // var credit = new Credit("credits");
    //   // credit.start();
    //   window.location.href = 'credits.html';
    //   /*Obtener datos almacenados*/
    //   this.name = localStorage.getItem("name");
    //   this.points = localStorage.getItem("score");
    //   /*Mostrar datos almacenados*/      
    //   document.getElementById("name").innerHTML = this.name;
    //   document.getElementById("score").innerHTML = this.points; 
    // }
    // Player.move(event);
  };
  
  //modo 2 jugadores
  // document.onkeydown = function(event) {
  //   if (event.keyCode === 80) {
  //     var game = new Game("canvas");
  //     game.start();
  //   }
  // };
});
