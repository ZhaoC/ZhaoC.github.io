var animData = {
    wrapper: document.querySelector('#animationWindow'),
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: '404_resource/404_animation.json'
};
var anim = bodymovin.loadAnimation(animData);
anim.setSpeed(3.4);