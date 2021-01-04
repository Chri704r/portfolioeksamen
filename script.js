window.addEventListener("load", sidenVises);

// vi laver en variabel som vi vil bruge som kontakt (tænd og sluk) for burgermenuen
let menuIsOpen;

// menuen starter med at være lukket, så vi sætter den til falsk
menuIsOpen = false;


let boolTest = true;


function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu)
}


function toggleMenu() {
    console.log("toggleMenu")

    document.querySelector("#menuknap").classList.toggle("change");
    document.querySelector("#navbar").classList.toggle("hidden");
    document.querySelector("#folio_links").classList.remove("hidden");

    // Undersøg om menuen er åben eller lukket
    if (menuIsOpen == true) {

        // Menuen er åben, så vi lukker den med css
        document.querySelector("#navbar").classList.remove("openmenu");
        document.querySelector("#navbar").classList.add("closemenu");

        // menuen er nu lukket, så ændr menuvariablen til at vise dette
        menuIsOpen = false;
    } else {

        // menuen er lukket, så vi åbner den
        document.querySelector("#navbar").classList.remove("closemenu");
        document.querySelector("#navbar").classList.add("openmenu");

        // Menuen er nu åben, så vi ændrer menuvariablen til at visse dette
        menuIsOpen = true;
    }

    //    slideIsOut = !slideIsOut;

}
