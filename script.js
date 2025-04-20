var pictureNutzer = null;

function changeText() {
    document.querySelector('h1').textContent = 'Hallo, JavaScript!';
}

function aktualisiereVorschau() {
    const eingabe = document.getElementById("eingabeFeld").value;
    document.getElementById("vorschauFeld").innerHTML = eingabe.replace(/\n/g, "<br>");
  }

function Beschreibung(){
    LayoutNachSchrittEinsBeschreibung();


}

function Foto(){
    LayoutNachSchrittEinsFoto()
    document.getElementById('FeldUploadInput').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader(); // FileReader wird benötigt, um die Datei zu lesen
        
          // Wenn das Bild erfolgreich gelesen wurde, führe diese Funktion aus
          reader.onload = function(e) {
            pictureNutzer = e.target.result;

            // Das Bild in das <img> Tag einfügen und sichtbar machen
            document.getElementById('preview').src = pictureNutzer;
            document.getElementById('preview').style.display = 'block';
          };
          reader.readAsDataURL(file); //eigentliche Lesevorgang.
    }
  });
}

function LayoutNachSchrittEinsFoto(){
   /*
    Button zum Abschicken und Eingabefeld wird ausgeblendet
    */
    document.getElementById("ButtonBeschreibung").style.display = "none";
    document.getElementById("ButtonFoto").style.display = "none";

    document.getElementById("FeldUploadInput").style.display = "flex";
    document.getElementById("preview").style.display = "flex";
}

function LayoutNachSchrittEinsBeschreibung(){ 
    /*
    Button zum Abschicken und Eingabefeld wird ausgeblendet
    */
    document.getElementById("ButtonBeschreibung").style.display = "none";
    document.getElementById("ButtonFoto").style.display = "none";

    document.getElementById("ErklärungSchrittEins").style.display = "none";

}

function show (anything){
    document.querySelector('.textBox').value = anything;
}

let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function(){
    dropdown.classList.toggle('active');
}