/* The commented code is left on purpose, in order to show the process of our
coding and also incase we will want to use it in the future  */
/***************************
 * 
 * Hamburger Menu
 * 
 *****************************/
/*
const hamburger=document.querySelector('.fa-bars');
const closeHam=document.querySelector('.fa-times');
const menu=document.querySelector('.main-menu');

const toggleMenu=()=>{
    menu.classList.toggle('toggle-menu');
    hamburger.classList.toggle('toggle-bars');
    closeHam.classList.toggle('toggle-times');

}
*/





//selecting the hamburger class element
const hamburger=document.querySelector('.hamburger');
//selecting the menu
const menu=document.querySelector('.main-menu');
//selecting the hamburger when the menu is open
const closeMenu=document.querySelector('.close-menu');



const toggleMenu=()=>{
    menu.classList.toggle('toggle-menu');
     //adding/removing the close-menu class to the hamburger element when opening/closing the menu on mobile
    hamburger.classList.toggle('close-menu');
}
//adding and event listener to the menu opening element
hamburger.addEventListener('click', ()=>{toggleMenu();
                                         });

