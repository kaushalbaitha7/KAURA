/* ===========================================
            KAURAHUB SCRIPT
=========================================== */

/* Coming Soon */

function comingSoon(){

    alert("🚀 This platform is currently under development and will be available soon.");

}


/* ===========================================
        Smooth Internal Navigation
=========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ===========================================
        Navbar Shadow on Scroll
=========================================== */

window.addEventListener("scroll",()=>{

    const navbar=document.querySelector(".navbar");

    if(window.scrollY>40){

        navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";

    }

    else{

        navbar.style.boxShadow="0 3px 18px rgba(0,0,0,.05)";

    }

});


/* ===========================================
        Fade In Animation
=========================================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});


document.querySelectorAll(

".card,.why-box,.update,.contact-card"

).forEach(el=>{

observer.observe(el);

});