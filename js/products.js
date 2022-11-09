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
