const xhr = new XMLHttpRequest();
const ul = document.querySelector('.list')


xhr.onload = function(data){
    console.log(data)
    ul.innerText='';

    const facts = JSON.parse(data.currentTarget.response);
    facts.forEach(element => {
        const li = document.createElement('li')
        li.innerText = element.text;
        ul.appendChild(li);
        
    });
    console.log("data",facts)
}

xhr.onerror= function(){
    console.log("error agya")
}

const btn = document.getElementById('btn')
btn.addEventListener("click", ()=>{
    xhr.open('GET','https://cat-fact.herokuapp.com/facts')
    xhr.send();
})