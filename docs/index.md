---
hide:
  - navigation
  - toc
---

# Página Inicial

!!! animeinga-icon "Aviso Importante"

    🎟️ Para compra dos ingressos, confira o menu "Ingressos", ou [clique aqui.](ingressos.md)

!!! note "Aviso Importante"

    📢 Não perca nenhuma atividade da edição 2023! 🎉

    👀 Fique de olho no menu de atividades para saber tudo o que vai rolar. As páginas serão atualizadas conforme as informações forem saindo, então é importante acompanhar de perto!

    🎮 As inscrições para os jogos estão disponíveis!

    🛍️ Confira a lista de lojas presentes e as promoções exclusivas para os participantes da edição 2023.

    🏫 Todas as salas disponíveis com atividades serão divulgadas no menu de atividades. Não deixe de conferir!

    👉 Não perca nenhum detalhe, acompanhe de perto as atualizações e se prepare para a melhor edição de todas! 🚀

<div class="container">
  <div class="banner">
    <a href="https://goo.gl/maps/kAp39GbAfvvdhoU46" target="_blank" rel="noopener noreferrer" class="map-icon">
      🗺️
    </a>
  </div>
  <div class="countdown-container">
    <h3 id="countdown"></h3>
  </div>
</div>

<style>
.container {
  position: relative;
  height: 350px;
}

.banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(https://github.com/AnimeInga/animeinga.github.io/assets/11020807/c87ee9fe-457e-407f-9c93-5a8361391c2e);
  background-size: cover;
  background-position: center;
}

.map-icon {
  background-color: black;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  z-index: 1;
}

.countdown-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
}

#countdown {
  font-size: 3rem;
  color: #fff;
  background-color: #000;
  padding: 1rem;
  border-radius: 10px;
}
</style>

<script>
  // Define a data final do countdown
  var countDownDate = new Date("Jul 15, 2023 00:00:00").getTime();

  // Atualiza o countdown a cada segundo
  var x = setInterval(function() {

    // Pega a data e hora atual
    var now = new Date().getTime();

    // Calcula a diferença entre a data final e a data atual
    var distance = countDownDate - now;

    // Calcula os dias, horas, minutos e segundos restantes
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibe o resultado no elemento com id "countdown"
    var countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = "Faltam " + days + "d " + hours + "h "
    + minutes + "m " + seconds + "s";

    // Se o countdown acabou, exibe uma mensagem
    if (distance < 0) {
      clearInterval(x);
      countdownElement.innerHTML = "O countdown acabou!";
    }
  }, 1000);
</script>

## :heavy_check_mark: Objetivo

A missão do AnimeIngá é proporcionar um espaço de encontro para fãs de cultura pop e anime, promovendo a interação, o entretenimento e o conhecimento sobre esses temas. Nosso objetivo é oferecer uma experiência única e memorável para todos os participantes, por meio de atrações variadas e de qualidade, sempre com respeito, inclusão e diversidade. Queremos contribuir para o fortalecimento da cultura pop japonesa no Brasil e para a formação de uma comunidade engajada e apaixonada por esse universo.

## 📹 AnimeIngá 2019 - Post Video

<iframe width="100%" height="600" src="https://www.youtube.com/embed/qLH4gmL_ZbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
