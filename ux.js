window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#mere").addEventListener("mouseover", link);
    document.querySelector("#mere").addEventListener("mouseout", linkIn);
}

function link() {
    console.log("link");

    document.querySelector("#mere").removeEventListener("mouseover", link)

    document.querySelector("#lilla_pil").classList.remove("linkmovein");
    document.querySelector("#lilla_pil").classList.add("linkmoveout");

    document.querySelector("#mere").addEventListener("mouseout", linkIn);
}

function linkIn() {
    console.log("linkIn");

    document.querySelector("#mere").removeEventListener("mouseout", linkIn);

    document.querySelector("#lilla_pil").classList.remove("linkmoveout");
    document.querySelector("#lilla_pil").classList.add("linkmovein");

    document.querySelector("#mere").addEventListener("mouseover", link);
}
