function changeText() {
    document.querySelector('h1').textContent = 'Hallo, JavaScript!';
}

function aktualisiereVorschau() {
    const eingabe = document.getElementById("eingabeFeld").value;
    document.getElementById("vorschauFeld").innerHTML = eingabe.replace(/\n/g, "<br>");
  }