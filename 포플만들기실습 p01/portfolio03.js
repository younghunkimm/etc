$(function(){

    //페이지 이동 01...
    $("nav a").on("click", function(event){
        event.preventDefault();
        let this_top=$(this.hash).offset().top;
        $("html,body").stop().animate({scrollTop:this_top});
    });

    //페이지 이동 02...
    $(".content").on("mousewheel", function(event){
        event.preventDefault();
        let wd=event.originalEvent.wheelDelta;
        let UpDown;
        let Up=$(this).prev().length;
        let Down=$(this).next().length;
        
        if(wd<0) {
            if(Down!==0) UpDown=$(this).next().offset().top;
        }else{
            if(Up!==0) UpDown=$(this).prev().offset().top;
        } 
        $("html,body").stop(true).animate({scrollTop:UpDown},800);

        
    });

    $(".content").eq(0).addClass("on");
    $("nav li").eq(0).addClass("on");

    $(".content").each(function(index){
        let $this=$(this);
        let $thisIdx=$this.index();
        let $this_top=$this.offset().top;	
        $(window).on("scroll",function(e){
            e.preventDefault();
            let wc=$(window).scrollTop();		
            if(wc > $this_top - 100){
                $this.addClass("on").siblings().removeClass("on");
                $("nav li").eq($thisIdx).addClass("on").siblings().removeClass("on");
            }		
        });
    });


    $(".overTxt").on("mousewheel", function(e){
        e.stopPropagation();
    })
})