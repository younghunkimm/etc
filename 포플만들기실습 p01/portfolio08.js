$(function(){

    const sIt=$(".section");
    const ssIt=$(".slide");
    $("#portfolio").fullpage({
        controlArrows: false, //슬라이드 화살표 숨김
        loopHorizontal: false, //슬라이드 반복 멈춤
        afterLoad: function(o,d){
            if(d.index==1) {
                ssIt.first().addClass("on");
                ssIt.last().addClass("on");
            }else{
                ssIt.removeClass("on");
            }
            sIt.eq(d.index).addClass("on").siblings().removeClass("on");
        },
        afterSlideLoad: function(s,o,d,r) {
            ssIt.eq(d.index).addClass("on").siblings().removeClass("on");
        }
    });

    $(".portfolio").on("mousewheel", function(e){
        let Whl=e.originalEvent.wheelDelta;
        Whl>0 ? fullpage_api.moveSlideLeft() : fullpage_api.moveSlideRight();
    });
    
})