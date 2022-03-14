
let gridProduct = document.getElementById('gridProduct');
let listProduct = document.getElementById('listProduct');
let gridIcon = document.getElementById('gridIcon');
let listIcon = document.getElementById('listIcon');


gridIcon.addEventListener('click' , function(){
    listProduct.classList.remove('active')
    gridProduct.classList.add('active')
})
listIcon.addEventListener('click' , function(){
    gridProduct.classList.remove('active')
    listProduct.classList.add('active')
})

