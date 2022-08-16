function push(){
    
    let show=document.getElementById('show');
    show.innerHTML=``;
    for(let obj of data){
    show.innerHTML+=`<p>${obj.heading}</p>`;
    }
    
    }
window.onload=()=>{
push();

}


function fireSearch(val){
if(val==""){
push();
    
}

if(val!=""){

    let show=document.getElementById('show');
    show.innerHTML='';
for(let obj of data){

let check= obj.heading.search(val);
if(check>=0){
    
    show.innerHTML+=`<p>${obj.heading}</p>`;

}

}
    

}





}