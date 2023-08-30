const navItems = document.querySelector("#nav");
const linkCards = document.querySelectorAll(".simple-link");

window.addEventListener('resize', function() {
    if(this.window.innerWidth >= 768){
        navItems.classList.remove("show");
    }
    
    if(this.window.innerWidth < 992 && linkCards !== undefined){

        linkCards.forEach(element => {
            element.classList.add("paint-border");
        });
    }

    if(this.window.innerWidth >= 992 && linkCards !== undefined){

        linkCards.forEach(element => {
            element.classList.remove("paint-border");
        });
    }
});