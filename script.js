const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from( '.link', {

    stagger :  .2,
    y:10,
    opacity : 0,
    ease : Power2,
    duration : 1,
    

})

  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  gsap.from( '.bigtxt', {

    stagger :  .2,
    y:10,
    opacity : 0,
    ease : Power1,
    duration : 2.2,
    

})
gsap.from( '.sideimg', {

    stagger :  3                                        ,
    y:50,
    opacity : 0,
    ease :Expo,          
    duration : 1.2,
    

})
Shery.imageEffect( '#mbox img ', {
    style:5,
    config: {"uFrequencyX":{"value":13.22,"range":[0,100]},"uFrequencyY":{"value":10.74,"range":[0,100]},"uFrequencyZ":{"value":14.05,"range":[0,100]},"geoVertex":{"range":[1,64],"value":7.77},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500073242902763},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.5,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

})
Shery.imageEffect('#leftimage',{
  style : 3,
config:  {"uFrequencyX":{"value":12,"range":[0,100]},"uFrequencyY":{"value":12,"range":[0,100]},"uFrequencyZ":{"value":10,"range":[0,100]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6514657980456026},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}} ,
 

})

Shery.imageEffect('.abox ',{
  style : 4,
  gooey:true,
  config: {"uFrequencyX":{"value":12,"range":[0,100]},"uFrequencyY":{"value":12,"range":[0,100]},"uFrequencyZ":{"value":10,"range":[0,100]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.476923076923077},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":12}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})


document.querySelector(' #fbtn').addEventListener('mouseover',function(){
  gsap.to('#footer video',{
      opacity:1 ,
      duration:2 ,
    ease:Power4,
     
  })


})
document.querySelector('#fbtn').addEventListener('mouseleave' , function(){
  gsap.to('#footer video' , {
    opacity: 0 , 
    duration:2 ,
    ease:Power4,
  })
})

Shery.imageEffect('#li ' ,{
  style : 3,
 config: {"uFrequencyX":{"value":12,"range":[0,100]},"uFrequencyY":{"value":12,"range":[0,100]},"uFrequencyZ":{"value":10,"range":[0,100]},"geoVertex":{"range":[1,64],"value":2.56},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7222222222222222},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":3.39,"range":[0,10]},"metaball":{"value":0.48,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.12,"range":[0,2]},"noise_scale":{"value":0,"range":[0,100]}}, 
  gooey:true
})

Shery.imageEffect('#ri ' ,{
  style : 3,
  config: {"uFrequencyX":{"value":12,"range":[0,100]},"uFrequencyY":{"value":12,"range":[0,100]},"uFrequencyZ":{"value":10,"range":[0,100]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":12}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  gooey:true ,
  
})

Shery.textAnimate("#n1 .link", {
  
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

let ham = document.querySelector('#ham')
let butt = document.querySelector('#png')
let but2 = document.querySelector('#nop')

// butt.addEventListener('click' , function(){
//   ham.style.top = "0"+"px"  
//   ham.style.display ="block"

// })
// but2.addEventListener('click' , function(){
//   ham.style.display ="none"
// })
butt.addEventListener('click' , function(){
  gsap.to('#ham' , {
   y:877,
  })
})
but2.addEventListener('click' , function(){
  gsap.to('#ham' , {
   y: 10
  })
})
