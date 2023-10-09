const sections = document.querySelectorAll(".section");
const circle = document.getElementById("circle");
const sec1 = document.getElementById("section1");
const sec2 = document.getElementById("section2");
const bgcolor1 = window.getComputedStyle(sec1).getPropertyValue("background-color");
const bgcolor2 = window.getComputedStyle(sec2).getPropertyValue("background-color");

   let circleBG = "";        

function setCirclePosition() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const scrollY = window.scrollY;

    const maxTopPosition = windowHeight - circle.clientHeight;
    const maxLeftPosition = windowWidth - circle.clientWidth;
    const topPosition = (scrollY / (windowHeight * 2)) * maxTopPosition;
    const leftPosition = (scrollY / (windowHeight * 2)) * maxLeftPosition;

    circle.style.top = topPosition + "px";
    circle.style.left = leftPosition + "px";
    
 
    circleBG = circleBG === bgcolor1 ? bgcolor2 : bgcolor1;
    circle.style.backgroundColor = circleBG; 
}

setCirclePosition();

window.addEventListener("scroll", setCirclePosition);
