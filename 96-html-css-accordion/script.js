document.querySelectorAll('.accordion-header').forEach(button =>{
    button.addEventListener('click',()=>{
        const accordionItem = button.parentElement;
        const accordionContent = button.nextElementSibling;
        
        button.setAttribute('aria-expanded', button.getAttribute('aria-expanded')=='true' ? 'false':'true');
        if(button.getAttribute('aria-expanded')==='true'){
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        }else{
            accordionContent.style.maxHeight = 0;
        }
    })
})