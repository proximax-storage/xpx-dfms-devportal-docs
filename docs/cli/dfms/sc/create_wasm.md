---
id: create_wasm
title: Create a .wasm File
---

## Requirements

- Installed [Wabt](https://github.com/WebAssembly/wabt/tree/1.0.13)
- [SuperContract SDK](https://docs.rs/xpx-supercontracts-sdk/0.2.0/xpx_supercontracts_sdk/index.html)

The **_\*.wasm_** file is the build of some [SC](../../../built_in_features/supercontract/overview.md):

```shell
$ cargo build --target wasm32-unknown-unknown SCexample --release
```

This file can be executed by [VM](../../../built_in_features/supercontract/vm.md). But before it should be compiled to **_\*.wat_** and added to drive.
