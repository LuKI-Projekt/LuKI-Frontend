var pictureNutzer = null;
var aufgabenart = "";



function aktualisiereVorschau() {
    const eingabe = document.getElementById("eingabeFeld").value;
    document.getElementById("vorschauFeld").innerHTML = eingabe.replace(/\n/g, "<br>");
  }

function Beschreibung(){
    LayoutNachSchrittEinsBeschreibung();
}

function zeigeZusatzfelder() {
    const feld = document.getElementById("zusatzfelder");
    if (feld.style.display == "block"){
        feld.style.display = "none";
    }else{feld.style.display = "block";} 
  }

  function änderePromptSchwierigkeit() { 
    const schwieriger = document.getElementById("schwierigerCheckbox").checked;
    const feld = document.getElementById("FeldNutzerBeschreibungAufgabe");
    alert(feld.value);
    const satz = " Die Aufgaben sollen stufenweise schwieriger werden.";

    if (schwieriger) {
        if (!feld.value.includes(satz)) {
            feld.value = feld.value + satz;
            alert(feld.value);
        }
    } else {
        feld.value = feld.value.replace(satz, "").trim();
        alert("in2");
    }
}

function änderePromptAnzahl() {
    const anzahl = document.getElementById("anzahlAufgabenInput").value;
    const feld = document.getElementById("FeldNutzerBeschreibungAufgabe");
    const regex = /Es sollen \d+ Aufgaben generiert werden\.?/;

    // Alten Satz entfernen, falls vorhanden
    feld.value = feld.value.replace(regex, "").trim();

    // Neuen Satz hinzufügen
    if (anzahl) {
        feld.value += (feld.value ? " " : "") + ` Es sollen ${anzahl} Aufgaben generiert werden.`;
    }
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
   document.getElementById("FeldNutzerBeschreibungAufgabe").style.display = "flex";
   document.getElementById("ButtonMehrPrompt").style.display = "flex";
   document.getElementById("ButtonKI").style.display = "flex";


}

function LayoutNachSchrittDrei(){
    document.getElementById("ErklärungSchrittDrei").style.display = "none";
    document.getElementById("SchrittVier").style.display = "flex";
    document.getElementById("ErklärungSchrittVier").style.display = "flex";
   document.getElementById("FeldNutzerBeschreibungAufgabe").style.display = "flex";
   document.getElementById("pluss-button-add").style.display = "flex";
   document.getElementById("ButtonNutzerWebsite").style.display = "flex";


}

function LayoutNachSchrittVier(){

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