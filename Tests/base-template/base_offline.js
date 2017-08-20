async function runWebAssembly(folder, filename) {
    // Running the WebAssembly from wasm
    return await fetch(filename +'.wasm')
    .then(data => data.arrayBuffer())
    .then(buf => WebAssembly.compile(buf))
    .then(mod => WebAssembly.instantiate(mod))
    .then(ins => ins.exports.main());
};