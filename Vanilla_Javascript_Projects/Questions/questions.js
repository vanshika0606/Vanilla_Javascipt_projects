const plusbtn= document.querySelector(".plus");
const show=document.querySelector(".extra");
const minusbtn=document.querySelector(".minus");
const plusbtnn= document.querySelector(".plus2");
const showw=document.querySelector(".extra2");
const minusbtnn=document.querySelector(".minus2");
plusbtn.addEventListener('click',function(){
        show.classList.add('open-extra');
        minusbtn.classList.add('open-extra');
})
minusbtn.addEventListener('click',function(){
        show.classList.remove('open-extra');
})
minusbtn.addEventListener('click',function(){
        minusbtn.classList.remove('open-extra');
})

plusbtnn.addEventListener('click',function(){
        showw.classList.add('open-extra');
        minusbtnn.classList.add('open-extra');
})
minusbtnn.addEventListener('click',function(){
        showw.classList.remove('open-extra');
})
minusbtnn.addEventListener('click',function(){
        minusbtnn.classList.remove('open-extra');
})
const plusbtn3= document.querySelector(".plus3");
const show3=document.querySelector(".extra3");
const minusbtn3=document.querySelector(".minus3");
plusbtn3.addEventListener('click',function(){
        show3.classList.add('open-extra');
        minusbtn3.classList.add('open-extra');
})
minusbtn3.addEventListener('click',function(){
        show3.classList.remove('open-extra');
})
minusbtn3.addEventListener('click',function(){
        minusbtn3.classList.remove('open-extra');
})