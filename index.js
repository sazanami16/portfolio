let fadeInContent = document.querySelectorAll('.js-slide')

window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInContent.length; i++) {
    const rect = fadeInContent[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight; 
    if (scroll > offset - windowHeight + 150) {
      fadeInContent[i].classList.add('scroll-in');
    }
  }

});

