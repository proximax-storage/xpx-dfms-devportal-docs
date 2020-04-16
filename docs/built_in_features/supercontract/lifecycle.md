---
id: lifecycle
title: Supercontract Lifecycle
sidebar_label: Lifecycle
---

Any [SC](overview.md) lifecycle contains the next steps:

1. Preparation;
2. The main steps of execution;
3. Obtaining results and rewarding.
4. End of [SC](overview.md)

## Preparation

To work with any [SC](overview.md), you need a [Drive](../drive/overview.md). When it will be done the [owner](../../roles/owner.md) must have some [SC](overview.md) file with **_\*.wat_** extension that will be uploaded to the [Drive](../drive/overview.md). When the file is uploaded on a [Drive](../drive/overview.md) and downloaded by [replicators](../../roles/replicator.md) the [client](../../roles/owner.md) can deploy it.

## The main steps of execution

### Deploy

[SC](overview.md) should be deployed before it can be executed. The [client](../../roles/owner.md) should make a new `deploy transaction` that notifies Blockchain and [executors](../../roles/executor.md) about the new [SC](overview.md). Further, this [SC](overview.md) will be compiled from the **_\*.wat_** file to **_\*.wasm_** file and can be invoked and executed by [executors](../../roles/executor.md)' [VM](vm.md).

### Execution

> **Note**\
In current realization, all [SC](overview.md) operations are sent only from the [SC](overview.md) account.

When the file becomes the new [SC](overview.md), the [client](../../roles/owner.md) can start its execution. The [client](../../roles/owner.md) should indicate what function should be executed and approximately count the [GAS](../../getting_started/economy.md#supercontract-units-gas) for this operation. [GAS](../../getting_started/economy.md#supercontract-units-gas) is a fee for executing the [SC](overview.md). If the function requires some parameters, the [owner](../../roles/owner.md) must pass them. In case there is not enough mosaics during the [SC](overview.md) execution,the [SC](overview.md) will be terminated with the corresponding error.

### Identification

In the moment when any DFMS user starts the execution of some [SC](overview.md) functions, a new operation's ID is  assigned for all operations. This ID is used by the user to get information about execution and result of the execution. In other words, this ID joins all operations from one execution in one group.

### More details about the SC execution

One of the important instruments for developing [SC](overview.md) is the availability of [init](https://docs.rs/xpx-supercontracts-sdk/0.2.0/xpx_supercontracts_sdk/utils/fn.init.html) function and the primary [constructor](https://docs.rs/xpx-supercontracts-sdk/0.2.0/xpx_supercontracts_sdk/utils/fn.constructor.html) of the [SC](overview.md) execution.
For example, if there is a necessity to call a set of functions before calling a particular function, then they can be called in an external [init](https://docs.rs/xpx-supercontracts-sdk/0.2.0/xpx_supercontracts_sdk/utils/fn.init.html) function. It allows initialization once for the current execution process. This is convenient for initializing the [SC](overview.md) function for the first time. Be careful because this [init](https://docs.rs/xpx-supercontracts-sdk/0.2.0/xpx_supercontracts_sdk/utils/fn.init.html) function will be called every `execute transaction`, but once in the frame of one the `execute transaction`.

Another important function is the [constructor](https://docs.rs/xpx-supercontracts-sdk/0.2.0/xpx_supercontracts_sdk/utils/fn.constructor.html). If an external function calls the [constructor](https://docs.rs/xpx-supercontracts-sdk/0.2.0/xpx_supercontracts_sdk/utils/fn.constructor.html) function, which includes the necessary set of functions, then [constructor](https://docs.rs/xpx-supercontracts-sdk/0.2.0/xpx_supercontracts_sdk/utils/fn.constructor.html) will be called once in the life of the [SC](overview.md). In other words, this function will be called once while this [SC](overview.md) exists for the current [Drive](../drive/overview.md). Other invocations will be ignored. Examples of using are mosaic creation, first [SC](overview.md) initialization and configuration, that must be done once during [SC](overview.md) life.

## Results obtaining and rewarding

When [executors](../../roles/executor.md) finish running func they have to find an overall result. To do so, they should sign the result after the end of execution. If the [executor](../../roles/executor.md) result doesn't match with the result of the main [executor](../../roles/executor.md) (see [consensus](../../algorithms/consensus.md)), it doesn't sign the `end transaction`. In case when some [executor](../../roles/executor.md) doesn't have the execution result it can be downloaded from another [executor](../../roles/executor.md) (this is a paid operation).

After collecting enough signatures all [Drive](../drive/overview.md) participants get the reward for the completed work.

Anyone who is interested in the execution results of [SC](overview.md) func can get a list of files by the `execute transaction` hash which started [SC](overview.md) execution. The results of executions are available as files on the [Drive](../drive/overview.md) (supercontracts folder).

## End of SC

[SC](overview.md) exists as long as [Drive](../drive/overview.md) exists. The [SC](overview.md) executing will be impossible if the [Drive](../drive/overview.md) is unavailable for any reason.
The [Drive](../drive/overview.md) [owner](../../roles/owner.md) can deactivate any [SC](overview.md) any time if there are some reasons for it. After deactivation, the execution of [SC](overview.md) will be impossible.
