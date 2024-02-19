---
id: state
title: Supercontract State
sidebar_label: State
---

Any [SC](overview.md) can have the following states:

## Pre-Deployment:

- Super Contracts are conceptualized and developed. This includes writing, testing, and finalizing the contract code.

## Deployment:

- Initiation: The Super Contract is deployed to the blockchain through a DeployTransaction. This marks the transition from a storage drive to a Super Contract drive.
- Validation: Upon receiving the DeployTransaction, Replicators (future Executors) validate the transaction and the Super Contract's auto-launch file if present.
- Successful Deployment: If validation passes, the Super Contract is considered successfully deployed. Replicators become Executors and are ready to execute the contract based on predefined triggers.
- Failed Deployment: If deployment fails (e.g., due to validation errors or lack of resources), the drive reverts to its standard storage mode.

## Execution Preparation:

- Executors prepare for execution by forming Execution Queues based on StartExecuteTransactions and checks for automatic executions.

## Execution:

- Batch Execution: Executors execute batches of calls as outlined in the Execution Queue.
- Result Agreement: Executors try to agree on the execution results and post EndBatchExecuteTransaction to record the outcomes on the blockchain.
- Late Execution: Executors who didn't participate in the consensus process continue executing calls and release EndBatchExecuteSingleTransaction upon completion.

## Synchronization:

- Executors not able or willing to execute calls can synchronize with the blockchain's current state by releasing DataModificationSingleApprovalTransaction or similar transactions for execution synchronization.

## Post-Execution:

- Successful Execution: The blockchain records successful execution outcomes, including any state changes or transactions issued by the Super Contract.
- Execution Failure: If execution fails due to runtime exceptions or other issues, the system handles these according to predefined rules, which may include transaction rollbacks or compensatory actions.

## Closure:

- The Super Contract is closed when the associated drive is closed, either due to lack of resources or as dictated by the contract's conditions. Remaining funds are transferred according to the contract's terms.

## Post-Closure:

- After closure, the Super Contract is no longer active, and its state on the blockchain is finalized.


These states reflect the comprehensive states of Super Contracts from inception through deployment, execution, and eventual closure, incorporating mechanisms for validation, execution, synchronization, and consensus among Executors.
