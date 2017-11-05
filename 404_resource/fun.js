var animDataOne = {
    wrapper: document.getElementById('svgContainerOne'),
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: '404_resource/fun_animation.json'
};

var animDataTwo = {
    wrapper: document.getElementById('svgContainerTwo'),
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: '404_resource/fun_animation.json'
};

var animOne = bodymovin.loadAnimation(animDataOne);
animOne.setSpeed(1.2);

var animTwo = bodymovin.loadAnimation(animDataTwo);
animTwo.setSpeed(1.9);