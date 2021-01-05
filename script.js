window.addEventListener("load", sidenVises);

// vi laver en variabel som vi vil bruge som kontakt (tænd og sluk) for burgermenuen
let menuIsOpen = false;

//variabel til link
let pilIsOut = false;



function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu)
    document.querySelector("#mere").addEventListener("mouseover", link);
    document.querySelector("#mere").addEventListener("mouseout", linkIn);
}

function link() {
    console.log("link");

    document.querySelector("#mere").removeEventListener("mouseover", link)

    document.querySelector("#pil").classList.remove("linkmovein");
    document.querySelector("#pil").classList.add("linkmoveout");

    document.querySelector("#mere").addEventListener("mouseout", linkIn);
}

function linkIn() {
    console.log("linkIn");

    document.querySelector("#mere").removeEventListener("mouseout", linkIn);

    document.querySelector("#pil").classList.remove("linkmoveout");
    document.querySelector("#pil").classList.add("linkmovein");

    document.querySelector("#mere").addEventListener("mouseover", link);
}



// ------BURGER MENU---------

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
