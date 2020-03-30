---
id: create_wat
title: Create a .wat File
---

## Requirements

- Installed [Wabt](https://github.com/WebAssembly/wabt/tree/1.0.13);
- A new **_\*.wasm_** file

When you have the generated **_\*.wasm_** file you should compile it to **_\*.wat_** before adding to drive. For it runs in the terminal command from wabt:

```shell
$ wasm2wat SCexample.wasm -o SCexample.wat
```

After that, you can add it to drive, deploy it and start the execution.
