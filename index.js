#!/usr/bin/env node

(function () {
  const version = require(require.resolve("./package.json", {
    paths: [process.cwd()],
  })).version;
  process.stdout.write(version);
  const dontPrintNewline = process.argv[2] === "-n";
  process.stdout.end(dontPrintNewline ? "" : require("os").EOL);
})();
