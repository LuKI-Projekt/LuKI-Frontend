function EinfacherText(container)
{
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
}   
