// navbar
const header = document.querySelector(".header")

document.querySelector(".main-nav-list").addEventListener("click", function (e) {
    e.preventDefault()


    if (e.target.classList.contains("main-nav-link")) {
        const id = e.target.getAttribute("href")

        if (id === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            // document.querySelector(id).scrollIntoView({ behavior: "smooth" })
            const target = document.querySelector(id)
            // add offset at the top
            const offsetTop = target.getBoundingClientRect().top + window.scrollY - 100
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    }

    // for mobile
    header.classList.remove("nav-open")
})


// navbar mobile
const btnMobileNav = document.querySelector(".btn-mobile-nav")

btnMobileNav.addEventListener("click", function () {
    header.classList.toggle("nav-open")
})

// sticky navbar
const sectionHero = document.querySelector(".section-hero")
const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        console.log(ent);

        if (ent.isIntersecting === false) {
            document.body.classList.add("sticky");
        }

        if (ent.isIntersecting === true) {
            document.body.classList.remove("sticky");
        }
    },
    {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: "-80px",
    }
);
obs.observe(sectionHero);

// photo selector`
const photos = document.querySelectorAll(".photo-selector-btn")
const photosContainer = document.querySelector(".photo-selector-container")

photosContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".photo-selector-btn")

    if (!clicked) {
        return
    }

    // update class
    photos.forEach(p => p.classList.remove("photo--active"))
    clicked.classList.add("photo--active")

    // change img src
    const activePhoto = document.querySelector(".photo--active")
    console.log(activePhoto);
    const imgSrc = activePhoto.getAttribute("photo")

    const displayImg = document.querySelector("#character-img")
    displayImg.src = `assets/img/Nagisa_${imgSrc}.png`
})

// simple accordion in aside
const accordions = document.querySelectorAll(".accordion")
accordions.forEach(accordion => {
    accordion.addEventListener("click", function (e) {
        const clicked = e.target.closest(".accordion")

        if (!clicked) {
            return
        }

        const panel = clicked.nextElementSibling
        panel.classList.toggle("accordion-panel--active")
    })
})