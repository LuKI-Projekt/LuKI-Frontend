var pictureNutzer = null;
var aufgabenart = "";



function aktualisiereVorschau() {
    const eingabe = document.getElementById("eingabeFeld").value;
    document.getElementById("vorschauFeld").innerHTML = eingabe.replace(/\n/g, "<br>");
  }

function Beschreibung(){
    LayoutNachSchrittEinsBeschreibung();
}

function Foto(){
    LayoutNachSchrittEinsFoto();
    document.getElementById('FeldUploadInput').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader(); // FileReader wird benötigt, um die Datei zu lesen
        
          // Wenn das Bild erfolgreich gelesen wurde, führe diese Funktion aus
          reader.onload = function(e) {
            pictureNutzer = e.target.result;
            LayoutNachSchrittEinsBeschreibung();

            // Das Bild in das <img> Tag einfügen und sichtbar machen
            document.getElementById('preview').src = pictureNutzer;
            document.getElementById('preview').style.display = 'block';
          };
          reader.readAsDataURL(file); //eigentliche Lesevorgang.
    }
  });
}
/*function LayoutStart(){
    document.getElementById("SchrittEins").style.display = "flex";
    document.getElementById("ErklärungSchrittEins").style.display = "felx";
    document.getElementById("ButtonBeschreibung").style.display = "flex";
    document.getElementById("ButtonFoto").style.display = "flex";

    document.getElementById("ErklärungSchrittEins").style.display = "none";
    
    document.getElementById("SchrittZWei").style.display = "none";
    document.getElementById("ErklärungSchrittZwei").style.display = "none";
    document.getElementById("DropdownAufgabe").style.display = "none";

    document.getElementById("SchrittDrei").style.display = "none";
    document.getElementById("ErklärungSchrittDrei").style.display = "none";
    document.getElementById("FeldNutzerBeschriebungAufgabe").style.display = "none";

    document.getElementById("FeldUploadInput").style.display = "none";
    document.getElementById("preview").style.display = "none";
}
    */

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
    
    document.getElementById("SchrittZwei").style.display = "flex";
    document.getElementById("ErklärungSchrittZwei").style.display = "flex";

    zeigeDropdown();
   
}

function LayoutNachSchrittZwei(){
    document.getElementById("ErklärungSchrittZwei").style.display = "none";
    document.getElementById("SchrittDrei").style.display = "flex";
    document.getElementById("ErklärungSchrittDrei").style.display = "flex";
   document.getElementById("FeldNutzerBeschriebungAufgabe").style.display = "flex";
   document.getElementById("ButtonKI").style.display = "flex";


}

function LayoutNachSchrittDrei(){

}

function LayoutNachSchrittVier(){

}

function generiereAufgabenKI(){

}

function speicherAufgabenart(art){
    aufgabenart = art;
}

function zeigeDropdown() {
    const container = document.getElementById("dropdownContainer");
    container.classList.remove("versteckt");
    container.classList.add("sichtbar");
  }

  

function show (anything){
    document.querySelector('.textBox').value = anything;
}

let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function(){
    dropdown.classList.toggle('active');
}