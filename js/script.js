// =========================
// ROYAL CROWN BARBER
// =========================

// Loader

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.style.display = "none";

        }, 600);

    }, 1200);

});

// Navbar

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

// Botão voltar ao topo

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        backToTop.style.display="flex";

    }else{

        backToTop.style.display="none";

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// Contadores

const counters=document.querySelectorAll(".counter");

const runCounter=()=>{

    counters.forEach(counter=>{

        const target=+counter.dataset.target;

        const update=()=>{

            const current=+counter.innerText;

            const increment=target/100;

            if(current<target){

                counter.innerText=Math.ceil(current+increment);

                setTimeout(update,20);

            }else{

                counter.innerText=target;

            }

        };

        update();

    });

};

const stats=document.querySelector("#stats");

const observer=new IntersectionObserver(entries=>{

    if(entries[0].isIntersecting){

        runCounter();

        observer.disconnect();

    }

});

observer.observe(stats);

// AOS

AOS.init({

    duration:1000,

    once:true,

    easing:"ease-in-out"

});
