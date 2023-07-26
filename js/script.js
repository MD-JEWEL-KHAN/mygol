let w;
function startWorker() {
// check worker available
    if(typeof Worker !== undefined) {

// if w worker is not already defined;
        if(typeof w == undefined) {
            w = new Worker("worker.js");
        }
// Listening for worker even/worker;

        }