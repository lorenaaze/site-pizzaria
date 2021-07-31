let time = 2500;
let photoIndex = 0;
let photos = document.querySelectorAll(".slide img");
let max = photos.length;

function nextPhoto() {
    photos[photoIndex].classList.remove("selecionada");

    photoIndex++;

    if(photoIndex >= max) {
        photoIndex = 0;
    }

    photos[photoIndex].classList.add("selecionada");
}


function inicio() {
    setInterval(() => {
        nextPhoto()
    }, time)
}

window.addEventListener("load", inicio);