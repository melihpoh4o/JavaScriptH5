pics = document.getElementById("pics");
createPicsHolders();

function createPicsHolders() {
    for (var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }


    function createAapImages() {
        pictureHolders = document.getElementsByClassName("picture-holder");
        for (var i = 0; i < pictureHolders.length; i++) {
            favoriet = document.createElement("div");
            favoriet.className = "favoriet";
            favoriet.id = "favoriet" + i;
            aapPlaatje = document.createElement("img");
            aapPlaatje.src = "img/aap" + i + ".jpg";
            aapPlaatje.id = i;
            aapPlaatje.addEventListener("click", function () {
                maakFavoriet( this.id);

            });
            pictureHolders[i].appendChild(favoriet);
            pictureHolders[i].appendChild(aapPlaatje);
        }

    }
    createAapImages();

    function maakFavoriet(id) {
    console.log("Maak mij Favoriet! Het gaat om aap" + id );
    notsofavoriet = document.getElementsByClassName("favoriet");
    for (var i = 0; i < notsofavoriet.length ; i++) {
        notsofavoriet[i].style.backgroundImage = "none";
    }

    favoriet = document.getElementById("favoriet" + id);
    favoriet.style.backgroundImage = "url('img/wittehart.jpg')";
}

}