---
id: vm
title: DFMS WasmVM
sidebar_label: WasmVM
---

Virtual Machine ([VM](vm.md)) based on [Perlin Life WasmVM](https://github.com/perlin-network/life). It provide correct WebAssebly execution with [GAS](../../getting_started/economy.md#supercontract-units-gas) spent calculations.

[WasmVM](vm.md) initializes whenever it gets a request from Blockchain to execute a particular [SC](overview.md) function. For [SC](overview.md) execution indicates the count of [GAS](../../getting_started/economy.md#supercontract-units-gas) units. If during execution the number of [GAS](../../getting_started/economy.md#supercontract-units-gas) is not enough, the [SC](overview.md) will be terminated. In case spent units will not return and [executors](../../roles/executor.md) will not get the reward.

## Rules for calculations GAS

Currently, the calculation formula is linear:

`1 GAS Unit = 1 Wasm instruction`

Also, it should notify that the write to memory operation is paid while the read from memory operation is free. Below the calculation formula for it:

`1 byte = 1 GAS Unit`

For example, if it  writes 10Kbyte of data the cost will be at least 10240 [GAS](../../getting_started/economy.md#supercontract-units-gas) units.

## Restrictions

Currently, [WasmVM](vm.md) has no strict restriction. The execution of [SC](overview.md) is limited only by the count of [GAS](../../getting_started/economy.md#supercontract-units-gas), which is indicated as an input parameter.

## Interacting with the external world

[WasmVM](vm.md) is an isolated environment from the “external world”. That means there is no direct access to [VM](vm.md) from out and vice versa. Such conditions provide guaranteed execution security, data saving, reliability, and fail-safety. [SC](overview.md) execution speed depends on physical machine resources where [DFMS](../../getting_started/what_is.md) is running.
For interaction with the “external world” the mechanism of “external functions” was introduced. This means, using the [SuperContract SDK](https://docs.rs/xpx-supercontracts-sdk/0.2.0/xpx_supercontracts_sdk/index.html), you can use access to the built-in functions in [WasmVM](vm.md), which allows you to access Blockchain, HTTP requests, etc.
This provides a wide range for the flexible development of [SC](overview.md), including quite complex Oracles. All available functions, documentation, and examples, can be found in [SuperContract SDK](https://docs.rs/xpx-supercontracts-sdk/0.2.0/xpx_supercontracts_sdk/index.html).

## Versions

The [WasmVM](vm.md) has a set of versions. It allows ensuring that [SC](overview.md) assembled for a specific version of the [VM](vm.md) is guaranteed to run on the same version of [VM](vm.md) (versions are part of the [DFMS](../../getting_started/what_is.md)). Because the [WasmVM](vm.md) must be safe and has the same execution results for different [executors](../../roles/executor.md), the versions can be incompatible.
It is worth noting that the version of [WasmVM](vm.md) automatically writes in the Blockchain, and is taken from the current version of the [DFMS](../../getting_started/what_is.md) [WasmVM](vm.md) of the [SC](overview.md) [owner](../../roles/owner.md).

## Results of SC execution

All results should be recorded in a file, there is the [`save_result`](https://docs.rs/xpx-supercontracts-sdk/0.2.0/xpx_supercontracts_sdk/storage/fn.save_result.html) for this. After [SC](overview.md) finishes the [owner](../../roles/owner.md) can get files for a particular execute transaction.

## Operations for sending transactions to Blockchain

Sending transactions to Blockchain doesn’t occur straight away. When transactions are sent from [SC](overview.md), it is collected in **_Transactions Pull_**. To send transactions immediately to **_Transactions Pull_**, you should call the external function [WasmVM](vm.md) - [flush](https://docs.rs/xpx-supercontracts-sdk/0.2.0/xpx_supercontracts_sdk/transactions/fn.flush.html).

Also, **_Transactions Pull_** transactions will be sent automatically after completion of the [SC](overview.md) function.
