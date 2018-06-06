const wasm = require("webassembly");

const run = async () => {
  const module = await wasm.load("program.wasm");
  console.log("1 + 2 = " + module.exports.add(1, 2));
};

run();
