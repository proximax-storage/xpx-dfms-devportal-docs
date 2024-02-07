---
id: lifecycle
title: Supercontract Lifecycle
sidebar_label: Lifecycle
---


The lifecycle begins with the deployment of a super contract by a drive owner, transforming the drive into a super contract drive. This involves uploading the contract code (WASM files) and possibly an autorun file for automatic triggers. Upon deployment, the contract is associated with a unique identifier. Executors, designated from replicators, then listen for triggers to execute the contract. The execution process can include data downloading, transaction releasing, and interaction with other drives. Super contracts provide proofs of execution (PoEx) to verify honest execution by executors. The lifecycle concludes when the contract's drive runs out of storage units or through manual closure, at which point any remaining funds are handled according to the contract's terms.

The lifecycle of Super Contracts involves several key steps from creation to closure::

## Preparation and Deployment:

- Drive Ordering: The Supercontract owner orders a drive of desired size.
- Deploy Transaction: The owner deploys the Supercontract to the drive by releasing a DeployTransaction. This process does not upload data to the drive directly but triggers the execution of an installer function (WASM file).

## Validation and Execution Setup:

- Verification: The system verifies the DeployTransaction and the integrity of the Supercontract code.
- Replicators as Executors: Replicators (nodes storing the drive) check the validity of the auto-launch file and execute the contract installer. Successful validation turns replicators into executors.

## Execution:

- Trigger Listening: Executors start listening for triggers to execute the Supercontract, which could be automated based on predefined conditions or initiated by a StartExecuteTransaction.
- Function Execution: Upon trigger, the specified function of the Supercontract is executed in the virtual machine environment.

## Interaction and Modification:

- Data Downloading and Transaction Releasing: During execution, Supercontracts can interact with the internet, download data, and release transactions.
- Drive Modification: Changes are applied to the drive, and transactions are issued as necessary.

## Proof of Execution (PoEx):

- Generation and Verification: Executors generate a Proof of Execution for the batch of executed calls, ensuring transparency and verification of honest execution.

## Reward Distribution:

- Executor Rewards: Executors receive rewards for executing the Supercontract, particularly for tasks like data downloading.

## Closure and Finalization:

- Drive Closure: The Supercontract is closed when the drive is closed due to exhaustion of storage units or other conditions specified in the contract.
- Fund Transfer: Remaining funds are transferred to the assignee mentioned in the DeployTransaction.

## Post-Closure Handling:

- Cancellation of Pending Transactions: If there are pending execution transactions at the time of closure, they are canceled, and payments are returned except for certain conditions outlined in the contract.


Throughout its lifecycle, a Supercontract undergoes various stages from deployment to execution, interaction, and finally closure, involving multiple blockchain entities and transactions.