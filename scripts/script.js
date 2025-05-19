function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function() {
    const goTop = document.getElementById('goTop');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTop.style.display = 'block';
    } else {
        goTop.style.display = 'none';
    }
})

function showImage(imageSrc) {
    document.getElementById('modalImage').src = imageSrc;
    const myModal = new bootstrap.Modal(document.getElementById('imageModal'));
    myModal.show();
  }