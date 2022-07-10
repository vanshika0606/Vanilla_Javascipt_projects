const visibl= document.querySelector(".vis");
const show= document.querySelector(".visible");
const noshow=document.querySelector(".history");
const goal= document.querySelector(".goa");
const showw= document.querySelector(".goals");
const nooshow=document.querySelector(".history");
const histor= document.querySelector(".hist");

visibl.addEventListener('click',function(){
    show.classList.add('cclick-btn');
    noshow.classList.add('unclick-btn');
    showw.classList.add('unclick-btn');
})

goal.addEventListener('click',function(){
    showw.classList.add('cclick-btn');
    nooshow.classList.add('unclick-btn');
    show.classList.add('unclick-btn');
    
})
 histor.addEventListener('click',function(){
      noshow.classList.add('click-btn');
      showw.classList.add('unclick-btn');
      show.classList.add('unclick-btn');
 })
 