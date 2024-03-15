const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth:true,
})
function videoAnimation() {
    var videocon = document.querySelector('.video-container');
    var playbtn = document.querySelector('.play')
    videocon.addEventListener('mouseenter', function (dets) {
        gsap.to(playbtn, {
            opacity: 1,
            scale: 1
        })
    })
    videocon.addEventListener('mouseleave', function (dets) {
        gsap.to(playbtn, {
            opacity: 0,
            scale: 0
        })
    })
    videocon.addEventListener('mousemove', function (dets) {
        gsap.to(playbtn, {
            left: dets.x,
            top: dets.y,

        })
    })
}
videoAnimation();
function loadingAnimation(){
    gsap.from('.page1 h1',{
        y:30,
        opacity:0,
        delay:0.5,
        duration:1,
        stagger:0.2
    })
    gsap.from('.page1 video',{
        // y:50,
        scale:0.8,
        opacity:0,
        delay:0.5,
        duration:1.5,
        stagger:0.2
    })
}
loadingAnimation();