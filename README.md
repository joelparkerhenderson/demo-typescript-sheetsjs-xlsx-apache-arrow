# Demo TypeScript & SheetJS XLSX & Apache Arrow

Demonstrate:

* [TypeScript](https://www.typescriptlang.org/) 
  
* [SheetJS XLSX](https://www.npmjs.com/package/xlsx) Microsoft Excel spreadsheet parser and
* [Apache Arrow](https://www.npmjs.com/package/apache-arrow) DataFrame utilities.

Run: 

```sh
pnpm self-update
pnpm init
pnpm install xlsx --save
pnpm install @apache-arrow/ts --save
```

Create file `demo.ts`:

```ts
#!/usr/bin/env ts-node

import * as XLSX from 'xlsx'

// Specify an Excel spreadsheet URL that contains a table
const url = "https://docs.sheetjs.com/PortfolioSummary.xls";

// Download the file and convert it to an array buffer
const file = await (await fetch(url)).arrayBuffer();

// Parse the file and extract the workbook
const workbook = XLSX.read(file);

// Print the sheet names
console.log(workbook.SheetNames);
```

Change to be executable:

```sh
chmod +x demo.ts
```

Run::

```sh
./demo.ts
```

Output:

```stdout
[ 'PortfolioSummary' ]
```
