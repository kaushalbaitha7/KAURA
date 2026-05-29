
const aboutModal =
document.getElementById("aboutModal");

const supportModal =
document.getElementById("supportModal");

const comingPopup =
document.getElementById("comingPopup");


function openProject(link){

 
  if(link === "#"){

    comingPopup.style.display = "flex";

  }

  
  else{

    document.body.style.opacity = "0.95";

    setTimeout(() => {

      window.location.href = link;

    }, 150);

  }

}


function closeComingPopup(){

  comingPopup.style.display = "none";

}



function openAbout(){

  aboutModal.style.display = "flex";

}

function closeAbout(){

  aboutModal.style.display = "none";

}



function openSupport(){

  supportModal.style.display = "flex";

}

function closeSupport(){

  supportModal.style.display = "none";

}



window.addEventListener("click", function(e){


  if(e.target === aboutModal){

    aboutModal.style.display = "none";

  }

 
  if(e.target === supportModal){

    supportModal.style.display = "none";

  }

  
  if(e.target === comingPopup){

    comingPopup.style.display = "none";

  }

});



document.addEventListener("keydown", function(e){

  if(e.key === "Escape"){

    aboutModal.style.display = "none";

    supportModal.style.display = "none";

    comingPopup.style.display = "none";

  }

});