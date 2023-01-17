let homework1 = document.querySelector('.homework__geom-1')
let homework2 = document.querySelector('.homework__geom-2')
let homework3 = document.querySelector('.homework__geom-3')
let homework4 = document.querySelector('.homework__geom-4')

let container = document.querySelector('.wrapper')

let block1 = document.querySelector('.homework__block-1')
let block2 = document.querySelector('.homework__block-2')
let block3 = document.querySelector('.homework__block-3')
let block4 = document.querySelector('.homework__block-4')

let close1 = document.querySelector('.close__1')
let close2 = document.querySelector('.close__2')
let close3 = document.querySelector('.close__3')
let close4 = document.querySelector('.close__4')

block1.addEventListener('click', ()=> {
    homework1.classList.add('active');
    container.classList.add('close');
    
})
block2.addEventListener('click', ()=> {
    homework2.classList.add('active');
    container.classList.add('close')
})
block3.addEventListener('click', ()=> {
    homework3.classList.add('active');
    container.classList.add('close')
})
block4.addEventListener('click', ()=> {
    homework4.classList.add('active');
    container.classList.add('close')
})
close1.addEventListener('click', ()=> {
    container.classList.remove('close');
    homework1.classList.remove('active');
})
close2.addEventListener('click', ()=> {
    homework2.classList.remove('active');
    container.classList.remove('close')
})
close3.addEventListener('click', ()=> {
    homework3.classList.remove('active');
    container.classList.remove('close')
})
close4.addEventListener('click', ()=> {
    homework4.classList.remove('active');
    container.classList.remove('close')
})






