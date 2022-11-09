
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

 
 /********************************************************
* Products Page
********************************************************/


      /********************************************************
    * counter
    ********************************************************/

       const addButton=document.getElementsByClassName('add');

       const subButton=document.getElementsByClassName('sub');
       
       const itemsNumber=document.getElementsByClassName('items-number');
       
       const addToCartButton=document.getElementsByClassName('add-to-cart');
       
       let cartValue=document.getElementsByClassName('fa-shopping-cart');
       //initializing cart value 
       //cartValue[0].setAttribute('data-cart-value', 0 );
       
       let current=0;
       
       console.log("hello");
       console.log(addButton.length);
       //initialization of all product's items number
       for (let i=0;i<addButton.length;i++) {
           itemsNumber[i].textContent=0;
       
       }
       
       for (let i=0;i<addButton.length;i++)
       {
           
           
           addButton[i].addEventListener('click', ()=>{
          
       
               itemsNumber[i].textContent++;
           });
           subButton[i].addEventListener('click', ()=>{
       
               //prevent negative items number
               let temp=parseInt(itemsNumber[i].textContent);
              
               itemsNumber[i].textContent--;
               if (temp<=0)
               itemsNumber[i].textContent=0;
           });
           console.log(current);   
           current=itemsNumber[i].textContent;
           console.log(current);
           addToCartButton[i].addEventListener('click', ()=>{cartValue.setAttribute('data-cart-value','current' );});
       }

       
         