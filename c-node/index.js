const wasm = require("webassembly");

const run = async () => {
  const module = await wasm.load("program.wasm");
  const lib = module.exports;

  console.log(lib.add(2, 2));
};

run();
