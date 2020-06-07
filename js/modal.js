// Get the modal-1

let modal_1 = document.querySelector("#myModal_1");
let modal_2 = document.querySelector("#myModal_2");

function turnDisplay(){
  modal_2.style.display = "none";
  modal_1.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
document.querySelectorAll(".close").forEach(e => e.addEventListener("click", turnDisplay))

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_2 || event.target == modal_1 ) {
    modal_2.style.display = "none";
    modal_1.style.display = "none";
  }
}

// When the user clicks the button, open the modal 

  document.querySelector("#img-1").addEventListener("click", function() {
    modal_1.style.display = "block";
})

document.querySelector("#img-2").addEventListener("click", function() {
  modal_2.style.display = "block";
})


