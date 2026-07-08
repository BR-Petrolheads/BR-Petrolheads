// ===========================
// BR PETROLHEADS
// Premium Script
// ===========================

// Ladeanimation ausblenden
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "opacity 0.6s ease";

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);

    }, 900);
});

// Karten beim Scrollen einblenden
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

cards.forEach(card =>{

    card.classList.add("hidden");

    observer.observe(card);

});

// Goldener Maus-Effekt
document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousemove",e=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        card.style.background=
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(212,175,55,.20),
        rgba(18,18,18,.95) 45%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(18,18,18,.88)";

    });

});
