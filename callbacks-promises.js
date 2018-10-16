//Sequence operations

/*Money transfer
 * 1. Validate sender
 * 2. Validate recipient
 * 3. Make transfer
 */

/********************************************************
 * SIMPLE EXAMPLE
 * 
function validateSender() {
    setTimeout(function() {
        console.log("Validating sender...");
    }, 3000);
}

function validateRecipient() {
    setTimeout(function() {
        console.log("Validating recipient...");
    }, 3000);
}

function makeTransfer(amount) {
    setTimeout(function() {
        console.log(`Sending money...${amount}$`);
    }, 1000);
}

validateSender();
validateRecipient();
makeTransfer(100);

*/

function validateSender() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let valid = false;
            console.log("Validating sender...");
            if (valid) {
                resolve("Sender is Valid");
            } else {
                reject("Sender validation failed");
            }
        }, 3000);
    });
}

function validateRecipient() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Validating recipient...");
            resolve("Recipient is Valid");
        }, 3000);
    });
}

function makeTransfer(amount) {
    setTimeout(function() {
        console.log(`Sending money...${amount}$`);
    }, 1000);
}

validateSender().then((result) => {
    console.log(result);
    return validateRecipient();
}).catch((err) => {
    console.log(err);
}).then((result) => {
    console.log(result);
    return makeTransfer(100);
});

/*
validateSender().then((result => {
            console.log(result);
            return validateRecipient();
        }).then((result) => {
            console.log(result);
            return makeTransfer();
        })
*/
/*
validateSender().then((result) => {
    console.log(result);
    return validateRecipient();
}).catch((err) => {
    console.log(err);
}).then((result) => {
    console.log(result);
    return makeTransfer(100);
}).catch((err) => {
    console.log(err);
});
*/