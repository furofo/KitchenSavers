window.addEventListener("DOMContentLoaded", function() {
  document.getElementById("aboutbtn").onclick = function() {
    location.href = "/about.html";
  };
  document.getElementById("homebtn").onclick = function() {
    location.href = "/index.html";
  };
  document.getElementById("contactbtn").onclick = function() {
    location.href = "/contact.html";
  };
  document.getElementById("gallerybtn").onclick = function() {
    location.href = "/gallery.html";
  };

  var header = document.getElementById("indexbackground1");

  var backgrounds = new Array(
    "url(img/background1.jpeg)",
    "url(img/background2.jpeg)"
  );

  var current = 0;

  function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.style.backgroundImage = backgrounds[current];
  }
  setInterval(nextBackground, 3000);

  header.style.backgroundImage = backgrounds[0];
});
