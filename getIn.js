var textNutzerMail = "";
var NutzerEingegebenesPasswort = "";
var VersucheAnmeldungPasswort = 0;
var einmalPasswort = "";

function LayoutAnpassungPasswort() {
   

    /*
    Button zum Abschicken und Eingabefeld wird gelöscht
    */
    document.getElementById("FeldNutzerMail").style.display = "none";
    document.getElementById("ButtonAnmeldenMail").style.display = "none";

    document.getElementById("ButtonEinmalPasswort").style.display = "flex";
    document.getElementById("FeldNutzerPasswort").style.display = "flex";
   
}


function NutzerInfoAnmeldung() {
     /*
    Speichern in textnutzerMail die Eingegebene E-Mail Adresse
    */ 
    let textNutzerMail = document.getElementById("FeldNutzerMail").value;

    /* Test wird ausgelagert NUR Rückmelung wird gegeben*/

    if (TestEmailvorhanden(textNutzerMail)) 
    {
      alert("Ein Code wurde an " + textNutzerMail + " versendet. Bitte gehen Sie zu ihrem Postfach und geben Sie das Ei mal-Passwort ein");
      LayoutAnpassungPasswort();
      GenerierenEinmalPasswort();
    } else {
      alert("Falsche E-Mail eingegeben. Bitte versuchen Sie es erneut.");
    }

}


function TestEmailvorhanden (textNutzerMail){ 
    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
    // Überprüfen, ob die E-Mail dem Muster entspricht
    if (emailPattern.test(textNutzerMail)) {
      return true;  // Gültige E-Mail
    } else {
      return false; // Ungültige E-Mail
    }
  }

function PasswortTesten(){
    /*
    Speichern in NutzerEingegebenesPasswort die Eingegebene Passwort
    */ 
    NutzerEingegebenesPasswort  = document.getElementById("FeldNutzerPasswort").value;

    /* Test wird ausgelagert NUR Rückmelung wird gegeben*/

    if (PasswortKorrekt(NutzerEingegebenesPasswort )) 
    {
      zumIndex();
      alert("drin :D juhuu")
    } else {
        if (VersucheAnmeldungPasswort < 3){
        alert("Falsche Passwort eingegeben. Bitte versuchen Sie es erneut.");
        VersucheAnmeldungPasswort = VersucheAnmeldungPasswort + 1
        } else {
            alert("Sie haben das Passwort zu oft falsch eingegeben. Bitte geben Sie erneut die E-Mail-Adresse ein");
            Startlayout();
        }
}

    
}

function zumIndex(){}

function Startlayout(){

    document.getElementById("FeldNutzerMail").style.display = "";
    document.getElementById("ButtonAnmeldenMail").style.display = "";

    document.getElementById("ButtonEinmalPasswort").style.display = "none";
    document.getElementById("FeldNutzerPasswort").style.display = "none";

    textNutzerMail = "";
    NutzerEingegebenesPasswort = "";
    VersucheAnmeldungPasswort = 0;
}

function PasswortKorrekt(NutzerEingegebenesPasswort){
    if(einmalPasswort == NutzerEingegebenesPasswort && einmalPasswort != "" ){
        return true
    } else {false}
}

function GenerierenEinmalPasswort() {
    let zeichen = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";  // Zeichen, die im Passwort verwendet werden können
    let passwortLaenge = 8;  // Länge des einmaligen Passworts

    // Generiere ein zufälliges Passwort
    for (let i = 0; i < passwortLaenge; i++) {
        let zufallsIndex = Math.floor(Math.random() * zeichen.length);
        einmalPasswort += zeichen[zufallsIndex];  // Füge zufälliges Zeichen zum Passwort hinzu
    }
    alert("Generiertes einmaliges Passwort: " + einmalPasswort);
}


  /*const mail = prompt("Bitte gib deine E-Mail ein:"); */