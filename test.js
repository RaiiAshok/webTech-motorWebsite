const firstIndicator = document.querySelector(".first-indicator");
const secondIndicator = document.querySelector(".second-indicator");
const thirdIndicator = document.querySelector(".third-indicator");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");


firstIndicator.addEventListener('click', function slideChange(){
    if(first.style.display == "none"){
        first.style.display = "block";
    }
    second.style.display = "none";
    third.style.display = "none";
    
})
secondIndicator.addEventListener('click', function slideChange(){
    if(second.style.display == "none"){
        second.style.display = "block";
    }
    first.style.display = "none";
    third.style.display = "none";

})
thirdIndicator.addEventListener('click', function slideChange(){
    if(third.style.display == "none"){
        third.style.display = "block";
    }
    first.style.display = "none";
    second.style.display = "none";

})

