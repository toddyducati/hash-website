// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar

document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if(scroll >= 100){
document.querySelector('body').classList.add('scroll')
    } else {
    document.querySelector('body').classList.remove('scroll')
    }
});

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
        item.classList.toggle('cs-active')
    }
    item.addEventListener('click', onClick)
    }
                            
//Faq Items Dropdowns code
const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
        for (const item of faqItems) {
            const onClick = () => {
            item.classList.toggle('active')
        }
        item.addEventListener('click', onClick)
        }

//Gallery Filter for Tradelines Table
class CS_GalleryFilter {
    filtersSelector = '.cs-button';
    tableSelector = '.cs-table-wrapper';
    activeClass = 'cs-active';
    hiddenClass = 'cs-hidden';

    constructor() {
        this.$galleries = document.querySelectorAll(this.tableSelector);
        const $filters = document.querySelectorAll(this.filtersSelector);

        this.onClick($filters[0]);

        for (const $filter of $filters) {
            $filter.addEventListener('click', () => this.onClick($filter));
        }
    }

    onClick($filter) {
        this.filter($filter.dataset.filter);

        const { activeClass } = this;

        this.$activeFilter?.classList.remove(activeClass);
        $filter.classList.add(activeClass);

        this.$activeFilter = $filter;
    }

    filter(filter) {
        const showAll = filter == 'all';
        const { hiddenClass } = this;

        for (const $gallery of this.$galleries) {
            const show = showAll || $gallery.dataset.category == filter;
            $gallery.classList.toggle(hiddenClass, !show);
        }
    }
}

new CS_GalleryFilter();
                            