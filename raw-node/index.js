const fs = require('fs');

run = async () => {
  const buf = fs.readFileSync('./add.wasm');
  const module = await WebAssembly.instantiate(new Uint8Array(buf));
  const lib = module.instance.exports;

  console.log(lib.add(2, 2));
};

run();
