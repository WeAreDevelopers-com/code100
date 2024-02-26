/* Here be dragons, this is a mess and I should be ashamed of myself. */

var carousel = document.querySelector('.carousel');
var cells = carousel.querySelectorAll('.carousel li');
var cellCount = cells.length;
var selectedIndex = 0;
var cellWidth = carousel.offsetWidth;
var cellHeight = carousel.offsetHeight;
var isHorizontal = true;
var rotateFn = 'rotateY';
var radius, theta;

document.querySelector('#yt button').addEventListener('click', function(e) {
    document.querySelector('body').classList.remove('chosen');
    player.stopVideo();
});

carousel.addEventListener('click', e => {
    let t = e.target;
    if (t.tagName === 'IMG') {
      if (t.parentElement.tagName === 'A'){
          e.preventDefault();
          let src = t.parentElement.getAttribute('href');
          src = src.split('v=')[1];
          if (player) {
            player.loadVideoById(src);
          } else {
              player = new YT.Player('player', {
                height: '390',
                width: '640',
                videoId: src,
                playerVars: {
                  'playsinline': 1,
                    'autoplay': 1
                }
              });
          }
         document.querySelector('body').classList.add('chosen');
      }
}
});

const rotateCarousel = _ => {
  var angle = theta * selectedIndex * -1;
  carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
    rotateFn + '(' + angle + 'deg)';
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotateCarousel();
  window.clearInterval(selfrot);
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
  window.clearInterval(selfrot);
});

function changeCarousel() {
  theta = 360 / cellCount;
  var cellSize = cellWidth;
  radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
  for (var i = 0; i < cells.length; i++ ) {
    var cell = cells[i];
      cell.style.opacity = 1;
      var cellAngle = theta * i;
      cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
  }
  rotateCarousel();
}

changeCarousel();

selfrot = window.setInterval(function() {
  selectedIndex++;
  rotateCarousel();
}, 1200);

/* Youtube API */

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onPlayerReady(event) {
  event.target.playVideo();
}

