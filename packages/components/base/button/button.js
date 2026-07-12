/**
 * =========================================
 * InterSacks Framework
 * Button Component
 * =========================================
 */

document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            button.classList.add("btn-click");

            setTimeout(() => {

                button.classList.remove("btn-click");

            },200);

        });

    });

});