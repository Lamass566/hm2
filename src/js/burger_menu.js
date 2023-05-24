let burger = document.querySelector(".burger__menu");
const hide = document.querySelector('.burger__menu--active');
const icon1 = document.querySelector('.icon1');
const icon2 = document.querySelector('.icon2');


function burgerG(event){
    hide.classList.toggle('burger__menu--hidden');

    if(hide.classList.contains('burger__menu--active'))
    {
        icon1.classList.toggle('icon-hidden');
    }
    icon2.classList.toggle('icon-hidden');
}

burger.addEventListener('click', burgerG);