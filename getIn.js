

function textLesen() {
    /*
    Button zum Abschicken und Eingabefeld wird gelöscht
    */
    document.getElementById("NutzerMail").style.display = "none";
    document.getElementById("ButtonAnmelden").style.display = "none";
    document.querySelector('h1').textContent = 'Hallo, Nutzer!';
}
