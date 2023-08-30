//The code to make the privacy and credits pop ups automatically scroll up

      const popUp = document.querySelectorAll('.pop-up');      

      popUp.forEach((el)=>{
        el.addEventListener('shown.bs.collapse',(e)=>{          

          //Defines vertical height above the parent element          

          var scrollOffset = el.parentNode.offsetTop;

          window.scroll({
              top: scrollOffset,               
              left: 0, 
              behavior: 'smooth'
          })
      })
  })
     