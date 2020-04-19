const fs = require('fs');
const { fork } = require('child_process');

let logtype = {
    DEV: "DEV",
    SERVER: "SRV",
};

let serverInstance = newServerInstance();

serverInstance.on("stdio", (data) => {
    log(data, logtype.SERVER);
});

serverInstance.on("exit", () => {
   log("closing server instance", logtype.DEV);
});

let watcher = fs.watch(__dirname + "/build/server.js", (e, f) => {
    serverInstance.kill();
    serverInstance = newServerInstance();
});

process.on("exit", () => {
    console.log("closing server");
    serverInstance.kill();
    watcher.close();
});

function log(message, type) {
    switch (type) {
        case logtype.DEV:
            console.log(`dev:\t${message}`)
            break;
        case logtype.SERVER:
            console.log(`srv:\t${message}`)
    }
}

function newServerInstance() {
    log("starting server instance", logtype.DEV);
    return fork(__dirname + "/build/server");
}