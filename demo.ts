#!/usr/bin/env ts-node

import { readFileSync } from 'fs';
import { tableFromIPC } from 'apache-arrow';

// const arrow = readFileSync('demo.arrow');
// const table = tableFromIPC(arrow);

const arrow = readFileSync('demo.parquet');
const table = tableFromIPC(arrow);

console.table(table.toArray());
