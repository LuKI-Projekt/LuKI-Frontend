var pictureNutzer = null;

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

