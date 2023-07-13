const btn = document.querySelector('#btn');
const inp = document.querySelector('#inp')
const inp1 = document.querySelector('#inp1')
const nameMessage = document.querySelector('#name-message')

btn.addEventListener('click', ()=>{
    console.log("btn clicked")
})

inp.addEventListener('keydown', (ev)=>{
    // console.log(ev)
    // console.log(ev.target.value)

    if(parseInt(ev.keyCode) >= 65 &&  parseInt(ev.keyCode) <=90){
        nameMessage.innerText = "sahihai"
    }
    else{
        nameMessage.innerText = "Galat hai"
    }
})

inp1.addEventListener('keyup', (ev)=>{
    console.log(ev.target.value)
})