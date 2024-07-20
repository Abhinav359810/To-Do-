let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul=document.querySelector("ul");


btn.addEventListener("click",function(){
    let newList = document.createElement("li");
    let newbtn = document.createElement("button");
    newList.innerText=inp.value + " ";
    
    ul.appendChild(newList);
    newList.appendChild(newbtn);
    newbtn.classList.add("delete");
    newbtn.innerText="Delete";
    
   
    inp.value="";
    

    newbtn.addEventListener("click",function(){
        let list = newbtn.parentElement;
        list.remove();
    });
    
});



