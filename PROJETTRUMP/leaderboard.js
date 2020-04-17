function delay(URL) {
  setTimeout(function () {
    window.location = URL;
  }, 500);
  document.getElementById("nav").className = "nav navOut";
  document.getElementById("img").className = "home imgOut";
  document.getElementById("divTableau").className = "divTableau divTableauOut";
}
