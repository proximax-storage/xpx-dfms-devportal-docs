---
id: executor
title: Executor
---

## SuperContract Executors

The [executor](executor.md) is a [DFMS](../getting_started/what_is.md) role, that is responsible for [SC](../built_in_features/supercontract/overview.md) execution. In the current version of the [DFMS](../getting_started/what_is.md) all [Drive](../built_in_features/drive/overview.md) participants are [executors](executor.md). It means that all replicators become executors during an [SC](../built_in_features/supercontract/overview.md) executing.

Technically there are following steps:

1. An [owner](owner.md) deploys [SC](../built_in_features/supercontract/overview.md).
2. Any node that is interested in the [SC](../built_in_features/supercontract/overview.md) function execution publishes to Blockchain the execute transaction.
3. [Executors](executor.md) get this transaction and automatically start the [SC](../built_in_features/supercontract/overview.md) execution.
4. When the function is finished all [Drive](../built_in_features/drive/overview.md) participants sign the execution result.

Executors are motivated to perform [SCs](../built_in_features/supercontract/overview.md) by rewards. They get rewards if they sign a transaction with the [SC](../built_in_features/supercontract/overview.md) results. It provides the consensus and clarity of the results obtaining mechanism during the execution of [SC](../built_in_features/supercontract/overview.md).

## What does the owner do

Bases on previous steps any [executor](executor.md) has next obligations:

1. execute the particular function of the [SC](../built_in_features/supercontract/overview.md);
2. sign all obtained results from Blockchain that are connected with [SC](../built_in_features/supercontract/overview.md).
