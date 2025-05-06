var heading = "lol";
var anzahlAufgaben = 1;
var aufgaben = ["Was ist 2 + 2?"];
var loesungen = ["4"];
var fragenMulti = 
[
    ["Wie viel ist 1/2 + 1/4?", ["1/2", "3/4", "1", "2/3"], [0,1,0,0]],
    ["Wie viel ist 2/3 - 1/3?", ["1/3", "1/2", "2/3", "0"], [1,0,0,0]],
    ["Was ist 3/5 + 1/5?", ["4/10", "3/10", "4/5", "1"], [0,0,1,0]],
    ["Wie viel ist 1 - 1/4?", ["1/2", "3/4", "1/4", "2/4"], [0,1,0,0]]
  ];

function erstelleVorschau() {
    const container = document.getElementById('AufgabeContainerVorschau');
    container.innerHTML = "";
     if (aufgabenart == "Einfach"){
      EinfacherText(container);}
      if (aufgabenart =="Drag"){
        DragDrop(container);}
        if (aufgabenart =="Multi"){
            Multi(container);}
        
}



function aktualisiereVorschau() {
    const eingabe = document.getElementById("eingabeFeld").value;
    document.getElementById("vorschauFeld").innerHTML = eingabe.replace(/\n/g, "<br>");
  }


/*
function erstelleVorschau() 
{

    const container = document.getElementById('AufgabeContainerVorschau');
    container.innerHTML = "";

    for (let i = 0; i < aufgaben.length; i++) {
        const containerAufgabe = document.createElement('div');
        containerAufgabe.className = 'aufgabe';
    
        const headingAufgabe = document.createElement('h2');
        headingAufgabe.textContent = 'Aufgabe ' + (i + 1);
    
        const aufgabenText = document.createElement('p');
        aufgabenText.textContent = aufgaben[i];
    
        const eingabefeld = document.createElement('input');
        eingabefeld.type = 'text';
        eingabefeld.placeholder = 'Deine Lösung';
        eingabefeld.id = `loesung${i}`; // wichtig für Zugriff
    
        const button = document.createElement('button');
        button.id = `button${i}`;
        button.textContent = 'Korrigieren';
        button.onclick = function () {
            korrigiere(i);
        };
    
        const korrekturText = document.createElement('p');
        korrekturText.id = `korrektur${i}`;
        korrekturText.className = 'korrektur';
    
        containerAufgabe.appendChild(headingAufgabe);
        containerAufgabe.appendChild(aufgabenText);
        containerAufgabe.appendChild(eingabefeld);
        containerAufgabe.appendChild(button);
        containerAufgabe.appendChild(korrekturText);
    
        container.appendChild(containerAufgabe);
    }
  }

  function korrigiere(aufgabenNr) {
    const eingabe = document.getElementById(`loesung${aufgabenNr}`).value.trim();
    const korrekturElement = document.getElementById(`korrektur${aufgabenNr}`);
    
    if (eingabe === loesungen[aufgabenNr]) {
        korrekturElement.textContent = "Richtig!";
        korrekturElement.className = "korrektur richtig";
    } else {
        korrekturElement.textContent = `Falsch! Die richtige Lösung ist ${loesungen[aufgabenNr]}.`;
        korrekturElement.className = "korrektur falsch";
    }
}*/