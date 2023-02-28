
document.getElementById("button-up").addEventListener("click", scrollup);

function scrollup(){
    var currentScrool = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScrool > 0){
        window.requestAnimationFrame(scrollup);
        window.scrollTo (0,currentScrool - (currentScrool / 10));
    }

}

buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }
}