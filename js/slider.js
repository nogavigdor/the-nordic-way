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



