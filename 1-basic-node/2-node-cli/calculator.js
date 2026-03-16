const { argv } = require('node:process');

function toNumber(value){
    if(isNaN(value)){
        throw new Error("Passed value is not a number");
    }
    return parseFloat(value);
}

function calculat(action, num1, num2){
    if (action == "add") {
        console.log("Result: %o",num1+num2);
    } else if (action == "subtract") {
        console.log("Result: %o",num1-num2);
    } else if (action == "multiply") {
        console.log("Result: %o",num1*num2);
    } else if (action == "divide") {
        if (num2 == 0){
            throw new Error("cannot divide by zero");
        }
        console.log("Result: %o",num1/num2);
    }
    else {
        console.log("not support this action");
    }
}

function main(){
    if (argv.length != 5){
        throw new Error("you must pass exectly 3 paramter");
    }

    try {
        let action = argv[2];
        let num1 = toNumber(argv[3]);
        let num2 = toNumber(argv[4]);
        calculat(action, num1, num2);
    }
    catch (error){
        console.log("An error: ", error.message);
    }
}

main();