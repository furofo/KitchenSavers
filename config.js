var isclicked = 0;

window.onload = function() {
  document.getElementById("gallery1").onclick = function() {

    if(isclicked === 0) {
      
    document.body.style.backgroundColor = "red";
    console.log("it worked!");
    isclicked = 1;
    }

    else {
      document.body.style.backgroundColor = "blue";
      isclicked = 0;

    }
  };
}


window.addEventListener("DOMContentLoaded", function() {
  document.getElementById("aboutbtn").onclick = function() {
    //these are listeners for each button that link to different website pages
    location.href = "https://furofo.github.io/Jarrel-Cabinet/about.html";
  };
  document.getElementById("homebtn").onclick = function() {
    location.href = "https://furofo.github.io/Jarrel-Cabinet/index.html";
  };
  document.getElementById("contactbtn").onclick = function() {
    location.href = "https://furofo.github.io/Jarrel-Cabinet/contact.html";
  };
  document.getElementById("gallerybtn").onclick = function() {
    location.href = "https://furofo.github.io/Jarrel-Cabinet/gallery.html";
  };
  document.getElementById("gallery1").onclick = function() {
      
    document.body.style.backgroundColor = "red";
    console.log("it worked!");
  };

  var backgroundimg = document.getElementById("indexbackground1");

  var backgrounds = new Array(
    "url(img/background1.jpeg)", //array of all background imgs to cycle through
    "url(img/background2.jpeg)"
  );

  
/*
  var current = 0;

  function nextBackground() {
    current++;
    current = current % backgrounds.length;
    //backgroundimg.style.backgroundImage = backgrounds[current];
    //backgroundimg.background.style.opacity = "1";
    backgroundimg.style.background = backgrounds[current];
    backgroundimg.background.style.opacity = "1";
    console.log(backgrounds[current] + " no repeat");
  }
  setInterval(nextBackground, 3000);

  // backgroundimg.style.background = backgrounds[0];

  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
  
});

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
