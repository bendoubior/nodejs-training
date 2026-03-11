const api = require('./slow-api');

async function main(){
    console.time("total time");
    await api.fakeApiCall(1);
    await api.fakeApiCall(2);
    await api.fakeApiCall(3);
    console.timeEnd("total time");

}

main();