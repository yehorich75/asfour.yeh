var heroTitleElem = document.getElementById('hero-title');

var heroTitleSourceBottom = heroTitleElem.getBoundingClientRect().bottom + window.pageYOffset;

window.onscroll = function() {
    if (heroTitleElem.classList.contains('fixed') && window.pageYOffset < heroTitleSourceBottom) {
        heroTitleElem.classList.remove('fixed');
    } else if (window.pageYOffset > heroTitleSourceBottom) {
        heroTitleElem.classList.add('fixed');
    }
  };



$(document).ready(function() {
  $('.hero__video').slick({
    autoplay: true,
    speed: 800
  });
});
