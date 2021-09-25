$(function(){

  const pSld=$(".portfolio").slick({
      arrows:false,
      infinite:false,
      //vertical:true,
      autoplay:true,
      autoplaySpeed:5000,
      pauseOnHover:false,
  });
  $(".item").eq(0).addClass("on");
  pSld.on("afterChange", function(e,s,c){
    $("nav li").eq(c).addClass("on").siblings().removeClass("on");
    $(".item").eq(c).addClass("on").siblings().removeClass("on");
  });

  $("nav a").on("click", function(){
    let idx=$(this).parent().index();
    pSld.slick("slickGoTo", idx)
  })


  $(window).on("mousewheel", function(e){
      let wHeel=e.originalEvent.wheelDelta;
      if(wHeel>0){
        pSld.slick("slickPrev")
      }else{
        pSld.slick("slickNext")  
      }
  });
    

    
})