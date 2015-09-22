#! /usr/bin/env node
// STACK
var shell    = require('shelljs')

console.log('... it might take some seconds - feel free to contribute to make it faster :-)')
shell.exec('find / -type d -name "node_modules" 2>/dev/null | xargs -I{} find {} -type l -maxdepth 1 | xargs ls -l')
