//represent a row that contains a question and an answer
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




  

