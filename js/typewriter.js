$(document).ready(function() {
  document.addEventListener("finishedLoading", function(e) {
    $("#typetext").typed({
      strings: ["Xin Chao//Welcome!",
                "Here at CU-VSA we:",
                "Foster community",
                "Share culture",
                "Eat good food :D",
                "Learn history",
                ". . . and much more!",
                "Scroll down to learn more :)"],
      typeSpeed: 80,
      backDelay: 1200,
      loop: true
    });
  });
})
