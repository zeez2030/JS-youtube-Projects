const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

//  Set first image opacity
imgs[0].style.opacity = opacity;
imgs.forEach(img =>
    img.addEventListener('click', imageClick)
)

function imageClick(e) {

    //reset the opacity
    imgs.forEach(img => img.style.opacity = 1);

    //  Change current image to src of clicked image
    current.src = e.target.src;

    //  Add fading class
    current.classList.add('fade-in');

    //  Remove fading class after 0.5s
    setTimeout(() => current.classList.remove('fade-in'), 300);
    //  Change the opacity to opacity var

    e.target.style.opacity = opacity;
}