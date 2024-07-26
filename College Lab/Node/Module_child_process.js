const child_process = require('child_process');

child_process.exec('java Hello', (err, stdout, stderr) => {
    if (err) {
        console.error(`exec error: ${err}`);
        return;
    }
    console.log(stdout);
    // console.error(stderr);
});