var email = "beatetangerding@gmail.com";
var displayName = "Tangerding";
var password = "1cc93641";

function createBasicAuthHeader(username, password) {
    const credentials = username + ':' + password;
    const encodedCredentials = btoa(credentials);
    return "Basic " + encodedCredentials;
}

async function createAufgabe() {
    
    const nutzerBeschreibungAufgabe = document.getElementById("FeldNutzerBeschreibungAufgabe").value;
    alert(nutzerBeschreibungAufgabe);
    alert(anzahl);
    const url = "http://lukiapp.click:8080/simpleexercisecreation";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": createBasicAuthHeader(email, password),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "exerciseDescription": nutzerBeschreibungAufgabe,
                "amountExercises": anzahl
            }),
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        // Benutze JSON.stringify, um das Objekt als String darzustellen
        alert("Erstellte Aufgaben: " + JSON.stringify(json, null, 2)); // Schön formatierte Ausgabe

    } catch (error) {
        console.error("Fehler bei der KI:", error.message);
    }
}
