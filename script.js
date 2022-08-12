function animate() {
    setTimeout(scramble, 0, "title", 50);
    setTimeout(typeWriter, 150, "intro", "> jade wang.")
    typeWriter();
}
function scramble(element, speed) {
    var titleText = document.getElementById(element);
    var text = titleText.innerHTML;
    var textArray = text.split("");
    console.log(textArray);
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var displayTime = speed;
    var curText = "";
    titleText.innerHTML = curText;
    titleText.style.visibility = "visible";
    //add random letters to the display one by one
    for (var i = 0; i < text.length; i++) {
        setTimeout(function () {
            curText += randomLetters(1);
            titleText.innerHTML = curText;
            //console.log("curText:", curText, "i:", i)
        }, (i + 1) * displayTime);
    }
    var part1Time = text.length * displayTime; 
    
    //randomly scramble the letters n times
    var scrambleNum = 2; //times to scramble
    for (var i = 0; i < scrambleNum; i++) {
        setTimeout(function () {
            curText = randomLetters(text.length);
            titleText.innerHTML = curText;
            //console.log("curText:", curText, "i:", i)
        }, (i + 1) * displayTime + part1Time);
    }
    var part2Time = scrambleNum * displayTime + part1Time;
    
    var base = "";
    var bLoop = 2; //number of times to loop b
    for (var a = 0; a < text.length; a++) {
        setTimeout(partA, a * displayTime * (bLoop) + part2Time - 50, a)
        for (var b = 0; b < bLoop; b++) {
            setTimeout(partB, a * displayTime * (bLoop) + b * displayTime + part2Time, text.length - a - 1) 
        }
    }
    var part3Time = text.length * bLoop * displayTime + part2Time;

    //helper functions:
    function partA(n) {
        base += textArray[n];
    }
    function partB(n) {
        curText = base + randomLetters(n);
        titleText.innerHTML = curText;
        //console.log("curText:", curText, "a:", a, "b:", b);
    }
    //randomLetters: return string of n random letters
    function randomLetters(n) {
        var str = "";
        for (var i = 0; i < n; i++) {
            str += alphabet.charAt(Math.floor(Math.random(0, 1) * 26));
        }
        return str;
    }
}
function typeWriter(element, msg){
    var message = document.getElementById(element);
    
    var typewriter = new Typewriter(message, {
      loop: false,
      cursor: '_',
      delay: 200,
    });
  
    typewriter.typeString(msg)
      .start();
  }
function darkLightToggle(){
    var element = document.body;
    element.classList.toggle("lightMode");
    var header = document.getElementById("header");
    header.classList.toggle("lightHeader");
    var icons = document.getElementById("icons");
    icons.classList.toggle("lightIcons")
    var toggleSwitch = document.getElementById("switch");
    toggleSwitch.classList.toggle("lightSlider")
}