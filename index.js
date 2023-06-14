const allSlides =
    [
        {
            image: 'src="https://www.course-api.com/images/people/person-1.jpeg" alt="maria ferguson"',
            name: 'MARIA FERGUSON',
            title: 'Office Manager',
            text: 'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.'
        },
        {
            image: ' src="https://www.course-api.com/images/people/person-4.jpeg" alt="john doe"',
            name: 'JOHN DOE',
            title: 'Regular Guy',
            text: 'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually,chambray listicle microdosing put a bird on it paleo subway tile squid umami.'
        },
        {
            image: 'src="https://www.course-api.com/images/people/person-3.jpeg" alt="peter smith"',
            name: 'PETER SMITH',
            title: 'Product Designer',
            text: 'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.'
        },
        {
            image: 'src="https://www.course-api.com/images/people/person-2.jpeg" alt="susan andersen"',
            name: 'SUSAN ANDERSEN',
            title: 'The Boss',
            text: 'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag.'
        }
    ]



let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener('click', slidenext);
let counter = 0;
document.querySelector('.gg').innerHTML = `
<div class="container">
    <div class="img">
        <img ${allSlides[counter].image} class="person-img">
    </div>
    <h5>${allSlides[counter].name}</h5>
    <p class="title">${allSlides[counter].title}</p>
    <p class="text">${allSlides[counter].text}</p>
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="icon"height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
    </svg>
</div>`;



function slidenext() {
    if (counter === allSlides.length - 1) {
        counter=0;
        setTimeout(() => { displaySlide(false) }, 100);
    }
    else {
        counter++
        document.querySelector('.container').classList.add('animate-go')
        setTimeout(() => { displaySlide(true) }, 100)
    }

}

prev.addEventListener('click', slideprev);

function slideprev() {
    if (counter === 0) {
        counter =3 ;
        setTimeout(() => { displaySlide(true) }, 100)
    }

    else {
        counter--
        document.querySelector('.container').classList.add('animate-come')
        setTimeout(() => { displaySlide(false) }, 100)
    }
    
}
function displaySlide(isNext) {
    document.querySelector('.gg').innerHTML = `
<div class="container ${isNext ? 'animate-next' : 'animate-prev'}">
    <div class="img">
        <img ${allSlides[counter].image} class="person-img">
    </div>
    <h5>${allSlides[counter].name}</h5>
    <p class="title">${allSlides[counter].title}</p>
    <p class="text">${allSlides[counter].text}</p>
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="icon"height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
    </svg>
</div>`;
    console.log(counter);
}

function showSlides() {
    slidenext()

}
setInterval(showSlides, 7000);

