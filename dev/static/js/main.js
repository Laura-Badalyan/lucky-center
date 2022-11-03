// $(document).ready(function () {
//     svg4everybody({});
// });


// Полифилы

// forEach IE 11
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// closest IE 11
(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();

// matches IE 11
(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

//Array.form IE 11
if (!Array.from) {
    Array.from = function (object) {
        'use strict';
        return [].slice.call(object);
    };
}

/* Text Marker animation, when text is in viewport START */

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animatedMarking--active');
            if (document.querySelector('.footer').classList.contains("animatedMarking--active")) {
                console.log("active")
                document.querySelector('.modal__content').classList.remove("modal__content--active")
            }
        } else if (!entry.isIntersecting) {
            document.querySelector('.footer').classList.remove('animatedMarking--active')
            if (!document.querySelector('.footer').classList.contains("animatedMarking--active")) {
                document.querySelector('.modal__content').classList.add("modal__content--active")
            }
        }
    });
});
let served = document.querySelectorAll('.animatedMarking')
served.forEach(serve => {
    observer.observe(serve);
})

/* Text Marker animation, when text is in viewport END */



/* Accordion START */

document.querySelectorAll('.programAccordion__header').forEach(titleitem => {
    titleitem.addEventListener('click', () => {
        titleitem.querySelector('.programAccordion__title').classList.toggle('programAccordion__title--active')
        titleitem.querySelector('.programIcon').classList.toggle('programIcon--active')
        titleitem.querySelector('.programIcon__item').classList.toggle('programIcon__item--active')

    })
})
let accordionItems = document.querySelectorAll('.programAccordion__item')

accordionItems.forEach((item) => {
    let accordionHeader = item.querySelector('.programAccordion__header')

    accordionHeader.addEventListener('click', () => {
        let openItem = document.querySelector('.programAccordion-open')

        toggleItem(item)


    })
})
const toggleItem = (item) => {
    const accordionContent = item.querySelector('.programAccordion__content')

    if (item.classList.contains('programAccordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('programAccordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('programAccordion-open')
    }
}

/* Accordion END */


/* Parrallax */
document.querySelector(".parallax").addEventListener("mousemove", parallax);
const elem = document.querySelector(".parallax__object");
function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    elem.style.backgroundPosition = x;
}
/* Parrallax */

/* Burger */
document.querySelector(".mobileNav").addEventListener("click", (e)=> {
    document.querySelector(".mobileNav__burger").classList.toggle("mobileNav__burger--active")
    document.querySelector(".mobileMenu").classList.toggle("mobileMenu__show")
    document.querySelector(".navMobile").classList.toggle("navMobile__show")

})
/* Burger */

