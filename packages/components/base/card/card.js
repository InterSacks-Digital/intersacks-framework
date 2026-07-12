import CardConfig from "./card.config.js";

document.querySelectorAll(".card").forEach(card=>{

    if(CardConfig.hover){

        card.addEventListener("mouseenter",()=>{

            card.classList.add("is-hover");

        });

        card.addEventListener("mouseleave",()=>{

            card.classList.remove("is-hover");

        });

    }

});