var anzahl
//zeigt die Hilfen zum Prompten
function zeigeZusatzfelder() {
    const feld = document.getElementById("zusatzfelder");
    if (feld.style.display == "block"){
        feld.style.display = "none";
    }else{feld.style.display = "block";} 
  }

// ändert im Prompt die Schwierigkeitsangabe
  function änderePromptSchwierigkeit() { 
    const schwieriger = document.getElementById("schwierigerCheckbox").checked;
    const feld = document.getElementById("FeldNutzerBeschreibungAufgabe");
    const satz = " Die Aufgaben sollen stufenweise schwieriger werden.";

    if (schwieriger) {
        if (!feld.value.includes(satz)) {
            feld.value = feld.value + satz;
        }
    } else {
        feld.value = feld.value.replace(satz, "").trim();
    }
}
// ändert im Prompt die Anzahl der Aufgaben
function änderePromptAnzahl() {
    anzahl = document.getElementById("anzahlAufgabenInput").value;
    const feld = document.getElementById("FeldNutzerBeschreibungAufgabe");
    const regex = /Es sollen \d+ Aufgaben generiert werden\.?/;

    // Alten Satz entfernen, falls vorhanden
    feld.value = feld.value.replace(regex, "").trim();

    // Neuen Satz hinzufügen
    if (anzahl) {
        feld.value += (feld.value ? " " : "") + ` Es sollen ${anzahl} Aufgaben generiert werden.`;
    }
}

function ändereZielAufgabe() {
    // Den Wert aus dem Eingabefeld holen
    let ziel = document.getElementById("zielAufgabenInput").value.replace(/\./g, ' ');
    const feld = document.getElementById("FeldNutzerBeschreibungAufgabe");

    // Regex, um den alten Satz zu finden (beginnt mit "Das Ziel der Aufgabe ist")
    const regex = /Das Ziel der Aufgabe ist, dass die SchülerInnen[^.]*\.?/;

    // Wenn der neue Zielwert nicht leer ist, füge ihn hinzu
    if (ziel) {
        ziel = ziel.trim();
        
         // Alten Satz entfernen, falls vorhanden
        feld.value = feld.value.replace(regex, "").trim();
        // neu setzen
        feld.value += (feld.value ? " " : "") + `Das Ziel der Aufgabe ist, dass die SchülerInnen ${ziel}.`;
    }
}





function ändereZahlenwert(){
    // Natürliche Zahlen
    // Ganze Zahlen
    // Rationale Zahle mit so viele Nachkommastellen
    // Reele Zahle mit so viele Nachkommastellen
}

function ändereKontext(){
    
    const kontextJA = document.getElementById("mitKontextCheckbox").checked;
    const feld = document.getElementById("FeldNutzerBeschreibungAufgabe");
    const containerk = document.getElementById("kontextContainer");

    if (kontextJA) {
    containerk.style.display = "block"; // sichtbar machen
  } else {
    containerk.style.display = "none"; // ausblenden
  }
}

function ändereKontextInhalt(){

     // Den Wert aus dem Eingabefeld holen
     let kontext = document.getElementById("KontextAufgabenInput").value.replace(/\./g, ' ');
     const feld = document.getElementById("FeldNutzerBeschreibungAufgabe");
 
     // Regex, um den alten Satz zu finden (beginnt mit "Das Ziel der Aufgabe ist")
     const regex = /Der Kontext der Aufgabe soll[^.]*\.?/;
 
     // Wenn der neue Zielwert nicht leer ist, füge ihn hinzu
     if (kontext) {
        kontext = kontext.trim();
         
          // Alten Satz entfernen, falls vorhanden
         feld.value = feld.value.replace(regex, "").trim();
         // neu setzen
         feld.value += (feld.value ? " " : "") + `Der Kontext der Aufgabe soll${kontext}.`;
     }
}

function ändereLösungbeiKorrektur(){

    const loesungAnzeige = document.getElementById("lösungbeiKorrektur").checked;
    const feld = document.getElementById("FeldNutzerBeschreibungAufgabe");
    const satz = " Die Aufgaben sollen bei falscher Beantwortung die Lösung anzeigen.";

    if (loesungAnzeige) {
        if (!feld.value.includes(satz)) {
            feld.value = feld.value + satz;
        }
    } else {
        feld.value = feld.value.replace(satz, "").trim();
    }
}


function ändereSchwierigkeitsgrad(grad) {
    // Alle Checkboxen zurücksetzen
    const checkboxes = {
        leicht: document.getElementById("leichtSchwierigkeitsgradCheckbox"),
        mittel: document.getElementById("mittelSchwierigkeitsgradCheckbox"),
        schwer: document.getElementById("schwerSchwierigkeitsgradCheckbox")
    };
    
    // Bestimme ob wir die Info löschen sollen (wenn die Checkbox deaktiviert wurde)
    const loeschenInfo = !checkboxes[grad].checked;
    
    // Alle Checkboxen deaktivieren
    for (const key in checkboxes) {
        checkboxes[key].checked = false;
    }
    
    // Die aktuelle Checkbox (de)aktivieren (toggle Verhalten)
    checkboxes[grad].checked = !loeschenInfo;
    
    // Text im Beschreibungsfeld aktualisieren
    const feld = document.getElementById("FeldNutzerBeschreibungAufgabe");
    const regex = /Die Aufgaben sollen (leicht|mittel|schwer) sein\.?/;
    
    // Alten Satz entfernen
    feld.value = feld.value.replace(regex, "").trim();
    
    // Neuen Satz nur hinzufügen wenn nicht gelöscht werden soll
    if (!loeschenInfo) {
        feld.value += (feld.value ? " " : "") + `Die Aufgaben sollen ${grad} sein.`;
    }
}
/*
function ändereSchwierigkeitsgrad(grad){
    const loeschenInfo = false;
    if (grad == "leicht"){
        document.getElementById("mittelSchwierigkeitsgradCheckbox").checked = false;
        document.getElementById("schwerSchwierigkeitsgradCheckbox").checked = false;
        if(document.getElementById("leichtSchwierigkeitsgradCheckbox").checked == false){
            loeschenInfo = true;
        }
    }
    if (grad == "mittel"){
        document.getElementById("leichtSchwierigkeitsgradCheckbox").checked = false;
        document.getElementById("schwerSchwierigkeitsgradCheckbox").checked = false;
        if(document.getElementById("mittelSchwierigkeitsgradCheckbox").checked == false){
            loeschenInfo = true;
        }
    }
    if (grad == "schwer"){
        document.getElementById("leichtSchwierigkeitsgradCheckbox").checked = false;
        document.getElementById("mittelSchwierigkeitsgradCheckbox").checked = false;
        if(document.getElementById("schwerSchwierigkeitsgradCheckbox").checked == false){
            loeschenInfo = true;
        }
    }

    const feld = document.getElementById("FeldNutzerBeschreibungAufgabe");
    const regex = /Die Aufgaben sollen (leicht|mittel|schwer) sein\.?/;

    // Alten Satz entfernen, falls vorhanden
    feld.value = feld.value.replace(regex, "").trim();

    // Neuen Satz hinzufügen
    if(!loeschenInfo)
        {
        feld.value += (feld.value ? " " : "") + `Die Aufgaben sollen ${grad} sein `;
    }

}*/