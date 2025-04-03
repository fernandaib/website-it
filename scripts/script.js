//Aside Menu
function myFunction() {    
  document.getElementById("aside-menu").classList.toggle("display-aside-menu");
  document.getElementById("open").classList.toggle("switchOff");
  document.getElementById("close").classList.toggle("switchOn");
  
}

//Menu: Accordion - projects
const accordionContainer = document.querySelector('.aContainer');

accordionContainer.addEventListener('click', e => {
  const accordionHeader = e.target.closest('.aHeader');

  if(accordionHeader) {
    const accordion = accordionHeader.parentElement;
    const accordionContent = accordionHeader.nextElementSibling;
    const accordionInner = accordionContent.children[0];
    let height;

    if(accordion.classList.contains('isOpen')) {
      height = 0;
    } else {
      height = accordionInner.getBoundingClientRect().height;
    }

    accordion.classList.toggle('isOpen');
    accordionContent.style.height = height + 'px';

    console.log(accordionInner);
    console.log(accordionHeader);
    console.log(accordionContent);
    console.log(accordionContent.children[0]);
    console.log(accordionContent.style.height);
    console.log(height);
    console.log(accordionInner.getBoundingClientRect());

  }
})


//Aside: Accordion - projects
const accordionKontainer = document.querySelector('.aKontainer');

accordionKontainer.addEventListener('click', e => {
  const accordionHeader = e.target.closest('.aHeader-aside');

  if(accordionHeader) {
    const accordion = accordionHeader.parentElement;
    const accordionContent = accordionHeader.nextElementSibling;
    const accordionInner = accordionContent.children[0];
    let height;

    if(accordion.classList.contains('isOpen')) {
      height = 0;
    } else {
      height = accordionInner.getBoundingClientRect().height;
    }

    accordion.classList.toggle('isOpen');
    accordionContent.style.height = height + 'px';

    console.log(accordionInner);
    console.log(accordionHeader);
    console.log(accordionContent);
    console.log(accordionContent.children[0]);
    console.log(accordionContent.style.height);
    console.log(height);
    console.log(accordionInner.getBoundingClientRect());

  }
})
