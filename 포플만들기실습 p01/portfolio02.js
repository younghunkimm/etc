$(function(){
    var $this=$(".section");
    $("#portfolio").fullpage({           
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',  
        anchors:['intro', 'pf01', 'pf02', 'pf03', 'study', 'profile'],
        //css3:false,
        scrollBar: false,
        autoScrolling: true,
        afterLoad: function(origin,destination){
            $this.eq(destination.index).addClass("on").siblings().removeClass("on");
            $("nav li").eq(destination.index).addClass("on").siblings().removeClass("on");
            destination.index==0 ? $(".women").removeClass("on") : $(".women").addClass("on");
            $(".women").css({transform:"rotate(" + destination.index*45 + "deg)"});
            $(".num").text("0"+destination.index);

            if(destination.index==2) {
                pG();
            }
        }
    });


    let inTxt = $(".intro_txt");


    inTxt.on("mousewheel touchstart", function(e){
        e.stopPropagation();
    })
    
    // inTxt.on("mouseenter touchstart", function(){ 
    //     //fullpage_api.setAllowScrolling(true);     
    //     fullpage_api.setAutoScrolling(false);
    // });
    // inTxt.on("mouseleave touchend", function(){
    //     if(inTxt.length){
    //     fullpage_api.setAutoScrolling(true);
    //     }
    // });
    




    //intro typing
    var introTxt = new Typed('.intro_type', {
        strings: ['color is my life', 'web is my dream'],
        typeSpeed: 60,
        backSpeed: 100,
        fadeOut: true,
        smartBackspace: true,
        cursorChar: '',
        loop: false,
        
    });


    function pG(){
        $('.prbar').each(function(){
            let spanTxt=$(this).find("span").text();
            let spanNum=spanTxt.replace(/[^0-9]/g,'');//숫자만 가져오기
            $(this).circleProgress({
                value: spanNum/100,
                //animation: false,
                fill: {gradient: ['#ff1e41', '#ff0']},
                size:200,
                lineCap:"round",
            })
            .on('circle-animation-progress', function(event, progress) {
                $(this).find('span').html(Math.round(spanNum * progress) + '<i>%</i>');
            });
        });
    }

   

 


})