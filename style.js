function savePreference(key, value) {
    localStorage.setItem(key, value);
}

function getPreference(key) {
    return localStorage.getItem(key);
}

function animateButton() {
    const button = document.getElementById("myButton");
    button.style.backgroundColor = "#e65100";
    setTimeout(() => {
        button.style.backgroundColor = "#4CAF50";
    }, 1000);
}

function animateImage() {
    const image = document.getElementById("myImage");
    image.classList.add("rotate");
    setTimeout(() => {
        image.classList.remove("rotate");
    }, 500);
}

window.onload = () => {
    const savedPreference = getPreference("myPreference");
    if (savedPreference) {
        alert("Welcome back! Your preference is: " + savedPreference);
    }

    const button = document.getElementById("myButton");
    button.addEventListener("click", () => {
        animateButton();
        animateImage();
        savePreference("myPreference", "Clicked");
    });
};
