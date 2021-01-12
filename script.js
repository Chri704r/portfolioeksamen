window.addEventListener("load", sidenVises);

// vi laver variabeler til at bruge som kontakt (tænd og sluk) for burgermenuen og beskrivelsesboksen
let menuIsOpen = false;
let infoIsOut = false;



function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu)
    document.querySelector("#knap").addEventListener("click", beskrivelse);
}



// ---------------BURGER MENU----------------

function toggleMenu() {
    console.log("toggleMenu");

    document.querySelector("#menuknap").classList.toggle("change");
    document.querySelector("#navbar").classList.toggle("hidden");
    document.querySelector("#folio_links").classList.remove("hidden");

    // Undersøg om menuen er åben eller lukket
    if (menuIsOpen == true) {

        // Menuen er åben, så vi lukker den med css
        document.querySelector("#navbar").classList.remove("openmenu");
        document.querySelector("#navbar").classList.add("closemenu");

        // menuen er nu lukket, så ændrer menuvariablen til at vise dette
        menuIsOpen = false;
    } else {

        // menuen er lukket, så vi åbner den
        document.querySelector("#navbar").classList.remove("closemenu");
        document.querySelector("#navbar").classList.add("openmenu");

        // Menuen er nu åben, så vi ændrer menuvariablen til at visse dette
        menuIsOpen = true;
    }
}

//-------------- BESKRIVELSESBOKS----------------

function beskrivelse() {
    console.log("beskrivelse");

    document.querySelector("#beskrivelsetekst").classList.toggle("hidden");

    if (infoIsOut == true) {
        console.log("turnup");
        document.querySelector("#info_pil").classList.remove("turnup");
        document.querySelector("#info_pil").classList.add("turndown");

        infoIsOut = false;

    } else {
        console.log("turndown");
        document.querySelector("#info_pil").classList.remove("turndown");
        document.querySelector("#info_pil").classList.add("turnup");

        infoIsOut = true
    }

}
