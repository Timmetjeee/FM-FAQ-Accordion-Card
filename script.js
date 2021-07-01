const accordionArrows = document.getElementsByClassName('accordion');

for (let i = 0; i < accordionArrows.length; i++) {
    accordionArrows[i].addEventListener('click', () => {
        accordionArrows[i].classList.toggle('accordion-expanded');
    });
}