const crypto = require("crypto");

const pass = "pass";
const salt_temp = "salt";
const start = Date.now();

crypto.pbkdf2(
  (pasword = pass),
  (salt = salt_temp),
  (iterations = 1000000),
  (keylen = 128),
  (digest = "sha512"),
  (callback = () => {
    console.log("1:", Date.now() - start);
  })
);

crypto.pbkdf2(pass, salt_temp, 1000000, 128, "sha512", () => {
  console.log("2:", Date.now() - start);
});

crypto.pbkdf2(pass, salt_temp, 1000000, 128, "sha512", () => {
  console.log("3:", Date.now() - start);
});

crypto.pbkdf2(pass, salt_temp, 1000000, 128, "sha512", () => {
  console.log("4:", Date.now() - start);
});

crypto.pbkdf2(pass, salt_temp, 1000000, 128, "sha512", () => {
  console.log("5:", Date.now() - start);
});

crypto.pbkdf2(pass, salt_temp, 1000000, 128, "sha512", () => {
  console.log("6:", Date.now() - start);
});

crypto.pbkdf2(pass, salt_temp, 1000000, 128, "sha512", () => {
  console.log("7:", Date.now() - start);
});

crypto.pbkdf2(pass, salt_temp, 1000000, 128, "sha512", () => {
  console.log("8:", Date.now() - start);
});
