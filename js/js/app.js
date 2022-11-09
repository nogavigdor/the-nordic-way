
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



//because the slides will stop playing after clicking on the hamburger menu
//(there is a 'mouseover' event listener on the sliderlater on in this file
//which stops the slides play. Even though it is mouseover, it will react also in click events
//when it is in mobile version), I have to call the loopSlides(); after 
//it's being stoped (by clearing the play's invervals after the mouseover)

//uncomment it if I choos to use fontawesome for the hamburget menu
/*
const closeMenu=()=>{
    toggleMenu();
    loopSlides();
}


hamburger.addEventListener('click', toggleMenu);
closeHam.addEventListener('click', closeMenu);

*/

/***************************
 * 
 * Slider
 * 
 *****************************/

//Decleratoin of slides collection and converting it into an array
const slides=Array.from(document.getElementsByClassName('slide'));
//Decleratoin of navitation buttons  collection and converting it into an array
const navigationBtns=Array.from(document.getElementsByClassName('navigation-icon'));
//number of slides
const numOfSlides=slides.length;
//the slider div element
const slider=document.querySelector('.slider');

let currentSlide=0;



for (element of navigationBtns) {
   
      element.addEventListener('click', 

        (e)=>{
        
            //removing active class from all navigation buttons elements
            for (a of navigationBtns) {
                a.classList.remove('active');
            }

                    //removing active class from all slide elements
        for (b of slides) {
            b.classList.remove('active');
        }
        //finding the current index of the navigation button that was clicked
        currentSlide=navigationBtns.indexOf(e.target);
        //updatiing the clicked navigation button with the active class
        navigationBtns[currentSlide].classList.add('active');
        //updating the matching slide to the clicked button with the active class
        slides[currentSlide].classList.add('active');
        
        
            }

        );
        }
    


    

        
      
    



   //plays the slides
   var play;
//will play the slides in a loop with a 4 secs gap between each of them
   const loopSlides = ()=>{
    clearInterval(play);
        play=setInterval(()=>{
        slides.forEach((slide)=>{
            slide.classList.remove('active');
        });
       
        navigationBtns.forEach((icon)=>{
            icon.classList.remove('active');
        });

        currentSlide++;

        if (currentSlide>numOfSlides-1)
            currentSlide=0;
        
     
         /*
            let slideBefore=currentSlide-1;
            if (slideBefore<0)
            slideBefore=numOfSlides-1;
            console.log(slideBefore);
            slides[slideBefore].style.display='block';
        */
        
        slides[currentSlide].classList.add('active');
        navigationBtns[currentSlide].classList.add('active');
//The slider will move to the next slide after 4 seconds
       },
       4000

       );
   }

loopSlides();
//when the mouse pointer will be over the slide the slides will stop playing
   slider.addEventListener('mouseover', ()=>{
       
        clearInterval(play);

       

       }
       
   );
//when the mouse pointer will move out of the slide, the slides will continue playing
   slider.addEventListener('mouseout', ()=>{
    loopSlides();
   });


   /*****

    /*
        element.addEventListener('click', (element)=> {

            for (let i=0;i<navigationBtns.lengh;i++)
            {
                navigationBtns[i].classList.remove('active');
                slides[i].classList.remove('active');
        
            }

            
        }     
        ); 
        
);

*/





/***************************
 * 
 * Slider
 * 
 *****************************/
