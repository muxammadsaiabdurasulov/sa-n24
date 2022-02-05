let modal = document.querySelector('.div')
let backbg = document.querySelector('.backbg')
let korsat = document.querySelector('.button-orange')
let yopish = document.querySelector('.div-button')

korsat.addEventListener('click', function () { 
    backbg.classList.remove('hidden')
    modal.classList.remove('hidden')
})

yopish.addEventListener('click', function () { 
    backbg.classList.add('hidden')
    modal.classList.add('hidden')
})