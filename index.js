import crypto from 'crypto';

//* Since we use the Async version. It's run parallel thus taking the same time
const start = Date.now();
const MAX_CALLS = 12;
for(let i = 0; i < MAX_CALLS; i ++) {
   crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
      console.log(`Hash: ${i + 1}`, Date.now() - start);
   });
}