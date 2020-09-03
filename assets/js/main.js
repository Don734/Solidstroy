
document.addEventListener('DOMContentLoaded',Init())
function Init(){menuToggle();customSwiper();ballCursor();bgTilt();document.addEventListener(' touchstart',(event)=>{console.log(event);})
gsap.set($('.swiper-slide-active .content__subtitle'),{opacity:0,transform:'translate3d(0,15vh,0)',delay:0})
gsap.set($('.swiper-slide-active .content__title'),{opacity:0,transform:'translate3d(0,15vh,0)',delay:0})
gsap.set($('.swiper-slide-active .content__title span'),{opacity:0,transform:'translate3d(0,15vh,0)',delay:0})
gsap.to($('.swiper-slide-active .content__subtitle'),{duration:0.4,force3D:true,opacity:1,y:0,delay:0.1,ease:'Power2.easeOut'})
gsap.to($('.swiper-slide-active .content__title'),{duration:0.4,force3D:true,opacity:1,y:0,delay:0.95,ease:'Power2.easeOut'})
gsap.to($('.swiper-slide-active .content__title span'),{duration:0.4,force3D:true,stagger:0.2,opacity:1,y:0,delay:0.95,ease:'Power2.easeOut'})}
function menuToggle(){let tl=gsap.timeline()
tl.paused(true);tl.set('body',{perspective:1500,backgroundColor:"#09291F"})
tl.to('body',{duration:1,stagger:0.3,ease:'power1.inOut'});tl.to('.viewport',0.2,{x:"-50%",z:"-1800px",rotationY:"45deg",ease:"power1.inOut"});tl.from('.outer-nav .nav-menu .nav-item',{duration:1,x:100,opacity:0,stagger:0.3,ease:'power1.inOut'});tl.reverse()
$('.header__menu-toggle').click(function(){$('body').addClass('perspective-active');$('.outer-nav--return').addClass('is-vis');$('.viewport').addClass('is-vis');tl.reversed(!tl.reversed())})
$('.outer-nav--return').click(function(e){tl.reversed(!tl.reversed())
$('body').removeClass('perspective-active');$('.outer-nav--return').removeClass('is-vis');$('.viewport').removeClass('is-vis');})}
function customSwiper(){let mainSlider='.swiper-container',interleaveOffset=0.5;let mainSliderOptions={loop:false,speed:1000,grabCursor:true,resistance:true,resistanceRatio:0,watchSlidesProgress:true,mousewheel:true,pagination:{el:'.slide-pagination',renderBullet:function(index,className){let swiper=this;return'<div class="slide-pagination-wrap '+className+'">'+'<p class="counter">'+"0"+(index+1)+'</p>'+'<span class="divider">|</span>'+'<p class="totalSlides">'+"0"+swiper.slides.length+'</p>'+'</div>';}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{progress:function(){let swiper=this;for(let i=0;i<swiper.slides.length;i++){let slideProgress=swiper.slides[i].progress;let innerOffset=swiper.width*interleaveOffset;let innerTranslate=slideProgress*innerOffset;swiper.slides[i].querySelector(".img-mask").style.transform="translate3d("+innerTranslate+"px, 0, 0)";}},touchStart:function(){let swiper=this;for(let i=0;i<swiper.slides.length;i++){swiper.slides[i].style.transition="";}},setTransition:function(elem,curSpeed){let swiper=this;for(let i=0;i<swiper.slides.length;i++){swiper.slides[i].style.transition=curSpeed+"ms";swiper.slides[i].querySelector(".img-mask").style.transition=curSpeed+"ms";}},slideNextTransitionStart:function(){let prevslide=gsap.timeline();prevslide.to($('.swiper-slide-active').prev().find('.content__title span'),{duration:0.5,scale:0.9,x:-100,opacity:0,stagger:0.1,ease:'Power2.easeInOut'})
prevslide.to($('.swiper-slide-active').prev().find('.content__subtitle'),{duration:0.5,x:-20,opacity:0,delay:0.1,ease:'Power2.easeIn'})
let activeslide=gsap.timeline();activeslide.to($('.swiper-slide-active').find('.content__title span'),{duration:0.5,delay:0.1,scale:1,x:0,opacity:1,stagger:0.1,ease:'Power2.easeOut'})
prevslide.to($('.swiper-slide-active').find('.content__subtitle'),{duration:0.5,x:0,opacity:1,delay:0.3,ease:'Power2.easeOut'})
let nextslide=gsap.timeline();nextslide.to($('.swiper-slide-active').next().find('.content__title span'),{duration:0.5,scale:1.1,x:100,opacity:0,stagger:0.1,ease:'Power2.easeInOut'})
prevslide.to($('.swiper-slide-active').next().find('.content__subtitle'),{duration:0.5,x:20,opacity:0,delay:0.1,ease:'Power2.easeIn'})},slidePrevTransitionStart:function(){let prevslide=gsap.timeline();prevslide.to($('.swiper-slide-active').prev().find('.content__title span'),{duration:0.5,scale:1.1,x:-100,opacity:0,stagger:-0.1,ease:'Power2.easeInOut'})
prevslide.to($('.swiper-slide-active').prev().find('.content__subtitle'),{duration:0.5,x:-20,opacity:0,delay:0.3,ease:'Power2.easeIn'})
let activeslide=gsap.timeline();activeslide.to($('.swiper-slide-active').find('.content__title span'),{duration:0.5,delay:0.5,scale:1,x:0,opacity:1,stagger:-0.1,ease:'Power2.easeOut'})
prevslide.to($('.swiper-slide-active').find('.content__subtitle'),{duration:0.5,x:0,opacity:1,delay:0.3,ease:'Power2.easeOut'})
let nextslide=gsap.timeline();nextslide.to($('.swiper-slide-active').next().find('.content__title span'),{duration:0.5,scale:0.9,x:100,opacity:0,stagger:-0.1,ease:'Power2.easeInOut'})
prevslide.to($('.swiper-slide-active').next().find('.content__subtitle'),{duration:0.5,x:20,opacity:0,delay:0.3,ease:'Power2.easeIn'})}}}
let swiper=new Swiper(mainSlider,mainSliderOptions);}
function ballCursor(){let cursor=document.querySelector('#ball');document.addEventListener('mousemove',function(event){gsap.to(cursor,0.2,{x:event.clientX,y:event.clientY})});$('a').mouseenter(function(e){gsap.to(cursor,0.3,{borderWidth:'0px',scale:3,backgroundColor:"rgba(127, 127, 127, 1)",opacity:.15,})})
$('a').mouseleave(function(e){gsap.to(cursor,0.3,{borderWidth:'2px',scale:1,backgroundColor:"rgba(127, 127, 127, 0)",opacity:1,})})
$('.header__menu-toggle').mouseenter(function(e){gsap.to(cursor,0.3,{borderWidth:'0px',scale:3,backgroundColor:"rgba(127, 127, 127, 1)",opacity:.15,})})
$('.header__menu-toggle').mouseleave(function(e){gsap.to(cursor,0.3,{borderWidth:'2px',scale:1,backgroundColor:"rgba(127, 127, 127, 0)",opacity:1,})})}
function bgTilt(){let maxTilt=3;let elem=document.querySelector('#showcase-tilt');gsap.set('#showcase-tilt',{transformPerspective:2000,transformOrigin:"center"});let bgTilt=gsap.to('#showcase-tilt',{duration:1,scale:1.05,ease:Power1.easeOut,paused:true});document.addEventListener('mousemove',(event)=>{bgTilt.vars.rotationY=((event.pageX/window.screen.width)*(maxTilt*2))-maxTilt
bgTilt.vars.rotationX=(((event.pageY-elem.offsetTop)/window.screen.height)*(maxTilt*2))-maxTilt;bgTilt.invalidate().restart();})}