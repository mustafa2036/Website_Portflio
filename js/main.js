let navbar = document.querySelector('.navbar');
let nums = document.querySelectorAll('.counter-num .counter-nums');
let arrowUp = document.querySelector('.arrow-up');
let skillsSection = document.querySelector(".skills");
let spans = document.querySelectorAll(".progress span");


var typed = new Typed('#element', {
    strings: [`I'm A FrontEnd Developer`, `Work on translating short videos`,
    `I work on short video montages`
        ],
    typeSpeed: 100,
    backSpeed: 50,
    smartBackspace: true,
    loop: true,
    loopCount: Infinity,
});

$(document).ready(function () {

    $("#loading .sk-circle").fadeOut(1000 , () => {
        $("#loading").fadeOut(2000, () => {
            $("body").css("overflow-y" , 'auto')
        })
    });
    nums.forEach(num => startCount(num) );
    function startCount(el){
        let goal = el.dataset.goal;
        let count = setInterval(()=> {
            el.textContent++;
            if(el.textContent == goal){
                clearInterval(count);
            }
        }, 6000 / goal);
    }
});

window.onscroll = () => {

    if(window.scrollY >= skillsSection.offsetTop - 200){
        spans.forEach((span)=> {
            span.style.width = span.dataset.width;
        })
    }
    (scrollY > 100)?navbar.classList.add('active'): navbar.classList.remove('active');
    (scrollY > 100)?arrowUp.style.opacity = '1':arrowUp.style.opacity = '0';
}