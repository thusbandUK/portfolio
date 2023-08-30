

//Script to make the accordion elements scroll down (bonus material drop downs)
      const accordionItems = document.querySelectorAll('.accordion-collapse')
      const acc = document.getElementById('accordionParent')
      

      accordionItems.forEach((el)=>{
        el.addEventListener('shown.bs.collapse',(e)=>{
          
          //Finds the vertical position of the element within the window

          var windowPositionElement = el.getBoundingClientRect().y;

          //Finds the vertical position of the parent element relative to the window
          
          var windowPositionParent = acc.getBoundingClientRect().y;

          //Combines the above values with the vertical height above the parent element
          
          var scrollOffset = el.parentNode.offsetTop + windowPositionElement - windowPositionParent;

          window.scroll({
              top: scrollOffset,               
              left: 0, 
              behavior: 'smooth'
          })
      })
  })
     