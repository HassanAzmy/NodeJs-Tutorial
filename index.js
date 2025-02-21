import crypto from 'crypto';

//* Since we use the Sync version. It's run on the main thread which is blocking
const start = Date.now();
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");  // nearly 550s  - 650s
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");  // nearly 1200s - 1300s
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");  // nearly 1800s - 1900s
console.log("Hash: ", Date.now() - start);