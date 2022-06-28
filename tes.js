function myFunction() {
    let nama = document.getElementById('nama').value
    let message = document.getElementById('message').value
    let email = document.getElementById('email').value
    let alertMessage = `Selamat Datang ${nama}, Email : ${email}, Message : ${message}`
    alert(alertMessage)
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    
}))