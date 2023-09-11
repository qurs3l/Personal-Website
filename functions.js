function toggleStyleSheet() {
    // 1 (a) Get style element by ID
    var element = document.getElementById("mainStyleSheet");

    // 1 (b) Check the current stylesheet file name
    var currentFileName = element.getAttribute("href");

    // 1 (c) Determine new stylesheet file name
    var newFileName = (currentFileName === "style.css") ? "style2.css" : "style.css";

    // 1 (d) Replace stylesheet with new stylesheet
    element.setAttribute("href", newFileName);

    // 2 (d) For persistence when the page is refreshed, save the new stylesheet name to localStorage
    localStorage.setItem("stylesheet", newFileName);
}

window.onload = function() {
    // 2 (a) Get stylesheet name from local storage
    var storedFileName = localStorage.getItem("stylesheet");

    // 2 (b) Get HTML style element by ID
    var element = document.getElementById("mainStyleSheet");

    // 2 (c) Replace the href attribute of the HTML element with the stored stylesheet name
    if (storedFileName) {
        element.setAttribute("href", storedFileName);
    }
}
