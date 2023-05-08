const scrollUpElement = window.document.querySelector("#scroll-up");
const bigName = window.document.querySelector(".big-name");
const bigNameContainer = window.document.querySelector("#introduction")
let animationStarted = false;

scrollUpElement.addEventListener("click", function() {
  window.scrollTo({top,behavior: 'smooth'});
});

function writeLetterByLetter(div) {
  if(!animationStarted){
    var text = "Audric CAPET";
    div.innerHTML = "";
    var index = 0;
    var timer = setInterval(function() {
      if (index < text.length) {
        div.innerHTML += text.charAt(index);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
  }
  
}

writeLetterByLetter(bigName);
bigName.addEventListener("click", function() {
  writeLetterByLetter(bigName);
});