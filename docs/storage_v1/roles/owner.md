---
id: owner
title: Storage Director Node
---

The [Storage Director Node](owner.md) is a [DFMS](../getting_started/what_is.md) role that initiates files storage in the network. It is essentially the client that accepts the files and pushes them to replicators. When initiating a drive, a virtual drive is created for the customers to manage their files and directories. To create a new [Drive](../built_in_features/drive/overview.md), the [owner](owner.md) should prepare and create a new [Drive](../built_in_features/drive/overview.md) account.

In an autonomous storage network, customers usually access their acquired storage via an easy to use interface. The inner workings of this interface is programmatically designed to accept files or even directories from the customer. The role of the drive owner is to provide an easy way for their customers to access the storage they provided.

## Price and Token Economy
Drive Owner as storage providers accepts the payment from customers which in turn they'll use to pay for replicators on the network. Drive will need to have XPX before it can push files to replicators. Exchange protocol kicks in that will convert XPX to Service Units which will then be accepted by the replicators that participates on the contract.

## Drive Owner Responsibilities

* The [Storage Director Node](owner.md) creates a [Drive](../built_in_features/drive/overview.md) account and prepares it with desired properties. When the [Drive](../built_in_features/drive/overview.md) is prepared, the [owner](owner.md) must transfer [XPX](../getting_started/economy.md#xpx) to [Drive](../built_in_features/drive/overview.md) balance that equals at least one billing period.

* The [Storage Director Node](owner.md) can upload, remove, rename, move, download files and directories in [Drive](../built_in_features/drive/overview.md). Every action has its price and must be paid by the [owner](owner.md).

* The [Storage Director Node](owner.md) can initiate verification of storing files by [Storage Replicator Node](../roles/replicator.md) (the [Challenge](../built_in_features/challenge.md)). Each [owner](owner.md) wants to save its file safe and secure.

* The [Storage Director Node](owner.md) makes payments to [Storage Replicator Nodes](../roles/replicator.md). When the [Storage Director Node](owner.md) doesn't pay for the next billing period [Storage Replicator Nodes](../roles/replicator.md) can terminate the [Drive](../built_in_features/drive/overview.md).
