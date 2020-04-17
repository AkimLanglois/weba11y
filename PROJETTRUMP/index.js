function delay(URL) {
  setTimeout(function () {
    window.location = URL;
  }, 500);
  document.getElementById("nav").className = "nav navOut";
  document.getElementById("img").className = "home imgOut";
  document.getElementById("divJoueur").className = "divJoueur divJoueurOut";
  document.getElementById("divTableau").className = "divTableau divTableauOut";
  document.getElementById("divRessource").className =
    "divRessource divRessourceOut";
  document.getElementById("divInventaire").className =
    "divInventaire divInventaireOut";
}

// temporaire: illegal pour le projet lol

$(window).load(function () {
  $("#trigger_popup_fricc").click(function () {
    $(".popupBg").show();
  });
  $("#trigger_popup_fricc2").click(function () {
    $(".popupBg2").removeClass('hideDisplay')
    $(".popupBg2").addClass('gridDisplay');
  });
  // $(".hover_bkgr_fricc").click(function() {
  //   $(".hover_bkgr_fricc").hide();
  // });
  $(".popupCloseButton").click(function () {
    $(".popupBg").hide();
  });

  $(".popupCloseButton").click(function () {
    $(".popupBg2").removeClass('gridDisplay')
    $(".popupBg2").addClass('hideDisplay');
  });
});
