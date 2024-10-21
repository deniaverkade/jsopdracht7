var budget = 100

var product = 60 

function budgetter(){
    if (product <= budget){
        document.getElementById("tekst").innerHTML="U heeft genoeg geld!";
        document.getElementById("tekst").style.color="green";
    }
    else {
        document.getElementById("tekst").innerHTML="Helaas, te weinig geld.";
        document.getElementById("tekst").style.color="red";
    }
}