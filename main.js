

let menuIcon = document.querySelector("header .menu-icon")
let header = document.querySelector("header")
let landing = document.querySelector(".landing")
let links  = document.querySelector("header .links")
let anchorLink =  document.querySelectorAll("header .links li")

menuIcon.addEventListener("click",(eo) => {
    eo.stopPropagation();
   toggle()
})



anchorLink.forEach(ele => {
    ele.addEventListener("click",(eo) => {
        if(ele.parentElement.classList.contains("active")){
            toggle()
        }
    })
});












// animation on scroll 
let range =  document.querySelectorAll(".skills .skill-balls .ball .range circle")
let rangeTitle = document.querySelectorAll(".skills .skill-balls .ball .content h3")
let skills = document.querySelector(".skills")
let about = document.querySelector(".about")
let titles = [document.querySelectorAll(".title"),document.querySelectorAll(".mini-title")]
let stars = document.querySelectorAll("i")
let abouImg = document.querySelector(".about .image")
let aboutSpans = document.querySelectorAll(".about .text .span-slide")
let aboutText = document.querySelector(".about .text")
let skillsImg = document.querySelector(".skills img")
let portBoxes =  document.querySelectorAll(".portfolio .box")
let contact =  document.querySelector(".contact")
let contactImg = document.querySelector(".contact .contact-img")
let contactLinks = document.querySelectorAll(".contact .links a img")
let email = document.querySelector(".contact .text .email a")
window.onscroll = () => {
    range.forEach(ele => {
        if(window.scrollY >= ele.parentElement.parentElement.parentElement.parentElement.offsetTop - 430){
            ele.style.strokeDasharray =  `${ele.dataset.range}`
            ele.style.strokeWidth = "4px"
        }

       });

       if(window.scrollY >= skills.offsetTop - 400){
        skillsImg.style.transform = "translate(0)";
        skillsImg.style.opacity="1" 

    rangeTitle.forEach((ele) => {
        ele.style.transform = "translate(0)";
        ele.style.opacity="1" 
    })
    }

   

    titles.forEach((ele) => {
        ele.forEach((e) => {
            if(window.scrollY >= e.parentElement.offsetTop - 400){
                e.style.transform = "translate(0)";
                e.style.opacity="1"  
            }
        })
    })
   
    stars.forEach((ele) => {
        if(window.scrollY >= ele.parentElement.offsetTop - 270){
                ele.style.transform = "rotate(70deg)"
                ele.style.opacity = "1"
        }
    })

    if(window.scrollY >= about.offsetTop - 400){
        abouImg.style.transform = "translate(0)";
        abouImg.style.opacity="1"  
        abouImg.style.backgroundColor ="var(--main-color2)"

        aboutSpans.forEach((ele) => {
           ele.style.width ="0"
        })
        aboutText.style.transform = "translate(0)";
        aboutText.style.opacity="1"  
}

portBoxes.forEach((ele) => {
        if(window.scrollY >= ele.parentElement.parentElement.offsetTop -200){
            ele.style.transform = "translate(0)";
            ele.style.opacity="1"  
        }

})

if(window.scrollY >= contact.offsetTop - 400){
    contactImg.style.transform = "translateY(0)";
    contactImg.style.opacity="1"  
    contactLinks.forEach((ele) => {
        ele.style.transform = "translate(0)";
        ele.style.opacity="1" 

})
email.style.transform = "translate(0)"
email.style.opacity="1" 
}


}

let landingImg = document.querySelector(".landing .image")
let slide = document.querySelectorAll(".slide")
let loader = document.querySelector(".loader")
let topLoader = document.querySelector(".loader .top")
let bottomLoader = document.querySelector(".loader .bottom")
let loadingAnim = document.querySelector(".loader .loadin-anim")
// onload animation
window.onload = () => {
    header.style.transform = "translateY(0)";
    landingImg.style.transform = "translateY(0)";
    slide.forEach((ele) => {
        ele.style.width = "0"
    })
    stars[0].style.transform = "rotate(70deg)"
    stars[0].style.opacity = "1"

    topLoader.style.transform ="translateX(100%)"
    bottomLoader.style.transform ="translateX(-100%)"
    setTimeout(() => {
       loader.style.display="none" 
    },2000)
    loadingAnim.style.opacity= "0"
}



//  functions 

// toggle function

function toggle() {
    menuIcon.classList.toggle("active")
    header.classList.toggle("active")
    links.classList.toggle("active")
}