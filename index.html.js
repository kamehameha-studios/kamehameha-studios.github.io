var functionA = function() {
  function WriteCookie(name, content, domain, path, expires) {
  cookievalue = this.cookievalue;
  document.cookie = name = this.name; content = this.content; domain = this.domain; path = this.path; expires = this.expires;;
  };
  var alertThem = function(message) {
    alert(this.message);
  };
  WriteCookie("guest", "none", "kamehameha-studios.github.io", "/", "When browsing session ends");
  alertThem("You are logged in as a Guest. Please Log in or Sign up to view you things.");
};
var lang = {
  english: document.getElementById("lang-a"),
  deutsch: document.getElementById("lang-b"),
  spanish: document.getElementById("lang-c"),
  french: document.getElementById("lang-d"),
  japenese: document.getElementById("lang-e"),
  portegeese: document.getElementById("lang-f"),
  undefined: document.getElementById("lang-h"),
  chinese: {
    simplified: document.getElementById("lang-i"),
    tranditional: document.getElementById("lang-j")
  }
};       
var programCode = function(processingInstance) {
  with (processingInstance) {
    size(400, 400); 
    frameRate(30);
    var O1 = 0;
    var O2 = 0;
    var O3 = 0;
    var w = 15;
    var w1 = 13;
    var h = 11;
    var h1 = 23;
    var y = 278;
    var x1 = 73;
    var x2 = 127;
    var x3 = 80;
    var kamehameha = {
        h1 = {
          w1: 10,
          w2: 10
        }
    };
    var rectw = 38;
    var ellipsePositions = {
        x: 156,
        y: 113,
    };      
    draw = function() {
      background(41, 21, 21);
      strokeWeight(1);
      fill(18, 59, 26);
      rect(0, 300, 400, 145);
      fill(66, 8, 8);
      triangle(250, 300, 27, 300, 120, 100);
      fill(0, 0, 0);
      ellipse(ellipse.x, ellipse.y, 75, 19);
      ellipse(ellipse.x + 15, ellipse.y - 15, 78, 19);
      ellipse(ellipse.x + 30, ellipse.y - 30, 78, 19);
      ellipse(ellipse.x + 15, ellipse.y - 45, 78, 19);
      var drawLava = function() {
        //lava (volcano)
          fill(255, 0, 0);
          ellipse(122, 53, 13, 112);
          ellipse(114, 68, 6, 114);
        // lava (from the ground)
          ellipse(354, 299, 4, 30);
          ellipse(358, 299, 4, 30);
          ellipse(363, 299, 4, 30);
      };
      fill(128, 53, 53);
      rect(350, 301, 18, 15);
      fill(0, 0, 0);
      strokeWeight(3);
      line(100, 200, 120, 100);
      line(143, 200, 120, 100);
      line(115, 200, 120, 100);
      strokeWeight(1);
      var drawGoku = function() {
        fill(255, 242, 120);
        triangle(137, 360, 77, 153, 25, 360);
        triangle(173, 360, 132, 156, 34, 360);
        triangle(173, 360, 102, 156, 22, 360);
        fill(209, 90, 90);
        ellipse(x2, y, w, h);
        ellipse(x1, y, w, h);
        rect(85, 340, 5, 20);
        ellipse(90, 364, 15, 10);
        rect(110, 340, 5, 20);
        ellipse(117, 364, 15, 10);
        rect(93, 235, 15, 25);
        ellipse(101, 225, 50, 55);
        fill(255, 115, 0);
        rect(x3, 259, rectw, 60);
        rect(x3, 319, rectw, 11);
        rect(x3, 330, w1, h1);
        rect(106, 330, w1, h1);
        fill(255, 255, 255);
        ellipse(101, 286, 20, 20);
        fill(3, 3, 3);
        text("孫", 95, 290);
        strokeWeight(6);
        point(90, 219);
        point(108, 219);
        strokeWeight(3);
        line(115, 200, 99, 214);
        line(81, 200, 99, 214);
        fill(255, 255, 0);
        arc(99, 200, 60, 30, 138, 397);
        line(90, 234, 112, 234);
        fill(0, 118, 252);
        strokeWeight(1);
        ellipse(139, 279, kamehameha.h1.w1, kamehameha.h1.w2);
        ellipse(73, 316, 5, 29);
        ellipse(73, 247, 5, 29);
        ellipse(129, 316, 5, 29);
        ellipse(132, 249, 5, 29);
      };
      var drawFreiza = function() {
        fill(115, 0, 255);
        ellipse(300, 296, 63, 88);
      };
      fill(255, 0, 0);
      ellipse(O1, O2, O3, O3);
      fill(0, 89, 255);
      ellipse(mouseX, mouseY, 12, 12); 
      var label = "  " + mouseX + "," + mouseY;
      text(label, mouseX - 25, mouseY + -8);
      kamehameha.h1w1 += 0;
      kamehameha.h1w2 += 0;
      O3 += 0.000001;
      if (O3 === 0) {
          print("Did you forget to turn on the animation?");
      }
      if (O3 === 400) {
          println("Watch out!!!");
      }
      if (O3 === 800) {
          println("Goku Died!!!");
          println("Freiza wins...");
      }
      drawLava();
      drawGoku();
      drawFreiza();
    };
  }
};
// Get the canvas that ProcessingJS will use
var canvas = document.getElementById("myCanvas"); 
// Pass the function to ProcessingJS constructor
var processingInstance = new Processing(canvas, programCode); 