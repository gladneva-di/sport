// animation to scroll

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function animateScrollingElements() {
    const elements = document.querySelectorAll(".element-to-animate");
    elements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add("animated");
      }
    });
  }
  document.addEventListener("DOMContentLoaded", animateScrollingElements);
  window.addEventListener("scroll", animateScrollingElements);
  