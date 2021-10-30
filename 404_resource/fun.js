var animDataOne = {
    wrapper: document.getElementById('svgContainerOne'),
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: '404_resource/fun_animation.json'
};

var animOne = bodymovin.loadAnimation(animDataOne);
