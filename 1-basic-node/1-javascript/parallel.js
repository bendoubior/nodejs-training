const api = require('./slow-api');

async function main(){
    console.time("total time");
    const p1 = api.fakeApiCall(1);
    const p2 = api.fakeApiCall(2);
    const p3 = api.fakeApiCall(3);
    await Promise.all([p1,p2,p3]);
    console.timeEnd("total time");

}

main();