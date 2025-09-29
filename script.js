const colorscheme = document.querySelector('meta[name="color-scheme"]');
const light = document.getElementById("light");
const dark = document.getElementById("dark");
const favicon = document.getElementById("favicon");
const col1 = document.getElementById("col-1");
const allDetails = document.querySelectorAll("details");
const summary = document.querySelectorAll("summary");
const openp = document.querySelectorAll('details[open]');
let printSchemeFlip;
// Detect preferred dark/light scheme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    colorscheme.setAttribute("content", "dark");
    dark.style.display = "none";
    favicon.href = "images/icon_dark.svg";
    document.querySelector("html").className = ("dark");
    document.querySelector("h1").className = ("dark");
    col1.className = "dark";
    allDetails.forEach((detail) => {
        detail.className = ("dark");
    });
    summary.forEach((summary) => {
        summary.className = ("dark");
    });
} else {
    colorscheme.setAttribute("content", "light");
    light.style.display = "none";
    document.querySelector("html").className = ("light");
    document.querySelector("h1").className = ("light");
    col1.className = "light";
    allDetails.forEach((detail) => {
        detail.className = ("light");
    });
    summary.forEach((summary) => {
        summary.className = ("light");
    });
};
// Dark/light scheme switch
document.getElementById("lightdark").addEventListener("click", () => {
    if (colorscheme.getAttribute("content") == "dark") {
        colorscheme.setAttribute("content", "light");
        document.querySelectorAll(".dark").forEach((el) => {
            el.classList.add("light");
            el.classList.remove("dark");
        });
        favicon.href = "images/icon_light.svg";
        light.style.display = "none";
        dark.style.display = "initial";
    } else {
        colorscheme.setAttribute("content", "dark");
        document.querySelectorAll(".light").forEach((el) => {
            el.classList.add("dark");
            el.classList.remove("light");
        });
        favicon.href = "images/icon_dark.svg";
        dark.style.display = "none";
        light.style.display = "initial";
    }
});
// Opens and closes details for printing + correct color scheme for printing
document.getElementById("print").addEventListener("click", () => {
    window.addEventListener("beforeprint", () => {
        allDetails.forEach((detail) => {
            detail.open = true;
        });
        if (colorscheme.getAttribute("content") == "dark") {
            colorscheme.setAttribute("content", "light");
            printSchemeFlip = true;
        }
    });
    window.addEventListener("afterprint", () => {
        if (printSchemeFlip) {
            colorscheme.setAttribute("content", "dark");
        }
        allDetails.forEach((detail) => {
            detail.open = false;
        });
        openp.forEach((detail) => {
            detail.open = true;
        });
        printSchemeFlip = false;
    });
    print();
});