export function createMessage(phoneNumber, message) {
    const object = {
        phoneNumber: phoneNumber,
        message: message,
        messageLength : message.length,
    };
    return object;
}

let message = createMessage(148255510981, "Thanks for signing up");
console.log(message);

message = createMessage(148255510982, "Love to have you aboard!");
console.log(message);

message = createMessage(148255510983, "We're so excited to have you");
console.log(message);
