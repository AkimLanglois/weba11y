function delay(URL) {
  setTimeout(function () {
    window.location = URL;
  }, 500);
  document.getElementById("nav").className = "nav navOut";
  document.getElementById("img").className = "home imgOut";
  document.getElementById("divLogin").className = "divParagraphe loginOut";
}
// temporaire: illegal pour le projet lol
$(window).load(function () {
  $("#trigger_popup_fricc").click(function () {
    $(".popupBg").show();
  });
  // $(".hover_bkgr_fricc").click(function() {
  //   $(".hover_bkgr_fricc").hide();
  // });
  $(".popupCloseButton").click(function () {
    $(".popupBg").hide();
  });
});
