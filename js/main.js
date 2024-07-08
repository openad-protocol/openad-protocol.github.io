document.addEventListener("DOMContentLoaded", function() {
	(function($) {		
	
	
// NIK
window.addEventListener('DOMContentLoaded', function() {
  initAnimationsOnScroll(this.document.querySelectorAll('[data-animate]'));
  
  // Animations on scroll
function initAnimationsOnScroll(animItems) {
  if (animItems.length <= 0) return;

  window.addEventListener('scroll', animOnScroll);

  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const trigger = document.querySelector(animItem.dataset.trigger);
      let animItemHeight = trigger ? trigger.offsetHeight : animItem.offsetHeight;
      let animItemOffset = trigger ? offset(trigger).top : offset(animItem).top;
      const animStart = 2;
      let delay = animItem.dataset.animateDelay;

      
      if (window.innerWidth <= 1200) {
        delay = 0;
        animItemHeight = animItem.offsetHeight;
        animItemOffset = offset(animItem).top;
      }

      if (delay) animItem.style.animationDelay = delay + 's';

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      
      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add('is-animated');

      } else {
        if (animItem.hasAttribute('data-animate-repeat')) {
          animItem.classList.remove('is-animated');
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);

}
})



// Toggle Menu
$(".mobile-menu-btn").click(function () {
	$(".mobile-overlay").toggleClass("is-active");
	$(".site-header__nav").toggleClass("is-active");
	$(this).toggleClass("is-active");
});



//Закрываем меню когда клик вне меню
$(document).mouseup(function (e) {
var div = $(".mobile-menu-btn");
var iv = $(".site-header__nav");
if (
!div.is(e.target) &&
!iv.is(e.target) &&
div.has(e.target).length === 0 &&
iv.has(e.target).length === 0
) {
iv.removeClass("is-active");
div.removeClass("is-active");
$(".mobile-overlay").removeClass("is-active");
}
});




	
})(jQuery);
});



