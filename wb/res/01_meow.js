var animDataOne = {
    wrapper: document.getElementById('svgContainerOne'),
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: 'res/01_meow_animation.json'
};

var animOne = bodymovin.loadAnimation(animDataOne);
