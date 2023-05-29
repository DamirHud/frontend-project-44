#!/usr/bin/env node
import initName from '../src/cli.js';

const name = initName();

console.log(`Hello, ${name}`);
