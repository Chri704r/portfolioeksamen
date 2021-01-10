window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#mere").addEventListener("mouseover", link);
    document.querySelector("#mere").addEventListener("mouseout", linkIn);
    document.querySelector("#mere2").addEventListener("mouseover", link2);
    document.querySelector("#mere2").addEventListener("mouseout", linkIn2);
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

function link2() {
    console.log("link2");

    document.querySelector("#mere2").removeEventListener("mouseover", link2)

    document.querySelector("#lilla_pil2").classList.remove("linkmovein");
    document.querySelector("#lilla_pil2").classList.add("linkmoveout");

    document.querySelector("#mere2").addEventListener("mouseout", linkIn2);
}

function linkIn2() {
    console.log("linkIn2");

    document.querySelector("#mere2").removeEventListener("mouseout", linkIn2);

    document.querySelector("#lilla_pil2").classList.remove("linkmoveout");
    document.querySelector("#lilla_pil2").classList.add("linkmovein");

    document.querySelector("#mere2").addEventListener("mouseover", link2);
}
