var aktuelleFrage = 0;

function Multi(container)
{
container.innerHTML = '';
container.className ='quiz-container'; 
// Fortschritt
const fortschritt = document.createElement("div");
fortschritt.id = "fortschritt";
fortschritt.className = "progress";
container.appendChild(fortschritt);
    //setzten des Standes
    fortschritt.textContent= `Frage ${aktuelleFrage + 1} von ${fragenMulti[1].length + 1}`;

// Frage
const frage = document.createElement("div");
frage.id = "frage";
frage.className = "question";
container.appendChild(frage);
    //setzten der Frage
    frage.textContent = fragenMulti[aktuelleFrage][0];

// Optionen (ul)
const optionen = document.createElement("ul");
optionen.id = "optionen";
optionen.className = "options";
container.appendChild(optionen);
    // Setzten der Antwortmöglichkeien
    fragenMulti[aktuelleFrage][1].forEach((antwort, index) => {
        //erstellen der Auswahlmöglichkleit in HTML
        const li = document.createElement("li");
        li.innerHTML = `<label><input type="checkbox" name="antwort" value="${index}"> ${antwort}</label>`;
        optionen.appendChild(li);
      });

// Antwort-Prüfen-Button
const pruefenButton = document.createElement("button");
pruefenButton.textContent = "Antwort prüfen";
pruefenButton.onclick = () => {
    checkAntwort();
  };
container.appendChild(pruefenButton);

// Weiter-Button
const nextButtonMulti = document.createElement("button");
nextButtonMulti.id = "nextButton";
nextButtonMulti.textContent = "Weiter";
nextButtonMulti.onclick = () => {
    naechsteFrage(container);
  };
container.appendChild(nextButtonMulti);

// Ergebnis-Anzeige
const ergebnis = document.createElement("div");
ergebnis.id = "ergebnis";
container.appendChild(ergebnis);


}


function checkAntwort() {
    // hole mir alle Checkboxes 
    const checkboxes = document.querySelectorAll('input[name="antwort"]');
    // hole mir die dazugehörigen Lösungen [0,1,0,1]
    const aktuelleLoesung = fragenMulti[aktuelleFrage][2];
    
   // default setzten
    let korrekt = true;

    checkboxes.forEach((box, index) => {
      //box li finden zum farblichen markieren
      const li = box.closest("li");

      //zu vergleichende Variablen holen
      const istRichtig = aktuelleLoesung[index] === 1;
      const istMarkiert = box.checked;

      // Markiere richtig/falsch
      if (istMarkiert && istRichtig) {
        alert("drin");
        li.classList.add("highlight-correct");
      } else if (istMarkiert && !istRichtig) {
        li.classList.add("highlight-incorrect");
        korrekt = false;
      } else if (!istMarkiert && istRichtig) {
        li.classList.add("highlight-incorrect");
        korrekt = false;
      }
      // dami nichts mehr angeklickt werden kann
      box.disabled = true;
    });

    const ergebnis = document.getElementById("ergebnis");
    //Korrektur wird gesetzt
    ergebnis.textContent = korrekt ? "Richtig!" : "Nicht ganz richtig.";
    //Farbe wird gesetzt
    ergebnis.className = korrekt ? "correctMulti" : "incorrectMulti";

    document.getElementById("nextButton").style.display = "inline-block";
  }



  function naechsteFrage(container) {
    aktuelleFrage++;
    if (aktuelleFrage < fragenMulti.length) {
      Multi(container);
    } else {
        container.innerHTML =`<h2>Quiz beendet! 🎉</h2><p>Du hast alle ${fragenMulti.length} Fragen beantwortet.</p>`;
    }
  }
