const btn = document.querySelector(".hamburger");
const firstLine = document.querySelector("#first-line")
const secondLine = document.querySelector("#second-line")
const thirdLine = document.querySelector("#third-line")
let isOpen = false;
btn.addEventListener("click", ()=>{
isOpen = !isOpen;
// secondLine.style.opacity= isOpen ? 0 : 1
secondLine.style.display= isOpen ? "none" : "block"
firstLine.style.transform= isOpen ? "rotate(-45deg)" : "rotate(0deg)"
thirdLine.style.transform= isOpen ? "rotate(-135deg)" : "rotate(0deg)"
console.log(isOpen);
})


const heroImg = document.getElementById("hero-img");
const navImgs = document.querySelectorAll(".nav-img");
let activeSrc = heroImg.getAttribute("src");
Array.from(navImgs).map((img) => {
img.addEventListener("click", (e) => {
  const src = img.getAttribute("src")
  const box = e.currentTarget.parentNode
  box.classList.remove("click")
  activeSrc = src;
  heroImg.setAttribute("src", activeSrc)
  if( activeSrc === src){
    box.classList.add("click")
  }
 
  // console.log(box)
})
})
const checkActive = (src) => {
  console.log(activeSrc === src)
}