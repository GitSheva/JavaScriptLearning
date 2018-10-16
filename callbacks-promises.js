//Sequence operations

/*Money transfer
 * 1. Validate sender
 * 2. Validate recipient
 * 3. Make transfer
 */
/*
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
makeTransfer(100);*/



let sender = {
    name:"Vasya",
    balance:5000
};

let recipient = {
    name:"Petya",
    balance:2000
};


function validateSender(sender) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let valid = true;
            console.log("Validating sender...");
            if (valid) {
                resolve(sender);
            } else {
                reject("Sender validation failed");
            }
        }, 3000);
    });
}

function validateRecipient(recipient) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let valid = true;
            console.log("Validating recipient...");
            if (valid) {
                resolve(recipient);
            } else {
                reject("Recipient validation failed");
            }

        }, 3000);
    });
}

function makeTransfer(amount, sender, recipient) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
                let valid = true;
                sender.balance -= amount;
                recipient.balance += amount;
                console.log(`Sending money... ${amount}$ from ${sender.name} to ${recipient.name}`);

                if(valid){
                    resolve("Operation completed.");
                } else {
                    reject("Error sending money.");
                }
            }, 1000);
    });
}

console.log(`Sender balance ${sender.balance}.`);
console.log(`Recipient balance ${recipient.balance}.`);

validateSender(sender).then((validatedSender) => {
    console.log(`Sender ${validatedSender.name} has been validated.`);
    return validateRecipient(recipient);
}).then((validatedRecipient) => {
    console.log(`Recipient ${validatedRecipient.name} has been validated.`);
    return makeTransfer(100, sender, recipient);
}).then((result) => {
    console.log(result);
    console.log(`Sender new balance ${sender.balance}.`);
    console.log(`Recipient new balance ${recipient.balance}.`);
}).catch((err) => {
    console.log(err);
});;

console.log("Execution continue...");