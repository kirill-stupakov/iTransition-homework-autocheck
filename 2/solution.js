import fs from "fs";
import sha3 from "js-sha3";

let hashes = [];

for (let i = 0; i < 256; i++) {
  const fileName = `data/file_${(i < 16 ? "0" : "") + i.toString(16)}.data`;
  const fileBuffer = fs.readFileSync(fileName);
  const hashSum = sha3.sha3_256(fileBuffer);
  hashes.push(hashSum);
}

hashes.sort();

const str = hashes.join("") + "kirill.stupakov.0@gmail.com";
const ans = sha3.sha3_256(str);

console.log(ans);
