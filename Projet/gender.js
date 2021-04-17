const picBoy = document.getElementById('picBoy');
const picGirl = document.getElementById('picGirl');

picBoy.onclick = () => {
    sessionStorage.setItem("gender", "boy");
    location.href = "theme.html";
}

picGirl.onclick = () => {
    sessionStorage.setItem("gender", "girl");
    location.href = "theme.html";
}

