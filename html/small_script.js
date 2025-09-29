const colorscheme = document.querySelector('meta[name="color-scheme"]');
const favicon = document.getElementById("favicon");
// Detect preferred dark/light scheme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    favicon.href = "../images/icon_dark.svg";
}