let box = document.querySelector('.Box_mystery');
    let hiddenText = document.querySelector('.hidden-text');
    let img = document.querySelector('.Box_mystery img:nth-child(1)');
    let img2 = document.querySelector('.Box_mystery img:nth-child(2)');
    box.addEventListener('click', function () {
        img.classList.add('Up');
        hiddenText.classList.add('Up-text');
        img.classList.add('hidden');
        img2.classList.add('Up-down');
        setTimeout(function () {
            img.classList.remove('Up');
        }, 1000)
    })

let burger = document.querySelector(".burger")
let menu = document.querySelector("#menu")
burger.addEventListener("click", ()=> {
    menu.classList.toggle('shown') 
})