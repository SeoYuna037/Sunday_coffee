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

// toTopButton
const toTop=document.querySelector(".to-top");
window.addEventListener("scroll",()=>{
    if(window.pageYOffset>100){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})
//.frame animation
const comSection=document.querySelector(".frame");
window.addEventListener("scroll",()=>{
    if(window.pageYOffset>800){
        comSection.classList.add("active");
    }else{
        comSection.classList.remove("active");
    }
})

// Modal
// const modal=document.querySelector(".modal");
// const closeBtn=modal.querySelector("button");
// const closeChecked=modal.querySelector("#todaycheck");

// const closeModal=()=>{
//     modal.classList.add("hidden");
// }
// closeBtn.addEventListener("click",closeModal);
const modal=document.querySelector(".pop-modal");
const closeModal=document.querySelector(".modal-btn");
const getCookie=function(cname){
    const name=cname+"=";
    const ca=document.cookie.split(';');
    for(let i=0; i<ca.length;i++){
        const c=ca[i];
        while(c.charAt(0)===' ') c=c.substring(1);
        if(c.indexOf(name)!==-1) return c.substring(name.length,c.length);
    }
    return "";
}
const setCookie=function(cname,cvalue,exdays){
    const todayDate=new Date();
    todayDate.setTime(todayDate.getTime()+(exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + todayDate.toUTCString();
    document.cookie=cname+"="+cvalue+"; "+expires;
};
const couponClose=function(){
    if(document.querySelector('input[name="todaycheck"]').checked===true){
        setCookie("close","Y",1);
    }
    modal.style.display="none";
}
const cookiedata=document.cookie;
if(cookiedata.indexOf("close=Y")<0){
    modal.style.display="block";
}else{
    modal.style.display="none";
}
closeModal.addEventListener('click',function(){
    couponClose();
})

// menu-btn
const navMenu=document.querySelector('.nav-menu')
const navMenuOpen=document.querySelector('.open-menu');
const navMenuClose=document.querySelector('.close-menu');
document.querySelector('.menu-btn').onclick=()=>{
    navMenu.classList.toggle('active');
    navMenuOpen.classList.toggle('menu-off');
    navMenuClose.classList.toggle('menu-on');
}

