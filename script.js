const colorscheme = document.querySelector('meta[name="color-scheme"]');
const light = document.getElementById("light");
const dark = document.getElementById("dark");
const favicon = document.getElementById("favicon");
const col1 = document.getElementById("col-1");
const allDetails = document.querySelectorAll("details");
let printSchemeFlip;
// Detect preferred dark/light scheme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    colorscheme.setAttribute("content", "dark");
    dark.style.display = "none";
    favicon.href = "images/icon_dark.svg";
    col1.className = "dark";
} else {
    colorscheme.setAttribute("content", "light");
    light.style.display = "none";
    col1.className = "light";
};
// Dark/light scheme switch
document.getElementById("lightdark").addEventListener("click", () => {
    if (colorscheme.getAttribute("content") == "dark") {
        colorscheme.setAttribute("content", "light");
        col1.classList.remove("dark");
        col1.classList.add("light");
        favicon.href = "images/icon_light.svg";
        light.style.display = "none";
        dark.style.display = "initial";
    } else {
        colorscheme.setAttribute("content", "dark");
        col1.classList.remove("light");
        col1.classList.add("dark");
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
    })
    window.addEventListener("afterprint", () => {
        if (printSchemeFlip) {
            colorscheme.setAttribute("content", "dark");
        }
        allDetails.forEach((detail) => {
            detail.open = false;
        })
        printSchemeFlip = false; 
    })
    print();          
})