var seconds = 60;
var minutes = 2;
var ligado = false; //variavel de contrlo, para o play ser apertado apenas uma vez
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
      temporizador.pause();
    }

    document.getElementById("minutes").value = ("00" + minutes).slice(-2);
    document.getElementById("seconds").value = ("00" + seconds).slice(-2);
  },

  play: function() {
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
