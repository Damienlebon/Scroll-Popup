// Créer un événement au scroll
// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

let preScrollPosition = window.scrollY;

window.addEventListener("scroll", () => {
    const ScrollPosition = window.scrollY;
  
    if (ScrollPosition > preScrollPosition) {
      
      document.querySelector("#navbar").classList.add("reduced");
    } else {
     
      document.querySelector("#navbar").classList.remove("reduced");
    }
  
    preScrollPosition = ScrollPosition;

// Faire apparaitre l'image de la partie improvise

const SectionImprovise = document.getElementById("improvise");
const topSectionImprovise = SectionImprovise.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if (topSectionImprovise < windowHeight / 2) {
  imgImprovise.classList.add("appear");
} else {
  imgImprovise.classList.remove("appear");
}


// Faire apparaitre la popup quand on est en bas du site

  const documentHeight = document.documentElement.scrollHeight;
  const scrollPosition = window.scrollY;
  const triggerPosition = documentHeight - windowHeight * 1.3;

  if (scrollPosition >= triggerPosition) {
    popup.style.opacity = 1;
    popup.style.transform = "translateX(0)";
  } else {

    popup.style.opacity = 0;
    popup.style.transform = "translateX(400px)";
  }
});

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const close = document.getElementById("closeBtn");

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";

});

