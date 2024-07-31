const text = document.getElementById('dis')
const btn = document.getElementById('click')
btn.addEventListener("click", () => {
    text.style.display = 'none';
})

//--------------------------------------------------+

const div1 = document.createElement('div')
const h22 = document.createElement('h2')
const text1 = document.createTextNode('gandalf') 
const link = document.createElement('a')
const text2 = document.createTextNode('Go to profile')

link.href = "#"
link.append(text2)
h22.append(text1)
div1.append(h22)
div1.append(link)

document.body.append(div1)
console.log(div1)

//--------------------------------------------------+

const question = document.querySelector('.question')
const answear = document.querySelectorAll('.answear')
const coins = document.querySelector('#coin')
const correct = document.querySelector('#correct')
const isnotcorrect = document.querySelector('#notcorrect')
 
const isnotcorrect2 = document.querySelector('#notcorrect2')
const coins1 = document.querySelector(".coins1")
const refresher = document.querySelector(".refresh")
 
const instc = isnotcorrect.addEventListener("click", () => {
    isnotcorrect.style.backgroundColor = "red"
})

const instc2 = isnotcorrect2.addEventListener("click", () => {
    isnotcorrect2.style.backgroundColor = "red"
})

correct.addEventListener("click", () => {
    correct.style.backgroundColor = "#5ae000"
    coins.style.display = "none"
    coins1.style.display = "flex"
}) 

refresher.addEventListener("click", () =>{
    isnotcorrect.style.backgroundColor = "white" 
    isnotcorrect2.style.backgroundColor = "white"
    correct.style.backgroundColor = "white"
    coins.style.display = "flex"
    coins1.style.display = "none"
})