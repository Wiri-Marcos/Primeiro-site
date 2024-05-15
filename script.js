document.addEventListener("DOMContentLoaded", function() {
  const frames = document.querySelectorAll(".video-carousel iframe");
  let current = 0;

  function updateFrames() {
      frames.forEach(frame => frame.style.display = "none"); // Esconde todos os iframes
      frames[current].style.display = "block"; // Mostra apenas o iframe atual
  }

  function autoAdvance() {
      current = (current + 1) % frames.length;
      updateFrames();
  }

  // Configura o intervalo para mudar os vídeos automaticamente
  setInterval(autoAdvance, 5000); // Muda o vídeo a cada 5 segundos

  // Botões para navegação manual
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  prevButton.addEventListener("click", function() {
      current = (current + frames.length - 1) % frames.length;
      updateFrames();
  });

  nextButton.addEventListener("click", function() {
      current = (current + 1) % frames.length;
      updateFrames();
  });

  updateFrames(); // Exibe o primeiro vídeo inicialmente
});
