document.querySelectorAll(".expand .btn").forEach(el=>{
    el.addEventListener("click", function(ev){
        ev.stopPropagation();
        this.parentNode.classList.toggle("move");
    })
})