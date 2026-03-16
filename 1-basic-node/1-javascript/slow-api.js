function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fakeApiCall(id){
    console.log("- Call request %o",id);
    await sleep(3000);
    console.log("- Wait for %o to finish",id);
}

module.exports = { fakeApiCall };