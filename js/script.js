var slideIndex=1;
showSlides(slideIndex);
function arr_slide(e){
    showSlides(slideIndex+=e);
}
function btn_slide(e){
    showSlides(slideIndex=e);
}
function showSlides(e){
    var i;
    var slides=document.getElementsByClassName("slider-image");
    var slideBtn=document.getElementsByClassName("slider-bar");
    if(e>slides.length){slideIndex=1}
    if(e<1){slideIndex=slides.length}
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    for(i=0;i<slideBtn.length;i++){
        slideBtn[i].style.background="#bbb";
    }
    slides[slideIndex - 1].style.display="block";
    slideBtn[slideIndex - 1].style.background="white";
}

// Auto Slide

var autoSlideIndex=0;
autoSlides();
function autoSlides(){
    var i;
    var slides=document.getElementsByClassName("slider-image");
    var slideBtn=document.getElementsByClassName("slider-bar");
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    autoSlideIndex++;
    if(autoSlideIndex > slides.length){
        autoSlideIndex=1
    }
    for(i=0;i<slideBtn.length;i++){
        slideBtn[i].style.background="#bbb";
    }
    slides[autoSlideIndex - 1].style.display="block";
    slideBtn[autoSlideIndex - 1].style.background="white";
    setTimeout(autoSlides,6000);
}