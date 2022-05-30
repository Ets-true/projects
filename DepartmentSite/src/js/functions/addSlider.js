function addSlider(){
    var controller = new ScrollMagic.Controller();
    var wipeAnimation = new TimelineMax() 
        .to("#slideContainer", 1, {z: 0, delay: 4})
        .to("#slideContainer", 3,   {x: "-20%"})	
        .to("#slideContainer", 1, {z: 0, delay: 1})
        .to("#slideContainer", 3,   {x: "-40%"})
        .to("#slideContainer", 1, {z: 0, delay: 1})
        .to("#slideContainer", 3,   {x: "-60%"})
        .to("#slideContainer", 1, {z: 0, delay: 1})
        .to("#slideContainer", 3,   {x: "-80%"})
        .to("#slideContainer", 1, {z: 0, delay: 1})

    new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: "onLeave",
            duration: "1000%"
        })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        .addTo(controller);
}