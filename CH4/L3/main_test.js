import { addID } from "./main.js";

let campaignRecord = {
    campaignName: "Welcome",
    senderName: "Elsa",
    messageCount: 100,
}
//the commented out section below is optional because campaignObject is passed by reference into the function which means that the object is actually changed within the function
/*campaignRecord = */addID(campaignRecord);
console.log(campaignRecord);
