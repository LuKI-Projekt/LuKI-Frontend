var email = "beatetangerding@gmail.com";
var displayName = "Tangerding";
var password = "1cc93641";

function createBasicAuthHeader(username, password) {
    const credentials = username + ':' + password;
    const encodedCredentials = btoa(credentials);
    return "Basic " + encodedCredentials;
}

async function createTeacherUser() {
    const url = "http://lukiapp.click:8080/teacherusers/register";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": createBasicAuthHeader("system", "verysecure"),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": email,
                "displayName": displayName
            }),
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log("Registrierter Lehrer:", json);
        password = json.password;

    } catch (error) {
        console.error("Fehler bei der Registrierung:", error.message);
    }
}

// Rufe die Funktion auf und warte auf das Ergebnis
createTeacherUser().then(() => {
    console.log("Gespeichertes Passwort:", password);
});
