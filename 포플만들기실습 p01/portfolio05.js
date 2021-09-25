$(function(){
    setTimeout(intro,400) ;
    function intro(){
        $(".section").eq(0).addClass("on");
        $("nav li").eq(0).addClass("on");
    }
    
    
    $("#portfolio").pagepiling({
        anchors:["intro","con01","con02","con03","con04"],
        direction: 'horizontal',
        sectionsColor:["#fff","#333","#fff","#333","#fff"],
        navigation:false,
        afterLoad:function(a,idx){//1.2.3
            //console.log(idx);
            $("nav li").eq(idx-1).addClass("on").siblings().removeClass("on");
            $(".section").eq(idx-1).addClass("on").siblings().removeClass("on");
            if(idx==2 || idx==4 || idx==6) {
                $("nav li").addClass("oo");
                $("header,footer,section").addClass("oo");
            }else{
                $("nav li").removeClass("oo");
                $("header,footer,section").removeClass("oo");
            }
        },
    });


    

    
})