let linkp = document.querySelector("#linkp");

linkp.addEventListener("click", function() {
   
    let title = document.getElementById("title");
    let  p = document.getElementById("texto");
    
  if(p.style.visibility === "hidden") {
        p.style.visibility  = "visible";
        linkp.style.visibility = "hidden";
        title.innerText = "teste";
    } else {
        p.style.visibility  = "hidden";
  }
});