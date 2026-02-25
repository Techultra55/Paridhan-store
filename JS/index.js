
   //carousel 
   document.addEventListener("DOMContentLoaded", function() {
        var carouselElement = document.querySelector('#carouselExampleFade');
        var carouselInstance = new bootstrap.Carousel(carouselElement);
        carouselInstance.cycle();
    });

    document.addEventListener("DOMContentLoaded", function() {
        var carouselElement1 = document.querySelector('#carouselExampleFadetwo');
        var carouselInstance1 = new bootstrap.Carousel(carouselElement1);
        carouselInstance1.cycle();
    });



    //countdown
    let dayItem = document.querySelector("#days");
    let hourItem = document.querySelector("#hours");
    let minItem = document.querySelector("#min");
    let secItem = document.querySelector("#sec");

    let countdown = () =>{
        let futureDate = new Date("15 Augest 2027");
        let currentDate = new Date();
        let myDate = futureDate - currentDate;


        let days = Math.floor(myDate/1000/60/60/24);
        let hours = Math.floor(myDate/1000/60/60)%24;
        let min = Math.floor(myDate/1000/60)%60;
        let sec = Math.floor(myDate/1000)%60;

        dayItem.innerHTML = days;
        hourItem.innerHTML = hours;
        minItem.innerHTML = min;
        secItem.innerHTML = sec;
    }

    countdown();
    setInterval(countdown,1000);

    //scroll
function scrollTopBack() {
    let scrollTopButton = document.querySelector("#scrollup");
    window.onscroll = function(){
        var scroll = document.documentElement.scrollTop;
        if(scroll>=250){
            scrollTopButton.classList.add('scrollActive');
        } else{
            scrollTopButton.classList.remove('scrollActive'); 
        }     
    }
}

scrollTopBack();

let navbar = document.querySelector('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
    
});