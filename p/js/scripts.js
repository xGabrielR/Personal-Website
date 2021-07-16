var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
          document.getElementById("nv").style.top = "0";
      } else {
          document.getElementById("nv").style.top = "-500px";
      }
      prevScrollpos = currentScrollPos;
}