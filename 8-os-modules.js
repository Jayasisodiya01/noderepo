// Built-in modules
const os = require('os')

// mehtods return the system uptime in seconds
const user = os.userInfo()
console.log(user);

console.log(`The system's uptime is ${os.uptime()}`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem : os.freemem(),
}
console.log(currentOS);