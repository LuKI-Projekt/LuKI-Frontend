function renderAufgaben() {
    const container = document.getElementById("aufgabenContainer");
    container.innerHTML = "";

    for (let i = 0; i < aufgaben.length; i++) {
      const div = document.createElement("div");
      div.className = "aufgabenIdee";

      const aufgabeInput = document.createElement("textarea");
      aufgabeInput.value = aufgaben[i];
      aufgabeInput.oninput = (e) => {aufgaben[i] = e.target.value; erstelleVorschau()};

      const loesungInput = document.createElement("textarea");
      loesungInput.value = loesungen[i];
      loesungInput.oninput = (e) => {
        loesungen[i] = e.target.value;
        erstelleVorschau();
      };

      div.appendChild(aufgabeInput);
      div.appendChild(loesungInput);

      container.appendChild(div);
    }
  }

  function neueAufgabe() {
    aufgaben.push("");
    loesungen.push("");
    renderAufgaben();
    erstelleVorschau();
  }
