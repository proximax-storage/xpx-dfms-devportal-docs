---
id: owner
title: Storage Director Node
---

The **Storage Director Node**, or **Drive Owner**, is a role that initiates files storage in the network. It is essentially a client that accepts files and pushes them to [Replicators](replicator.md#replicator-responsibilities). When initiating a [Drive](../built_in_features/drive/overview.md), a virtual drive is created for the customers to manage their files and directories. Before creating a new Drive, the Owner must prepare and create a new Drive account.

In an autonomous storage network, customers usually access their acquired storage via an easy to use interface. The inner workings of this interface is programmatically designed to accept files or even directories from the customer. The role of the Drive Owner is to provide an easy way for their customers to access the storage they provided.

## Price and Token Economy

Drive Owners as storage providers accept payments from the Drive customers. These payments, in turn, are used to pay for Replicators on the network. A Drive must have enough XPX before it can push files to Replicators. Exchange protocol kicks in that will convert XPX to [Service Units](../getting_started/economy.md#sirius-internal-digial-assets-mosaics), which will then be accepted by Replicators.

## Drive Owner Responsibilities

* The Owner creates a [Drive](../built_in_features/drive/overview.md) account and prepares it with desired properties. When the Drive is prepared, the Owner must transfer [XPX](../getting_started/economy.md#xpx) to the Drive balance that must be enough to pay for at least one billing period.

* The Owner can upload, remove, rename, move, and download files and directories to and from the Drive. Every action has its price and must be paid by the Owner.

* The Owner makes payments to the Drive account. When there is not enough XPX on the Drive balance to pay for the next billing period, the Drive will be automatically closed.
