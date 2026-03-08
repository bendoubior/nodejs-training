const fs = require("fs/promises");

function loadUsers() {
    return fs.readFile("data.json", "utf8")
        .then(res => JSON.parse(res))
        .catch(err => {
            console.error("Failed to read file:", err.message);
            return null;
        });
}

async function printUsersOver25() {
    const users = await loadUsers();

    if (users == null) return;

    for (const user of users) {
        if (user.age > 25) {
            console.log(`Name: ${user.name} | Age: ${user.age}`)
        }
    }
}

// Main
async function main() {
    await loadUsers().then(users => {
        console.log("[+] Javascript fun #1");
     console.log(users);
    });

    console.log("[+] Javascript fun #2");
    await printUsersOver25()
}

main();