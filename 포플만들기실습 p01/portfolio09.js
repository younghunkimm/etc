$(function(){
    
    $("#portfolio").fullpage({
        anchors:['intro', 'con01', 'con02', 'con03'],
        afterLoad: function(origin, destination, direction){
            //console.log(destination.index)// 0,1,2,3
            $(".main-img img").attr("src","img/m0"+ (destination.index) +".jpg");
            $("header .babo").animate({top:10 + (destination.index*6) + "rem"})
            $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
        },
    });
    
})