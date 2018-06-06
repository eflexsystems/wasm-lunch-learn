const fs = require('fs');

run = async () => {
  const buf = fs.readFileSync('./target/wasm32-unknown-unknown/release/rust_node.wasm');
  const module = await WebAssembly.instantiate(new Uint8Array(buf));
  const lib = module.instance.exports;

  console.log(lib.add_one(2, 2));
};

run();
