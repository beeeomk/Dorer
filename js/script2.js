$(function(){
    start();
    var imgs = 2;
    var now = 0;
    function start(){
        $('.event_center img').eq(0).siblings().fadeOut(1000);
        setInterval(function(){slide()},2000);
    };
    function slide(){
        now = now == imgs ? 0 : now += 1;
        $('.event_center img').eq(now-1).fadeOut(1000);
        $('.event_center img').eq(now).fadeIn(1000);
    };
});