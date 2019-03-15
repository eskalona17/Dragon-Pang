document.addEventListener("DOMContentLoaded", function(event) {

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var header = document.getElementsByTagName("header")[0];

  main_song = new Audio('sounds/mainsong.mp3');
    main_song.play();

  function onblack1(){
    setTimeout(function(){
      var game = new Game("canvas", 1);
      game.start();
      document.getElementById('canvas').style.backgroundImage = 'url(img/bg1.jpg)';
      kamehameha.pause();
    },7000);
  }

  function onblack2(){
    setTimeout(function(){
      var game = new Game("canvas", 2);
      game.start();
      document.getElementById('canvas').style.backgroundImage = 'url(img/bg4.gif)';
      kamehameha.pause();
    },7000);
  }

  
  document.onkeydown = function(event) {
    //modo 1 jugador
    if (event.keyCode === 49) {
      main_song.pause();
      document.getElementById('canvas').style.backgroundImage = 'url(img/loading2.gif)';
      header.classList.add("header-remove");
      kamehameha.play();
      onblack1();
    }

    //modo dos jugadores
    if (event.keyCode === 50) {
      main_song.pause();
      document.getElementById('canvas').style.backgroundImage = 'url(img/loading3.gif)';
      header.classList.add("header-remove");
      kamehameha.play();
      onblack2();
    }
  };

});
