const fs = require('fs');

run = async () => {
  const buf = fs.readFileSync('./addTwo.wasm');
  const module = await WebAssembly.instantiate(new Uint8Array(buf));
  const lib = module.instance.exports;

  console.log(lib.addTwo(2, 2));
  console.log(lib.addTwo.toString());
};

run();
