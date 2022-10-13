$('.nao').on('mouseover', function() {
    $(this).animate({
      'top': Math.random() * document.
                getElementById('content').
                clientHeight + "px",
      'left': Math.random() * document.
                getElementById('content').
                clientWidth + "px"
    }, "medium");
  })

  function nao() {
    var botaoNao = document.querySelector('.nao')
    botaoNao.innerHTML = "talvez?"
  } 