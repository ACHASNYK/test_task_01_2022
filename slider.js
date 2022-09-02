let index = 1;
showSlides(index);

function handleSlide(n) {
    showSlides(index += n);
}

function currentSlide(n) {
    showSlides(index = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('slides');
    let markers = document.getElementsByClassName('markers_item');
    if (n > slides.length) { index = 1 }
    if (n < 1) { index = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (i = 0; i < markers.length; i++) {
        markers[i].className = markers[i].className.replace(" active", "");
    }
    slides[index - 1].style.display = "block";
   markers[index - 1].className += " active";
    
}