 
"use strict";
// ANIMATION ON SCROLL
AOS.init({
  offset: 300,
  duration:900
});

// Loader
window.onload = function(){ document.getElementById("mainLoader").style.display = "none" }
// setTimeout(function(){
//   $("#mainLoader").fadeToggle();
// },2000)
// For CUSTOM CURSOR

const circle = document.querySelector('.circle');

window.addEventListener('mousemove', mouseMoveHandler);
window.addEventListener('mousedown', mouseDownHandler);
window.addEventListener('mouseup', mouseUpHandler);



function mouseMoveHandler(e) {
  circle.style.left = e.clientX - circle.offsetWidth / 2 + "px";
  circle.style.top = e.clientY - circle.offsetHeight / 2 + "px";
  circle.style.opacity = 1;
}

function mouseUpHandler(e) {
  circle.style.transform = "scale(1)";

  if (e.target.classList.contains('link')) {
    circle.style.transform = 'scale(5)';
    circle.style.opacity = 0;
  }
}

function mouseDownHandler() {
  circle.style.transform = "scale(1.5)";
}



// REACTION OF NAV LINKS WITH CUSTOM CURSOR
let linkArr = document.querySelectorAll('.cursor-response');
linkArr.forEach((link)=>{
    link.addEventListener('mouseenter', linkEnterHandler);
    link.addEventListener('mouseleave', linkLeaveHandler)
})


function linkEnterHandler() {
  circle.style.transform = "scale(6)";
}

function linkLeaveHandler() {
  circle.style.transform = "scale(1)";
}



// WINDOW SCROLL EVENTS

window.addEventListener("scroll",()=>{
  // NAV BAR STIKCY
    const nav=document.querySelector('.nav');
    nav.classList.toggle('sticky',window.scrollY>0);

  // ACTIVE STATUS OF NAV BAR LIST
    const list=document.querySelectorAll('.nav-links');
    let current='';

    const sections=document.querySelectorAll('section');

    sections.forEach(sections=>{
      const sectionTop=sections.offsetTop;
      const sectionHeight=sections.clientHeight;
      if(pageYOffset >= (sectionTop)-sectionHeight/3){
        current =sections.getAttribute('id');
      }
    })

    list.forEach(li =>{
      li.classList.remove('active');
      if(li.classList.contains(current)){
        li.classList.add('active');
      }
    })
    
    

});
// Burger
function display(){

 document.querySelector('#nav-bar').classList.toggle('hide');
 
  
}
// FOR GALLERY FILTER

$(document).ready(()=>{

  $('.port-list').click(function(){

    let value= $(this).attr('data-filter');
    
    if(value == "All"){
      $('.img-box').show('1000');
    }else{
      $('.img-box').not('.'+value).hide('1000');
      $('.img-box').filter('.'+value).show('1000');
     
    }
  })

  $('.port-list').click(function(){
    $(this).addClass('gallery-active').siblings().removeClass('gallery-active');
  })
})




// REVIEW SLIDER BY USING SLICK SLIDER CDN
$('.ReviewsSlider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:false,
  autoplay:true,
  autoplaySpeed:2000,
  responsive: [
      {
      breakpoint: 560,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
      }
   
  ]
});




