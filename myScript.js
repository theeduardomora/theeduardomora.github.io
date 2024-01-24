let slideIndex = 1;
let classIndex = 1;
showSlides(slideIndex);
showClass(classIndex);


const styleSwitcherToggle = document.querySelector(".style-selector-toggler");

styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-selector").classList.toggle("open");
})


const alternateStyles = document.querySelectorAll(".alternate-style");
setActiveStyle('michigan');

function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
            SetMichiganStyle('off');
            if(color == 'michigan') { 
              let curr_th = getComputedStyle(document.querySelector('.color-1')).getPropertyValue('background-color');
              if(curr_th.trim() == 'rgb(0, 0, 0)') { //if black button / white theme use light
                SetMichiganStyle('light');
              }
              else {SetMichiganStyle('dark');}
            }
            else if(color == 'white') { 
              let cv_button = document.querySelector(".cv_button");
              cv_button.classList.add('blacktext');
            }
            else { 
              let cv_button = document.querySelector(".cv_button");
              cv_button.classList.remove('blacktext');
            }
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}

function findActiveStyle() {
  const alternateStyles = document.querySelectorAll(".alternate-style");

  for (let i = 0; i < alternateStyles.length; i++) {
    const style = alternateStyles[i];

    if (style.getAttribute("disabled") == null) {
      return style.getAttribute('title');
    }
  }
}

function SetMichiganStyle(arg) { 
  let body_elem = document.body;
  if(arg == 'off') { 
    body_elem.classList.remove('michigan_theme_light');
    body_elem.classList.remove('michigan_theme_dark');
  }
  else if(arg == "light") { 
    body_elem.classList.add('michigan_theme_light');
  }
  else if(arg == "dark") { 
    body_elem.classList.add('michigan_theme_dark');
  }

}

const root = document.documentElement;


//Need to find active color and if it's white when its black theme or vice versa need to switch it 
//Also should make michigan blue color lighter for dark theme.

setActiveTheme('white');

function setActiveTheme(theme) { 
  if(theme == "white") { 
    let color_2 = document.querySelector(".color-1");
    color_2.style.setProperty('background-color', 'black');
    color_2.onclick = function() {
      setActiveStyle('black');
    };

    let root_elem = document.querySelector(':root');
    root_elem.style.setProperty('--background-color-1', 'white');
    root_elem.style.setProperty('--background-color-2', 'white');
    root_elem.style.setProperty('--border-color', 'black');
    root_elem.style.setProperty('--text-color', 'black');
    let curr_color = findActiveStyle();
    if(curr_color == 'white') { 
      setActiveStyle('black');
    }
    else if(curr_color == 'michigan') { 
      //change css for michigan theme
      setActiveStyle('michigan');
    }

  }
  else { 
    let color_2 = document.querySelector(".color-1");
    color_2.style.setProperty('background-color', 'white');
    color_2.onclick = function() {
      setActiveStyle('white');
    };
    let root_elem = document.querySelector(':root');
    root_elem.style.setProperty('--background-color-1', 'rgb(24, 24, 24)');
    root_elem.style.setProperty('--background-color-2', 'rgb(30, 30, 30)');
    root_elem.style.setProperty('--border-color', 'white');
    root_elem.style.setProperty('--text-color', 'white');
    let curr_color = findActiveStyle();
    console.log(curr_color);
    if(curr_color == 'black') { 
      setActiveStyle('white');
    }
    else if(curr_color == 'michigan') { 
      setActiveStyle('michigan');
    }

  }
}

var myname = "Eduardo Mora";
var myname_i = 0;
var speed = 60;
setTimeout(function () {
  typeName();
}, 700);
function typeName() {
  if (myname_i < myname.length) {
    document.querySelector(".myname").innerHTML += myname.charAt(myname_i);
    myname_i++;
    setTimeout(typeName, speed);
  }
}


// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
  }

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('projectSlides');
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        // slides[i].style.opacity = 0;
        dots[i].className = dots[i].className.replace(" active", "");

    }
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].classList.add('activeslide');
    dots[slideIndex-1].className += " active";

}

function currentClasses(n) { 
    showClass(classIndex = n);
}

function showClass(n) { 
  let i;
  let classes = document.getElementsByClassName("classCard");
  for(i=0; i < classes.length; i++) { 
    classes[i].style.display = "none";
    classes[classIndex - 1].style.opacity = 0;
  }
  classes[classIndex - 1].style.display = "block";
  classes[classIndex - 1].style.opacity = 1;
}

  