
function dotClick(str) {
    let [slideNum, dotNum] = [parseInt(str.split('-')[0]), parseInt(str.split('-')[1])];
    let slide = document.getElementsByClassName('slider-main')[slideNum];
    let imgs = slide.getElementsByClassName("slider-item");
    let dots = slide.getElementsByClassName("slider-dots-item");
    for (let i = 0; i < imgs.length; i++) {
        if (i === dotNum) {
            imgs[i].classList.remove('d-none');
            dots[i].style.backgroundColor = "rgb(239, 215, 6)"
        }
        else {
            imgs[i].classList.add('d-none');
            dots[i].style.backgroundColor = "rgba(255, 255, 2, 0.49)"
        }
    }
}