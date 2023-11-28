---
id: sc_flow_example
title: Build and Deploy SuperContracts
sidebar_label: Build and Deploy SuperContracts
---

For all existed source code of [SCs](../../../built_in_features/supercontract/overview.md), it's the same flow.

For example, we have ICO contract:

```shell
$ git clone https://github.com/proximax-storage/rust-xpx-supercontracts-examples.git
$ cd rust-xpx-supercontracts-examples/ico
```

To build it you should have to install [Rust](https://www.rust-lang.org/learn/get-started). And install rust target `wasm32-unknown-unknown`.

```shell
$ cargo build --target wasm32-unknown-unknown --release
```
Then you need to convert wasm to wat. For that, it should be installed [`wabt` tool](https://github.com/WebAssembly/wabt):

```shell
$ wasm2wat target/wasm32-unknown-unknown/release/xpx_supercontracts_example_ico.wasm -o ~/xpx_supercontracts_example_ico.wat
```

So, you successfully receive [SC](../../../built_in_features/supercontract/overview.md) `xpx_supercontracts_example_ico.wat` file.

Now it's time to deploy it. For that, let's assume you have already created DriveContract in DFMS.

```shell
$ dfms-client drive add --flush <DriveID> ~/xpx_supercontracts_example_ico.wat xpx_supercontracts_example_ico.wat
```

Just for example:

```shell
$ dfms-client drive add --flush baegqajaiaqjcbe3uqhtyy65b2jm4motrdaejlgpmmvwwm5evacxr43uxihr27jww ~/xpx_supercontracts_example_ico.wat xpx_supercontracts_example_ico.wat
```

So we add [SC](../../../built_in_features/supercontract/overview.md) `wat` file to Drive.
And then Deploy it:

```shell
$ dfms-client sc deploy <DriveID> <DriveWatFile>
```

Just for example:

```shell
$ dfms-client sc deploy baegqajaiaqjcbe3uqhtyy65b2jm4motrdaejlgpmmvwwm5evacxr43uxihr27jww xpx_supercontracts_example_ico.wat
```

And we will receive as result SuperContractID.

Great, [SC](../../../built_in_features/supercontract/overview.md) is deployed!

```shell
$ dfms-client sc exec <ScID> <Gas> <ScFunctionName>
```

Where `ScID` - [SC](../../../built_in_features/supercontract/overview.md) ID from Deploy result.

For that concrete [SC](../../../built_in_features/supercontract/overview.md) function, we should upload `ico_init.csv` file to drive. Let's do it:

```shell
$ dfms-client drive mkdir <DriveID> /supercontracts/
$ dfms-client drive add <DriveID> ~/ico_init.csv /supercontracts/ico_init.csv
```

Just for example:

```shell
$ dfms-client drive mkdir baegqajaiaqjcbe3uqhtyy65b2jm4motrdaejlgpmmvwwm5evacxr43uxihr27jww /supercontracts/
$ dfms-client drive add baegqajaiaqjcbe3uqhtyy65b2jm4motrdaejlgpmmvwwm5evacxr43uxihr27jww ~/ico_init.csv /supercontracts/ico_init.csv
```

And you're ready to execute ICO init function.

Just for example:

```shell
$ dfms-client sc exec baegqajaiaqjcaraonfmrnw4fmeuml37jvbcttdajk5nmoq5gl453le665ulkhuvi 100000000 ico_init
```

Here we go. It just work.
