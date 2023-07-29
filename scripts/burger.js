//Burger
const iconMenu = document.querySelector('.burger');
if (iconMenu){
    const menu = document.querySelector('.navigation');
    iconMenu.addEventListener("click", function(e){
        iconMenu.classList.toggle('_active');
        menu.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    });
};