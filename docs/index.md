---
hide:
  - navigation
  - toc
---

# Página Inicial

## Countdown

<div>
  <h3 id="countdown"></h3>
  <a href="https://goo.gl/maps/kAp39GbAfvvdhoU46" target="_blank" rel="noopener noreferrer">
    Clique aqui e veja o local do evento no Google Maps!
  </a>
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
        document.getElementById("countdown").innerHTML = "Faltam " + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s para o AnimeIngá!!!!";
        
        // Se o countdown acabou, exibe uma mensagem
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("countdown").innerHTML = "O countdown acabou!";
        }
      }, 1000);
    </script>
</div>

## :heavy_check_mark: Objetivo

A missão do AnimeIngá é proporcionar um espaço de encontro para fãs de cultura pop e anime, promovendo a interação, o entretenimento e o conhecimento sobre esses temas. Nosso objetivo é oferecer uma experiência única e memorável para todos os participantes, por meio de atrações variadas e de qualidade, sempre com respeito, inclusão e diversidade. Queremos contribuir para o fortalecimento da cultura pop japonesa no Brasil e para a formação de uma comunidade engajada e apaixonada por esse universo.

## AnimeIngá 2019 - Post Video

<iframe width="100%" height="600" src="https://www.youtube.com/embed/qLH4gmL_ZbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
