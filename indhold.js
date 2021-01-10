window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#mere").addEventListener("mouseover", link);
    document.querySelector("#mere").addEventListener("mouseout", linkIn);
    document.querySelector("#mere").addEventListener("mouseover", link1);
    document.querySelector("#mere").addEventListener("mouseout", linkIn1);
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


function link1() {
    console.log("link1");

    document.querySelector("#mere2").removeEventListener("mouseover", link1)

    document.querySelector("#lilla_pil2").classList.remove("linkmovein");
    document.querySelector("#lilla_pil2").classList.add("linkmoveout");

    document.querySelector("#mere2").addEventListener("mouseout", linkIn1);
}

function linkIn1() {
    console.log("linkIn1");

    document.querySelector("#mere2").removeEventListener("mouseout", linkIn1);

    document.querySelector("#lilla_pil2").classList.remove("linkmoveout");
    document.querySelector("#lilla_pil2").classList.add("linkmovein");

    document.querySelector("#mere2").addEventListener("mouseover", link1);
}
