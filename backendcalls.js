var email = "";
var password = "";

function createBasicAuthHeader(username, password) {
    const credentials = username + ':' + password;
    const encodedCredentials = btoa(credentials);
    return "Basic " + encodedCredentials;
}

/*
async function helloworld(name) {
    const url = "http://lukiapp.click:8080/helloworld?name=".concat(name);

    try {
        const response = await fetch(url, {
            headers: {
                "Authorization": createBasicAuthHeader("system", "verysecure")
              },
        });
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.text();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}
    */

async function createTeacherUser() {
    const url = "http://lukiapp.click:8080/teacherusers";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": createBasicAuthHeader("system", "verysecure"), 
                "Content-Type": "application/json"
              },
            body: JSON.stringify({
                "email": email,
                "password": password
            }),
        });
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}
/*
async function allTeacherUsers() {
    const url = "http://lukiapp.click:8080/teacherusers";

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": createBasicAuthHeader("system", "verysecure")
              },
        });
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}

async function findTeacherUser(id, email, password) {
    const url = "http://lukiapp.click:8080/teacherusers/".concat(id);

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": createBasicAuthHeader(email, password)
              },
        });
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}

console.log(helloworld("Bea"));
console.log(createTeacherUser("teeacher.test@test.test", "se"));
console.log(allTeacherUsers());
console.log(findTeacherUser(1, "teeacher.test@test.test", "se"))
*/