/*
//will hold all the slides element
const slides=document.querySelectorAll('.slide');
//will hold the previous button element
const prevBtn = document.querySelector('.prev-btn');
//will hold the next button element
const nextBtn = document.querySelector('.next-btn');
//will hold all the navigation icons elenets (the circles at the bottom of the slider)
const navigationIcons =document.querySelectorAll('.navigation-icon');
//total number of slides
const numOfSlides=slides.length;
//The slider element
const slider=document.querySelector('.slider');
//the current slide
var currentSlide=0;

//When the previous button is clicked the slider will move to the previous slide
prevBtn.addEventListener('click', ()=>{
 slides.forEach((slide)=>{
     slide.classList.remove('active');
 });

 navigationIcons.forEach((icon)=>{
     icon.classList.emove('active');
 })

 currentSlide--;

 if (currentSlide <0) 
    currentSlide=numOfSlides-1;

    console.log(currentSlide);

slides[currentSlide].classList.add('active');
navigationIcons[currentSlide].classList.add('active');

 


});
//When the next button is clicked the slider will move to the next slide
nextBtn.addEventListener('click', ()=>{
    slides.forEach((slide)=>{
        slide.classList.remove('active');
    });
   
    navigationIcons.forEach((icon)=>{
        icon.classList.remove('active');
    });
   
    currentSlide++;
    console.log(currentSlide);
   
    if (currentSlide > numOfSlides-1) 
        currentSlide=0;
   
     
        slides[currentSlide].classList.add('active');
        navigationIcons[currentSlide].classList.add('active');
       
   
   
   });
   
  //converting the navigation icons collection into an array so we'll be 
  //able to retrive the specific icon that is presses and according to it's
  //order, play the right slide 
   const navigationIconsArray=Array.from(navigationIcons);

   //when one of the slide icons (the circles) is clicked, the appropriate slide
   //will be 
   
   navigationIconsArray.forEach(
       (navigationIcon)=>{  
           navigationIcon.addEventListener('click',
           (e)=>{
               //getting the index of the current clicked navigation icon
               currentSlide=navigationIconsArray.indexOf(e.target);
               console.log(currentSlide);
               console.log("hi");
               slides.forEach((slide)=>{
                slide.classList.remove('active');
                });
           
                navigationIcons.forEach((icon)=>{
                icon.classList.remove('active');
                });

                
                slides[currentSlide].classList.add('active');
                navigationIcons[currentSlide].classList.add('active');

           }
           );
       }
   );

  

   

   //plays the slides
   var play;
//will play the slides in a loop with a 4 secs gap between each of them
   const loopSlides = ()=>{
        play=setInterval(()=>{
        slides.forEach((slide)=>{
            slide.classList.remove('active');
        });
       
        navigationIcons.forEach((icon)=>{
            icon.classList.remove('active');
        });

        currentSlide++;

        if (currentSlide>numOfSlides-1)
            currentSlide=0;
        slides[currentSlide].classList.add('active');
        navigationIcons[currentSlide].classList.add('active');
//The slider will move to the next slide after 4 seconds
       },
       4000

       );
   }

   loopSlides();
//when the mouse pointer will be over the slide the slides will stop playing
   slider.addEventListener('mouseover', ()=>{
       clearInterval(play);
   });
//when the mouse pointer will move out of the slide, the slides will continue playing
   slider.addEventListener('mouseout', ()=>{
    loopSlides();
   });

*/
   /********************************************************
    * Rotating the health nenefits boxes
    ********************************************************/




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
/********************************************************
*    faq
********************************************************/

const faqRow=document.getElementsByClassName('faq-row');

//going through all the faq's rows
for (let i=0;i<faqRow.length;i++)
    {
        //adding an event listener to each row
        faqRow[i].addEventListener('click',
            
            ()=>{

                //I've commeneted this code since I thought the current 
                //code is a tiny bit more elegant
                //adding the class active to the clicked row
               
                //if the answer has a height, it means the click's "intention"
                //is to close the question and therefor the answer's height should be 0
                /*
              if (faqRow[i].getElementsByClassName('faq-answer')[0].style.maxHeight)
              {
                faqRow[i].getElementsByClassName('faq-answer')[0].style.maxHeight=null;
              }
                */
              //Before toggling the active class, we need to check the current state
              //of the row.
              //if the row has an active class it means that it was clicked before
              //and that the answer is "open" and this click is meant to close the answer
              //and therefor set its height to zero.
              if (faqRow[i].classList.contains('active'))
              {
                faqRow[i].getElementsByClassName('faq-answer')[0].style.maxHeight=0+'px';
              }
              else
              {
                 
                  faqRow[i].getElementsByClassName('faq-answer')[0].style.maxHeight=faqRow[i].getElementsByClassName('faq-answer')[0].scrollHeight+'px';
                  
               
              }
              faqRow[i].classList.toggle('active');
            }

            /*
                faqRow[i].classList.toggle('active');
                for (let j=0;j<faqRow.length;j++)
                {
                    //we want to remove the active class 
                    //from all the faqRow elements
                    //except the current one which is 
                    //represented by i
                    if (i!=j)
                    faqRow[j].classList.remove('active');
                }
            }
            */
          );
    }




  

