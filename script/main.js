// document.getElementById('slider-left').onclick = sliderLeft;
autoSlider();
var left = 0;
var timer = 0;

function autoSlider () {
  timer = setTimeout(function () {
    var photoLine = document.getElementById('photoLine');
    left = left -128;
    if (left < -512) {
    left = 0;
    clearTimeout(timer);
    }
    photoLine.style.left = left +'px';
    autoSlider();
  }, 1000);
}
