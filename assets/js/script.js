const scrollBtn = document.querySelector(".scroll-btn");
const cardContainer = document.querySelector(".container-card");
const navbar = document.querySelector(".navbar");

/** function for smooth scrolling onto a target element
 * Ref tutorial: https://www.youtube.com/watch?v=oUSvlrDTLi4&list=PLDyQo7g0_nsXlSfuoBpG5Fgz0Qe3IvWnA&index=1
 */
function smoothScroll(target, duration) {
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - navbar.clientHeight;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    var timeElapsed = currentTime - startTime;
    var run = cubicEaseInOut(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

// event listener for homepage "click to see below" button
scrollBtn.addEventListener("click", function() {
  smoothScroll(cardContainer, 1000);
});

/** easing function i pulled from http://gizma.com/easing/#cub3 for transition
 * t: current time, b: start value, c: change in value, d: duration
 */
function cubicEaseInOut(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}
