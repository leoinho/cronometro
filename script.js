var seconds;
var minutes;

descansando = () => {
  seconds = 59;
  minutes = 4;
  cronometro.play();
};
trabalhando = () => {
  seconds = 59;
  minutes = 24;
  cronometro.play();
};
// var seconds = 59;
// var minutes = 24; //document.getElementById("digita");
var ligado = false; //variavel de contrlo, para o play ser apertado apenas uma vez
var audio = new Audio("som_alarme.mp3");
var cronometro = {
  loopTimer: null, //variável de controle para o setInterval

  loop: function() {
    //função que faz o loop
    var me = this; //referencia para o contexto do temporizador
    this.loopTimer = setInterval(function() {
      me.relogio();
    }, 1000); //Executa a transição a cada 1s
  },

  relogio: function() {
    //Aqui vem a lógica do relogio
    seconds = seconds - 1;
    if ((seconds == 0) & (minutes != 0)) {
      minutes = minutes - 1;
      seconds = 59;
    } else if ((minutes == 0) & (seconds == 0)) {
      document.getElementById("minutes").value = "00".slice(-2);
      document.getElementById("seconds").value = "00".slice(-2);
      cronometro.pause();
      audio.play();
    }

    document.getElementById("minutes").value = ("00" + minutes).slice(-2);
    document.getElementById("seconds").value = ("00" + seconds).slice(-2);
  },

  play: function() {
    if (!seconds || !minutes) {
      return false;
    }
    if ((seconds == 0) & (minutes == 0)) {
      return false;
    }
    if (ligado != true) {
      clearInterval(this.loopTimer);
      this.loop();
      this.relogio();
      ligado = true;
    }
  },
  pause: function() {
    ligado = false;
    clearInterval(this.loopTimer); //"Pause". O clearInterval para tudo.
  }
};
