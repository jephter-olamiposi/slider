
//for next and prev button
let currentIndex = 1;
displaySlides(currentIndex);


function setslides(num) {
    displaySlides(currentIndex += num);
}

function displaySlides(num) {
    let x;
    let slides = document.getElementsByClassName("container");
    if (num > slides.length) { currentIndex = 1 }
    if (num < 1) { currentIndex = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
        
    }
    slides[currentIndex - 1].style.display = "flex";

}

//  for automatic slide
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("container");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 4650); 
}
