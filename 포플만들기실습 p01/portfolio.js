$(function(){
    var $this=$(".section");
    $("#portfolio").fullpage({           
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',  
        anchors:['intro', 'pf01', 'pf02', 'pf03', 'study', 'profile'],
        scrollingSpeed: 1000,
        css3:false,
        afterLoad: function(origin,destination){
            $this.eq(destination.index).addClass("on").siblings().removeClass("on");
            $("nav li").eq(destination.index).addClass("on").siblings().removeClass("on");
            destination.index==0 ? fullpage_api.setAutoScrolling(false) : fullpage_api.setAutoScrolling(true)
            destination.index==0 ? $(".women").removeClass("on") : $(".women").addClass("on");
            $(".women").css({transform:"rotate(" + destination.index*135 + "deg)"});
            $(".num").text("0"+destination.index);
        }
    });
})