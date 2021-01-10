window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#mere").addEventListener("mouseover", link);
    document.querySelector("#mere").addEventListener("mouseout", linkIn);
    document.querySelector("#om_mig").addEventListener("scroll", slide)

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

function slide() {
    console.log("slide");

    document.querySelector("#om_mig").classList.add("slidein");
}
