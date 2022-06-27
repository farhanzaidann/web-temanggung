function myFunction() {
    let nama = document.getElementById('nama').value
    let message = document.getElementById('message').value
    let email = document.getElementById('email').value
    let alertMessage = `Selamat datang ${nama}, emailnya ${email} message ${message}`
    alert(alertMessage)
}