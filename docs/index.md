---
hide:
  - navigation
  - toc
---

# Página Inicial

![_8d15abfd-d69f-4751-a864-0694c9f4be7e](https://github.com/AnimeInga/animeinga.github.io/assets/11020807/c87ee9fe-457e-407f-9c93-5a8361391c2e)

???+ question "Aviso"

    👋 Olá! Para ficar por dentro de tudo o que vai acontecer no evento AnimeIngá, é importante acessar o menu de ATIVIDADES 📋. Lá você encontrará informações sobre jogos 🎮, lojas 🛍️ e muito mais! Não perca tempo e confira agora mesmo para não perder nada desse evento incrível! 🤩

## Countdown

<div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
  <h3 id="countdown" style="font-size: 3rem; text-align: center;"></h3>
  <a href="https://goo.gl/maps/kAp39GbAfvvdhoU46" target="_blank" rel="noopener noreferrer" style="font-size: 1.5rem; margin-top: 1rem;">
    Clique aqui e veja o local do evento no Google Maps!
  </a>
</div>

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
    + minutes + "m " + seconds + "s para o AnimeIngá!!!!";

    // Adiciona estilo ao elemento do countdown
    countdownElement.style.color = "#fff";
    countdownElement.style.backgroundColor = "#000";
    countdownElement.style.padding = "1rem";
    countdownElement.style.borderRadius = "10px";

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
