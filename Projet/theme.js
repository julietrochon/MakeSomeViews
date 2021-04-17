const picculture = document.getElementById('picculture');
const piclifestyle = document.getElementById('piclifestyle');
const picgaming = document.getElementById('picgaming');

picculture.onclick = () => {
    sessionStorage.setItem("theme", "culture");
    location.href = "name.html";
}

piclifestyle.onclick = () => {
    sessionStorage.setItem("theme", "lifestyle");
    location.href = "name.html";
}

picgaming.onclick = () => {
    sessionStorage.setItem("theme", "gaming");
    location.href = "name.html";
}


