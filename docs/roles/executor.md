---
id: executor
title: Supercontract Executor
---

One key role of a Sirius Storage node is being a Supercontract [executor](executor.md). In Supercontracts, all contract files are stored on Sirius Storage, when a contract code is called upon for execution, the group of replicators who handles or stores the contract code becomes [executors](executor.md). The execution run through a consensus and in the end, the replicator who accepts to sign the execution will be the one assigned to execute the digital contract code.

**Here are the steps in contract execution:**

1. A [Drive owner](owner.md) uses the command line interface or the availabe tools to deploy [SC](../built_in_features/supercontract/overview.md).
2. Any Storage user that is interested in the [SC](../built_in_features/supercontract/overview.md) function execution publishes to Blockchain the `execute transaction`.
3. [Executors](executor.md) get this transaction and automatically start the [SC](../built_in_features/supercontract/overview.md) execution.
4. When the function is finished all [Drive](../built_in_features/drive/overview.md) participants sign the execution result.

Executors are motivated to perform [SCs](../built_in_features/supercontract/overview.md) by rewards. They get rewards if they sign a transaction with the [SC](../built_in_features/supercontract/overview.md) results. It provides the consensus and clarity of the results obtaining mechanism during the execution of [SC](../built_in_features/supercontract/overview.md).

## Storage Executor Responsibilities

Bases on previous steps any [executor](executor.md) has next obligations:

1. Execute the particular function of the [SC](../built_in_features/supercontract/overview.md)
2. Sign all obtained results from Blockchain that are connected with [SC](../built_in_features/supercontract/overview.md).
