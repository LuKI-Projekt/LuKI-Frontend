/*var aufgaben = ["Was ist 2 + 2?"];
var loesungen = ["4"]; 




ACHTUNG DIES MUSS TEilweise KOpIERT WERDEN VON NUTZERSEITE!!! NICHT AKLTUELL*/

function neueSeiteErstellen() {
  const neueSeite = window.open(); // Neues Fenster / Tab öffnenML;

  neueSeite.document.write(`



<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>LuKI</title>
  <!-- Layout & Struktur & Design-System laden -->
  <link rel="stylesheet" href="styleNutzer.css">
  <link rel="stylesheet" href="aufgabenEinfachText.css">
  <!--JavaScript laden-->
  <script src="nutzerContent.js" defer></script>
</head>
<script>

    const aufgaben = ${JSON.stringify(aufgaben)};
    const loesungen = ${JSON.stringify(loesungen)};

</script>
<body>
  <div class="header">
    <div class="logo">
    <img src= "logo.jpg">
    <h1> LuKI - deine lerunterstützende KI </h1>
    </div>
  <div class="header-actions">
    <!-- Funktions-Buttons -->
    <h1> Name der erstellenden Person </h1>
  </div>
</div>

<div id="AufgabeContainerVorschau"></div>
<div class="chat-widget" id="chatWidget">
  <div class="chat-header" onclick="toggleChat()">
    <div class="chat-header-left">
      <img src="https://via.placeholder.com/40" alt="Avatar">
      <div>Support</div>
    </div>
    <div id="toggleIcon">−</div>
  </div>

  <div class="chat-messages" id="chatMessages">
    <div class="message">Hallo! Wie kann ich dir helfen?</div>
  </div>

  <div class="chat-input">
    <textarea id="userInput" placeholder="Schreibe eine Nachricht..."></textarea>
    <button onclick="sendMessage()">Senden</button>
  </div>
</div>


<script>
   window.onload = () => {
      erstelleVorschau();
    };
</script>

</body>

 <footer>
    <p>© 2025 LuKI - lernunterstützende KI </p>
    <p> Beate Tangerding und Tristan Kley </p>
  </footer> 

</html>
  `);
  neueSeite.document.close();
}


  /*
    <html>
      <head>
        <link rel="stylesheet" href="styleIndex.css">
        <link rel="stylesheet" href="aufgabenEinfachText.css">


        <title>Neue Seite</title>
      </head>
      <body>
        <h2>Willkommen!</h2>
        <div id="AufgabeContainerVorschau">${inhalt}</div>
      </body>
    </html>

  // Schließt das Dokument ab, damit der Browser es rendert
  neueSeite.document.close();

  neueSeite.onload = () => {
    const script = neueSeite.document.createElement('script');
    script.src = 'vorschau.js'; // Datei, wo `korrigiere()` definiert ist
    neueSeite.document.body.appendChild(script);
  
    script.onload = () => {
      // Wenn das Script geladen ist, dann kannst du Buttons durchgehen:
      const buttons = neueSeite.document.querySelectorAll('button');
      buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
          korrigiere(index); // Jetzt existiert die Funktion!
          alert("geklappt ");
        });
      });
    };
  };
}



    // Schließt das Dokument ab, damit der Browser es rendert
    alert("hier");
    neueSeite.document.close();

    // Stellen sicher, dass wir den Event-Listener erst setzen, nachdem die neue Seite vollständig geladen wurde
    neueSeite.onload = () => {
      // Füge den Event-Listener für den Button hinzu
      for (let i = 0; i < 1; i++) {
      const button = neueSeite.document.getElementById(`button${i}`);
      if (button) {
        button.addEventListener("click", function() {
          korrigiere(i);  // Hier wird 'i' an die Funktion 'korrigiere' übergeben
        });
      } else {
        alert("Button konnte nicht gefunden werden!");
      }
    }
    };
  }



  neueSeite.document.write(`
    <html>

    <head> 
      <!-- Layout & Struktur & Design-System laden -->
      <link rel="stylesheet" href="styleIndex.css">
      <link rel="stylesAufgaben" href="aufgabenEinfachText.css">
      <!--JavaScript laden-->
      <script src="vorschau.js" defer></script>
    </head>

    <body>
      <h2>Willkommen!</h2>
      <div>${inhalt}</div>
    </body>
    </html>
  `);
  neueSeite.document.close();
}*/