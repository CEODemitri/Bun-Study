const x = 4;
const y = 4;
console.log(x + y);
// run: bun run whatsBun.js

// two most popular js engines: google v8 and apple javascriptcore 
// to access the outside world, RUNTIMES are needed

// BROWSERS
// ship with js runtimes  
// implement a set of Web Specific APIs that are exposed via the window object

// NODE.js
// can be run in non-browser environments like servers.
// implement a set of Node specific globals plus built in modules for OS-level tasks
// CommonJS-based module system

// DESIGN GOALS
// speed, ts & jsx support, esm & commonjs compatible, web standard apis, node.js compability
