$(function(){

  const pSld=$(".portfolio").slick({
      arrows:false,
      //infinite:false,
      vertical:true,
      //autoplay:true,
      speed:0,
      //autoplaySpeed:5000,
      pauseOnHover:false,
  });


  $(".item").eq(1).addClass("on");
  let slideItem=$(".item");

  pSld.on("afterChange", function(e,s,c){
    $("nav li").eq(c).addClass("on").siblings().removeClass("on");
    let ssg=$(".item.slick-current");
    ssg.addClass("on").siblings().removeClass("on");
    
    slideItem.eq(c+1).css({
        zIndex:10,
        transform:"translateY(0)",
        transition:"1s",
    }); 
  });

  pSld.on("beforeChange", function(e,s,c){
    slideItem.css({
        zIndex:0,
        transform:"translateY("+100+"vh)",
        transition:"none"
    });
  });



  $("nav a").on("click", function(){
    let idx=$(this).parent().index();
    pSld.slick("slickGoTo", idx)
  })

  let timeout;
  $(window).on("mousewheel", function(e){
      let wHeel=e.originalEvent.wheelDelta;
      clearTimeout(timeout);
        timeout = setTimeout(function(){ //다시 휠 이벤트 발생  0.1초후
            if(wHeel>0){
                pSld.stop(true).slick("slickPrev");
                }else{
                pSld.stop(true).slick("slickNext");
                }
      }, 500);
 
  });
    

 
//   // 휠이벤트가 발생하면
//   window.onwheel = function(){
//       clearTimeout(timeout);  //이전 휠 이벤트 제거
//       timeout = setTimeout(function(){ //다시 휠 이벤트 발생  0.1초후
//           // to do
//       }, 1000);
//   };


// 출처: https://deorudth.tistory.com/97 [그냥저냥]
    
})