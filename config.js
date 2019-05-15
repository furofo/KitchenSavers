window.addEventListener("DOMContentLoaded", function() {
  /* document.getElementById("aboutbtn").onclick = function() {
    //these are listeners for each button that link to different website pages
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
  /*
  var backgroundimg = document.getElementById("indexbackground1");

  var backgrounds = new Array(
    "url(img/background1.jpeg)",  //array of all background imgs to cycle through
    "url(img/background2.jpeg)"
  );

  var current = 0;

  function nextBackground() {
    current++;
    current = current % backgrounds.length;
    backgroundimg.style.backgroundImage = backgrounds[current];
  }
  setInterval(nextBackground, 3000);
  

  backgroundimg.style.backgroundImage = backgrounds[0];
  */
  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
});

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
