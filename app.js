gsap.timeline({
    scrollTrigger: {
      trigger: ".section",
      start: "top top",
       end: "bottom center ",
      scrub: true,
      pin: true,  
    
    },
  })
.to(".box",{y:100})