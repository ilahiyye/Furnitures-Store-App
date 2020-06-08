//Mobile Menu
let mobilMenu = document.querySelector("#nav-menu")

document.querySelector(".navbar-toggler").addEventListener("click", function(){
    if( mobilMenu.style.display==="none"){
        return  mobilMenu.style.display = "block";
    }else{
        return mobilMenu.style.display = "none";
    }
})