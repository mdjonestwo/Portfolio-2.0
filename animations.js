let homeController = new ScrollMagic.Controller();


// Jumbo ANIMATION
let headerTL =  gsap.timeline();

headerTL.fromTo(
    ".header h1",
    {
        x: 700,
        opacity: 0 
    },
    {
        x:0,
        opacity: 1,
        duration: 3
    },    
).fromTo(
    ".header p",
    {
        x: 300,
        opacity: 0 
    },
    {
        x:0,
        opacity: 1,
        duration: 2
    },
    ">-1.3"
)


// About Me ANIMATION
let aboutMeTL =  gsap.timeline();

aboutMeTL.fromTo(
    ".about-text",
    {
        x: -700,
        opacity: 0 
    },
    {
        x:0,
        opacity: 1,
        duration: 3
    },    
).fromTo(
    ".about-pic",
    {
        x: 700,
        opacity: 0 
    },
    {
        x:0,
        opacity: 1,
        duration: 3
    },
    ">-3"
)

let aboutMeScene = new ScrollMagic.Scene({ 
    triggerElement: ".about-me",
    triggerHook: 1,
    reverse: false, 
    offset: 300,
    duration: 400,
})
.setTween(aboutMeTL)
// .addIndicators()
.addTo(homeController)


// Skills ANIMATION
let skillsTL =  gsap.timeline();

skillsTL.fromTo(
    ".skills",
    {
        opacity: 0 
    },
    {
        opacity: 1,
        duration: 3
    }
)

let skillsScene = new ScrollMagic.Scene({ 
    triggerElement: ".skills",
    triggerHook: 1,
    reverse: false, 
    offset: 300,
    duration: 400,
})
.setTween(skillsTL)
// .addIndicators()
.addTo(homeController)

//Projects ANIMATION

let projectsTitleTL =  gsap.timeline();

projectsTitleTL.fromTo(
    ".projects-title",
    {   
        x: -400,
        opacity: 0 
    },
    {
        x: 0,
        opacity: 1,
        duration: 3
    }
)

let projectsTitleScene = new ScrollMagic.Scene({ 
    triggerElement: ".projects",
    triggerHook: 1,
    reverse: false, 
    offset: 300,
    duration: 600,
})
.setTween(projectsTitleTL)
// .addIndicators()
.addTo(homeController)

let projectsRow1TL =  gsap.timeline();

projectsRow1TL.fromTo(
    ".projects .row-1 .img-1",
    {   
        y: 400,
        opacity: 0 
    },
    {
        y: 0,
        opacity: 1,
        duration: 3
    }
).fromTo(
    ".projects .row-1 .img-2",
    {   
        y: 400,
        opacity: 0 
    },
    {
        y: 0,
        opacity: 1,
        duration: 3
    },
    ">-2"
    
)

let projectsRow1Scene = new ScrollMagic.Scene({ 
    triggerElement: ".row-1",
    triggerHook: 1,
    reverse: false, 
    offset: 300,
    duration: 600,
})
.setTween(projectsRow1TL)
// .addIndicators()
.addTo(homeController)

let projectsRow2TL =  gsap.timeline();

projectsRow2TL.fromTo(
    ".projects .row-2 .img-3",
    {   
        y: 400,
        opacity: 0 
    },
    {
        y: 0,
        opacity: 1,
        duration: 3
    }
).fromTo(
    ".projects .row-2 .img-4",
    {   
        y: 400,
        opacity: 0 
    },
    {
        y: 0,
        opacity: 1,
        duration: 3
    },
    ">-2"
    
)

let projectsRow2Scene = new ScrollMagic.Scene({ 
    triggerElement: ".row-2",
    triggerHook: 1,
    reverse: false, 
    offset: 300,
    duration: 600,
})
.setTween(projectsRow2TL)
// .addIndicators()
.addTo(homeController)


// Skills ANIMATION
let contactMeTL =  gsap.timeline();

contactMeTL.fromTo(
    ".contact-me",
    {
        opacity: 0 
    },
    {
        opacity: 1,
        duration: 3
    }
)

let contactMeScene = new ScrollMagic.Scene({ 
    triggerElement: ".contact-me",
    triggerHook: 1,
    reverse: false, 
    offset: 100,
    duration: 200,
})
.setTween(contactMeTL)
// .addIndicators()
.addTo(homeController)
