
let tabs1 = document.getElementById('tabs-1')
let tabs2 = document.getElementById('tabs-2')
let tabs3 = document.getElementById('tabs-3')

let tabs11 = document.getElementById('tabs-1-1')
let tabs12 = document.getElementById('tabs-1-2')
let tabs13 = document.getElementById('tabs-1-3')

tabs11.addEventListener('click', function(){
    tabs1.classList.add('active')
    tabs2.classList.remove('active')
    tabs3.classList.remove('active')
})
tabs12.addEventListener('click', function(){
    tabs2.classList.add('active')
    tabs1.classList.remove('active')
    tabs3.classList.remove('active')
})
tabs13.addEventListener('click', function(){
    tabs3.classList.add('active')
    tabs1.classList.remove('active')
    tabs2.classList.remove('active')
})
