let textAge = document.querySelector("#age")

var born = new Date("01/01/2003");//that's not my birthday
var now = new Date();
age = now.getUTCFullYear() - born.getUTCFullYear()
textAge.textContent = + age + " years"

let textName = document.querySelector("#name")

fetch("https://api.github.com/users/RyanFrancys")
    .then(response => response.json())
    .then(data => {
        textName.textContent = data["name"]
    })
    .catch(error => {
        textName.textContent = " erro na API :("
    }
    );