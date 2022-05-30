
$(document).ready(function(){
    $('.Security__blur').toggleClass("Security__blur_active")
});


$(function () {
  $('.item__Company').on("mouseover mouseout",function(){
    $('.glow__Company').toggleClass("glow__hover")
  });
  $('.item__Audit').on("mouseover mouseout",function(){
    $('.glow__Audit').toggleClass("glow__hover")
  });
  $('.item__Computers').on("mouseover mouseout",function(){
    $('.glow__Computers').toggleClass("glow__hover")
  });
  $('.item__Skud').on("mouseover mouseout",function(){
    $('.glow__Skud').toggleClass("glow__hover")
  });
  $('.item__Trust').on("mouseover mouseout",function(){
    $('.glow__Trust').toggleClass("glow__hover")
  });
  $('.item__Contacts').on("mouseover mouseout",function(){
    $('.glow__Contacts').toggleClass("glow__hover")
  });

  $('.Sites__link').on("mouseover mouseout",function(){
    $('.Sites__blur').toggleClass("Sites__blur_active")
  });

});

$(document).ready(function() {
  if (document.documentElement.clientWidth >=1024) { 
    new fullpage('#fullpage', {
      anchors: ['company', 'audit', 'computers', 'skud', 'trust', 'contacts'],
      verticalCentered: false,
      lazyLoading: false,
      scrollingSpeed: 1200,
      animateAnchor: false,
      afterLoad: function(origin, destination, direction){
        console.log(destination);
        console.log(destination['index']);
        console.log(direction);
        $(".glow").filter(".glow__active").removeClass('glow__active');
        $('.glow').eq(destination['index']).addClass('glow__active');
      },
    });
  }
})

  VANTA.NET({
    el: "#net",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    maxWidth: 1800.00,
    scale: 1,
    scaleMobile: 1.00,
    color: 0x36b03,
    opacity: 0,
    backgroundColor: 0x12002A,
  })

  VANTA.NET({
    el: "#net_2",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    maxWidth: 1800.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x36b03,
    opacity: 0.4,
    backgroundColor: 0x12002A,
  })

// $(window).on('resize',function(){location.reload();});

$(window).bind('hashchange', function() {
  var hash = window.location.hash;
  if(hash != "#company") {
    $('.scroll').removeClass("active_scroll")
    $('.scroll__line').removeClass("active_scrollLine")
  }
  if(hash == "#company") {
    $('.scroll').addClass("active_scroll")
    $('.scroll__line').addClass("active_scrollLine")
  }
});



if (document.documentElement.clientWidth <1024) {
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors){
    anchor.addEventListener("click", function(event){
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: "start"
        })
    })
    
}

  $('#Burger').click(function(){
    $('.burger__dot').toggleClass('active')
    $('#Menu').toggleClass('active')
  });

  $('.menu__link').click(function(){
    $('#Menu').removeClass('active')
    $('.burger__dot').removeClass('active')
  });

}



    


