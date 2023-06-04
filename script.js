const scrollUpElement = window.document.querySelector("#scroll-up");
const bigName = window.document.querySelector(".big-name");
const bigNameContainer = window.document.querySelector("#introduction")

let animationStarted = false;
let animationSwitch = false;

scrollUpElement.addEventListener("click", function() {
  window.scrollTo({top,behavior: 'smooth'});
});


function writeLetterByLetter(div) {
  if(!animationStarted){
    animationSwitch = !animationSwitch;
    if(animationSwitch){
      var text = "Audric CAPET";
    }
    else{
      var text = "CESI student - dev Web Full Stack";
    }
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

//Change display of year
const firstYearButton = window.document.querySelector(".year-selector.first-year");
const secondYearButton = window.document.querySelector(".year-selector.second-year");
const thirdYearButton = window.document.querySelector(".year-selector.third-year");
const firstYearContainer = window.document.querySelector(".year-container.first-year");
const secondYearContainer = window.document.querySelector(".year-container.second-year");
const thirdYearContainer = window.document.querySelector(".year-container.third-year");
firstYearContainer.style.display = "flex";
secondYearContainer.style.display = "none";
thirdYearContainer.style.display = "none";

firstYearButton.addEventListener("click", function() {
  firstYearContainer.style.display = "flex";
  secondYearContainer.style.display = "none";
  thirdYearContainer.style.display = "none";
});

secondYearButton.addEventListener("click", function() {
  firstYearContainer.style.display = "none";
  secondYearContainer.style.display = "flex";
  thirdYearContainer.style.display = "none";
});

thirdYearButton.addEventListener("click", function() {
  firstYearContainer.style.display = "none";
  secondYearContainer.style.display = "none";
  thirdYearContainer.style.display = "flex";
});

