var text = document.querySelector('.text');
const lines = document.querySelector('.line');
console.log(lines.children);
text.addEventListener('mouseenter', function () {
    gsap.to('.line', {
        duration: 1,
        opacity:1,
        scale:  1,
        stagger: 0.2,
        zIndex: (i) => i % 2 === 0 ? -1 : 1,
        transformOrigin: 'left'
        
    })
})
text.addEventListener('mouseleave', function () {
    gsap.to('.line', {

        duration: 1,
        opacity:0,
        scale:0,
        zIndex: 0

    })
})