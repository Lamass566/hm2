let burger=document.querySelector(".burger__menu");const hide=document.querySelector(".burger__menu--active"),icon1=document.querySelector(".icon1"),icon2=document.querySelector(".icon2");function burgerG(e){hide.classList.toggle("burger__menu--hidden"),hide.classList.contains("burger__menu--active")&&icon1.classList.toggle("icon-hidden"),icon2.classList.toggle("icon-hidden")}burger.addEventListener("click",burgerG);