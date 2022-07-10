const add = document.querySelector('#add');
let input = document.querySelector('#inp');
let i = 0;
let not = [];
let impp=[];
add.addEventListener('click', function () {
    i++;

    let box = document.getElementById('box');
    let noth = document.getElementById('noth');
    noth.classList.add('hide');
    let divv = document.createElement('div');
    divv.classList.add('card');
    divv.classList.add('my-3');
    divv.classList.add('mx-3');
    divv.style.width = "12rem";
    let chidivv = document.createElement('div');
    chidivv.classList.add('card-body');
    divv.appendChild(chidivv);
    let heading = document.createElement('h5');
    heading.classList.add('card-title');
    heading.innerText = `Note ${i}`;
    chidivv.appendChild(heading);
    let para = document.createElement('p');
    para.classList.add('card-text');
    para.innerText = `${input.value}`;
    not.push(para.innerText);
    heading.insertAdjacentElement("afterend", para);
    let aa = document.createElement('A');
    aa.href = "#";
    aa.classList.add('btn');
    aa.classList.add('btn-primary');
    aa.classList.add('del');
    aa.innerText = "Delete Note";
    aa.onclick = function () { remo() };
    para.insertAdjacentElement("afterend", aa);
    box.appendChild(divv);
     impp.push(box.innerText);
    let notes = document.getElementById("notes");
    input.value = "";

    notes.insertAdjacentElement("afterend", box);
    function remo() {
        divv.remove();
        i--;
    }
    let search = document.getElementById('search');
    
    search.addEventListener('input', function () {
        // not.remove();
        let inpse = search.value;
        
        Array.from(impp).forEach(function(elem){
           
            // let cardt= elem.para.innerText;
            //  alert(impp[0]);

            if( not[0].includes(inpse)){
                elem.style.display="none";
            }
            else{
                elem.classList.add('hide');
            }
    
        })
    // not.forEach(function (elem){
    //     alert(elem);
    //     if(elem.includes(inpse)){
            
    //     }
    //     else{
    //         remo();
            
    //     }
    // })
        // alert(not);

       
    });
    


    
});


