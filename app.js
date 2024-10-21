budget = 100
let product = prompt("Hoeveel kost het product?");

function budgetter() {
    if (product <= budget) {
document.getElementById("tekst").innerHTML="U heeft genoeg geld!"
document.getElementById("tekst").style.color="green"
}
else {
document.getElementById("tekst").innerHTML="Helaas, u heeft niet genoeg geld."
document.getElementById("tekst").style.color="red"
}
}
