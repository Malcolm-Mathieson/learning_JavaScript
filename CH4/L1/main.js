export function createMessage(phoneNumber, message) {
    const object = {
        phoneNumber: phoneNumber,
        message: message,
        messageLength : message.length,
    };
    return object;
}
