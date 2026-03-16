const fs = require('fs');

function loadUsers(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve (JSON.parse(data));
        });
    });
}

async function printUsersOver25() {
  try {
    const users = await loadUsers("data.json");
    for (const user of users) {
      if (user.age > 25) {
        console.log("Name: %o | Age: %o",user.name,user.age);
      }
    }
  } catch (err) {
    console.error("Error loading file:", err);
  }
}

async function main() {
  await printUsersOver25();
}

main();
