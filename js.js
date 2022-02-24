window.onload = init;
var divResult;
var divTexte;
function init() {
  divResult = document.getElementsByTagName("div")[1];
  divTexte = document.getElementsByTagName("div")[2];
  for (var k in animaux) {
    divResult.innerHTML +=
      "<img id='" +
      animaux[k].name +
      "' src='images/" +
      animaux[k].file +
      "'/>";
  }

  /**
   * Ecrire ici la suite du programme principal
   */

  disappear();
  supprimerAnimauxDomestiques();
  afficherAnimauxDomestiques();
}

/**
 * Ecrire ici vos méthodes
 */
function disappear() {
  $("img").click(function () {
    $(this).css("display", "none");
  });
}

function supprimerAnimauxDomestiques() {
  $("button:first-of-type").on("click", function () {
    console.log("ici");
    for (var i = 0; i < animaux.length; i++) {
      console.log("img:nth-of-type(" + (i + 1) + ")");
      if (animaux[i].domestic) {
        $("img:nth-of-type(" + (i + 1) + ")").css("display", "none");
      }
    }
  });
}

function afficherAnimauxDomestiques() {
  $("body > div:first-of-type > button:last-of-type").on("click", function () {
    console.log("ici");
    for (var i = 0; i < animaux.length; i++) {
      if (animaux[i].domestic) {
        $("img:nth-of-type(" + (i + 1) + ")").css("display", "inline");
      }
    }
  });
}
