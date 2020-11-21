---
id: lifecycle
title: Drive Lifecycle
sidebar_label: Lifecycle
---
>**Note**\
You can see the [bcdocs](https://bcdocs.xpxsirius.io/docs/built-in-features/drive) for getting information about schemas of transactions described here.

## Create the drive

First of all, a user ([Storage Director Node](../../roles/owner.md)) needs to create a new multisig account that will be used as the [Drive](overview.md) account. To create the [Drive](overview.md), the [owner](../../roles/owner.md) must define the desired properties. After [Drive](overview.md) creation, it should transfer the sufficient amount [XPX](../../getting_started/economy.md#xpx) to the drive’s balance. These mosaics will be exchanged to [SO](../../getting_started/economy.md#so) by [Storage Replicator Nodes](../../roles/replicator.md). When the [Drive](overview.md) has been created it has [**NotStarted**](state.md#notstarted) state.
The [Drive](overview.md) preparation has no strict time bounds. It is just an initiation of the [Drive](overview.md) storage contract. Any [Storage Replicator Node](../../roles/replicator.md) can join it at any time, and their reward will be calculated by the formula (reference). For each new [Drive](overview.md) user must create a new multisig account.

> **The example**:
A user wants to create a new 1000MB (driveSize) [Drive](overview.md) for 12 months (duration). For this, he determines that he wants 4 replicas, but the [Drive](overview.md) can start when 3 [Storage Replicator Nodes](../../roles/replicator.md) joined. Also, he determines that 100% signatures (percentApprovers) are needed to accept the transaction. And every 1 month ([billing period](overview.md#billing-period)) 4000 [SO](../../getting_started/economy.md#so) (_billingPrice = replicas*driveSize_) will be distributed between [Storage Replicator Nodes](../../roles/replicator.md) by the formula.

## Join to the drive

Any user ([Storage Replicator Node](../../roles/replicator.md)) may agree with the [Drive](overview.md) offer and send the join transaction. With this transaction, the deposit ([SO](../../getting_started/economy.md#so); equals to [Drive](overview.md) size) is automatically debited from the [Storage Director Node](../../roles/owner.md). If there is not enough [SO](../../getting_started/economy.md#so), its join transaction will reject. This deposit will be blocked until the end of the [Drive](overview.md).

A group of nReliable [Storage Replicator Nodes](../../roles/replicator.md) provides a better quality of Cross Verification. Over time, any number of [Storage Replicator Nodes](../../roles/replicator.md) could join the [Drive](overview.md) contract. A new [Storage Replicator Node](../../roles/replicator.md) that joins when the [Drive](overview.md) has no file may move to the standby mode. In the general case, the time of joining the [Storage Replicator Node](../../roles/replicator.md) has to fill its memory with all files in the current state of the [Drive](overview.md). For this purpose, the [Storage Replicator Node](../../roles/replicator.md) can get the root hash of the [Drive](overview.md) from Blockchain and download files from another [Storage Replicator Node](../../roles/replicator.md) (it must put a deposit for each downloaded file). If some [Storage Replicator Node](../../roles/replicator.md) joins to [Drive](overview.md) later, its final reward will be calculated considering its time of joining. Replicator reward depends on the time of joining the [Drive](overview.md). For the earlier joining, the reward is greater.
When the minimal count of [Storage Replicator Nodes](../../roles/replicator.md) joined, the [Drive](overview.md) state changes to the [**Pending**](state.md#pending) and [billing period](overview.md#billing-period) starts.

## Billing period

One of the [Storage Replicator Nodes](../../roles/replicator.md) becomes the primary, according to [consensus](../../algorithms/consensus.md), and it creates the transaction for exchange of [XPX](../../getting_started/economy.md#xpx) to [SO](../../getting_started/economy.md#so) in the [Drive](overview.md) account. If the sum on balance is sufficient, [Drive](overview.md) contract starts up, the state of the [Drive](overview.md) is changed to [**InProgress**](state.md#inprogress), and the contract is going to start. [Storage Replicator Nodes](../../roles/replicator.md) obtain rewards every [billing period](overview.md#billing-period ) automatically. They also initiate a new [XPX](../../getting_started/economy.md#xpx) to [SO](../../getting_started/economy.md#so) exchange after the end of the [billing period](overview.md#billing-period ).

## Interacting with drive

During the execution of the [Drive](overview.md), the [Storage Director Node](../../roles/owner.md) can interact with it, like on other cloud storage. It means that it can do uploading, removing, renaming, moving, downloading files, and creating/removing directories. All commands create the new [Drive](overview.md) file system. Whenever an [Storage Director Node](../../roles/owner.md) makes any file operation, it changes a root hash. Blockchain is storing this hash and anyone can get an actual hash. So, all [Storage Replicator Nodes](../../roles/replicator.md) can easily monitor [Drive](overview.md) changes. \
The new [Drive](overview.md) file system transaction has the following properties:

- ***Drive key***
- The modifiable [drive's](overview.md) key.
- ***New root hash***
- The new hash of a local [Drive](overview.md).
- ***Old root hash***
- The hash of the local [Drive](overview.md) before changes.
- ***Add actions***\
New added files. It is an array of structures that consists of:
  - ***File size***
  - ***File hash***
- ***Remove actions*** \
Removed files. It is an array of structures that consists of:
  - ***File size***
  - ***File hash***

### Upload

When an [Storage Director Node](../../roles/owner.md) uploads new files, it fills the addActions array, where indicates the file hashes and sizes. Blockchain automatically transfers *fileSize \* replicas* [SM](../../getting_started/economy.md#sm) for each file from the [Storage Director Node](../../roles/owner.md) account to [Drive](overview.md) account. These tokens are rewards of [Storage Replicator Nodes](../../roles/replicator.md) and the [Storage Director Node](../../roles/owner.md) for file spreading (the [Storage Director Node](../../roles/owner.md) can also return part of its tokens). The transaction can be rejected in the following cases:

- if the [Storage Director Node](../../roles/owner.md) doesn't have enough money;
- Blockchain already contains the same hash;
- not enough space on the [Drive](overview.md).
Blockchain marks all [Storage Replicator Nodes](../../roles/replicator.md) that they don't put deposits for a new file.

After the download of the file, [Storage Replicator Nodes](../../roles/replicator.md) must send the transaction with hashes of downloaded files. Blockchain locks [SM](../../getting_started/economy.md#sm) equal to fileSize of each file until the file is removed. The deposit is used as a guarantee of saving. When the [Storage Replicator Node](../../roles/replicator.md) fails verification, Blockchain transfers the [Storage Replicator Node](../../roles/replicator.md)'s deposits to the [Drive](overview.md) account. If the [owner](../../roles/owner.md) lies and the size of the file is not equal to the size in the transaction, [Storage Replicator Nodes](../../roles/replicator.md) won't store this file (they must also delete the relevant receipts (see Fair Streaming protocol)), in this case, all [Storage Replicator Nodes](../../roles/replicator.md) will have the same files on the [Drive](overview.md) and they all can pass verification.

### Remove

When the [Storage Director Node](../../roles/owner.md) wants to remove files from the [Drive](overview.md), it transfers the transaction with hashes of removed files. All [Storage Replicator Nodes](../../roles/replicator.md) remove these files and Blockchain returns the deposits of [Storage Replicator Nodes](../../roles/replicator.md) for this file back (If [Storage Replicator Node](../../roles/replicator.md) didn't put a deposit for file, Blockchain will not return anything). Blockchain will reject the transaction if it contains file hashes of not existing files.

### Rename/Move/Copy/Mkdir

Only the root hash is changed, because these operations don't require the transfer of data (metadata is still sent, but it requires less space).

### Contract prolongation

The [Storage Director Node](../../roles/owner.md) can prolong a [Drive](overview.md) with increasing or decreasing its duration. For example, a user has a [Drive](overview.md) with a duration of 12 months, but the [Storage Director Node](../../roles/owner.md) decides to increase the duration to 36 months. In this case there is a need to make the transaction that contains the prolong 24 months.

### End drive

The [Drive](overview.md) contract is finished when the duration is over. Besides that, the [Drive](overview.md) can be terminated until the deadline. It can happen when:

- The [Storage Director Node](../../roles/owner.md) decides to terminate the [Drive](overview.md).
- The [Drive](overview.md) does not have money to start the next [billing period](overview.md#billing-period ) (in this case, the [Drive](overview.md) will be terminated by [Storage Replicator Nodes](../../roles/replicator.md)).
After the end of the [Drive](overview.md) duration, all [Storage Replicator Nodes](../../roles/replicator.md) return their deposits and get rewards (see [**Finished**](state.md#finished) state).
