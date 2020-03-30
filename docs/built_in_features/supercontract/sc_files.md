---
id: sc_files
title: SC files
---

There are two file types:

- **_\*.wasm_** - WebAssembly binary format. This file using only as the executable file for the [SC](../../built_in_features/supercontract/overview.md) execution by replicators. You cannot deploy this file.
- **_\*.wat_** - WebAssembly text format. It using only for uploading (and other FS transaction) to drive and for deploy a new [SC](../../built_in_features/supercontract/overview.md).

For more deatails see the [wabt repo](https://github.com/WebAssembly/wabt/tree/1.0.13).

## Guides

- [create a **_\*.wasm_**](../../cli/dfms/sc/create_wasm.md);
- [create a **_\*.wat_**](../../cli/dfms/sc/create_wat.md).
