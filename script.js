let linkp = document.querySelector("#linkp");

linkp.addEventListener("click", function() {

    let  p = document.getElementById("texto");
    
  if(p.style.visibility === "hidden") {
        p.style.visibility  = "visible";
        linkp.style.visibility = "hidden";
    } else {
        p.style.visibility  = "hidden";
  }
});