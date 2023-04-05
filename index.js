#!/usr/bin/env node
import { ulid } from 'ulidx';

const cliFlag = process.argv[2];
const timeFlag = cliFlag === '-t' || cliFlag === '--time';

const id = ulid();
console.log(timeFlag ? id.slice(0, 10) : id);
