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


function ändereZielAufgabe(){}

function ändereZahlenwert(){}

function ändereKontext(){}

function ändereLösungbeiKorrektur(){}


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