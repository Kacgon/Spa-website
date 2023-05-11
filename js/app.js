document.addEventListener("DOMContentLoaded", function(){
    const nestedMenu = document.querySelector(".nested-menu")
    const menutTriggerEl = document.querySelector(".menu-trigger-el")

    menutTriggerEl.addEventListener("mouseover", function(){
        nestedMenu.style.display = "block"
    })
    nestedMenu.addEventListener("mouseout", function(){
        this.style.display = "none"
    })

    //read more-less
    const readMoreLessBtns = document.querySelectorAll(".read-more-less-btn")
  

    function showHideText() {
        const siblingText = this.previousElementSibling;

        if (siblingText.style.display === "none" || siblingText.style.display === ""){
            siblingText.style.display = "block"
            this.textContent = "Czytaj mniej"
        }   else {
            siblingText.style.display = "none"
            this.textContent = "Czytaj więcej"
        }
    }

    for (let i = 0; i < readMoreLessBtns.length; i++ ) {
        readMoreLessBtns[i].addEventListener("click", showHideText)
    }

    //newsletter
    const input = document.querySelector(".newsletter-form input")
    const newsletterBtn = document.querySelector(".newsletter-form button")
    const formInfo = document.querySelector(".form-info")

    newsletterBtn.addEventListener("click", function(event) {
        event.preventDefault()
        console.log(input.value)
        if(input.value !== ""){
            formInfo.style.display = "block"
            formInfo.textContent = "Zapisano do newslettera !"
            input.value = ""
        }   else {
            formInfo.style.display = "block"
            formInfo.textContent = "Podaj poprawny adres e-mail"
        }
    })

    //photos slider
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slider li");
    const prev = document.querySelector(".previous-arrow");
    const next = document.querySelector(".next-arrow");
    
    const slideWidth = slides[0].clientWidth;
    let currentIndex = 0;
    let slidesNumber = slides.length - 1;

    function goToSlide(index) {
        
        if (index < 0) {
            index = slidesNumber;
        } else if (index > slidesNumber) {
            index = 0;
        }
    
        slider.style.left = index * (-slideWidth) + "px";
        currentIndex = index;
    }
    
    function slideToNext() {
        goToSlide(currentIndex + 1);
    }
    
    function slideToPrev() {
        goToSlide(currentIndex - 1);
    }
   
    prev.addEventListener("click", slideToPrev);
    next.addEventListener("click", slideToNext);
    setInterval(slideToNext, 6000);


    //go back top btn

    
    const goUpBtn = document.querySelector(".go-up i")
    goUpBtn.addEventListener("click", function(){
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    })
})
