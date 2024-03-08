const colorscheme = document.querySelector('meta[name="color-scheme"]');
const light = document.getElementById("light");
const dark = document.getElementById("dark");
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    colorscheme.setAttribute("content", "dark");
    dark.style.display = "none";
} else {
    colorscheme.setAttribute("content", "light");
    light.style.display = "none";
};
const col1 = document.getElementById("col-1");
document.getElementById("lightdark").addEventListener("click", () => {
    if (colorscheme.getAttribute("content") == "dark") {
        colorscheme.setAttribute("content", "light");
        if ((window.getComputedStyle(col1).getPropertyValue("background-color")) == ("rgb(47, 79, 79)")) {
            col1.style.backgroundColor = "darkseagreen";
        }
        light.style.display = "none";
        dark.style.display = "initial";
    } else {
        colorscheme.setAttribute("content", "dark");
        if ((window.getComputedStyle(col1).getPropertyValue("background-color")) == ("rgb(143, 188, 143)")) {
            col1.style.backgroundColor = "darkslategrey";
        }
        dark.style.display = "none";
        light.style.display = "initial";
    }
});
const allDetails = document.querySelectorAll("details");
document.getElementById("print").addEventListener("click", () => {
    allDetails.forEach((detail) => {
        detail.open = true;
    });
    print();
    allDetails.forEach((detail) => {
        detail.open = false;
    })
})