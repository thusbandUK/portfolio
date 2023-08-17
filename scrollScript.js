/*Function makes the window scroll up for when the collapsers are deployed */

const scrollUp = () => {
    console.log('function called');
    window.scrollBy(0, 800);
};
/*
const accordionItems = document.querySelectorAll('.accordion-collapse')
const acc = document.getElementById('accordionExample')

accordionItems.forEach((el)=>{
    el.addEventListener('shown.bs.collapse',(e)=>{
        var scrollOffset = acc.scrollTop + el.parentNode.offsetTop
        acc.scroll({
            top: scrollOffset,
            left: 0, 
            behavior: 'smooth'
        })
    })
})
*/