#!/usr/bin/env node

import { greetings } from "../src/cli.js";


const greetingMessage = greetings();
console.log(greetingMessage);
