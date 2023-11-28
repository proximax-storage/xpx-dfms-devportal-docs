---
id: overview
title: Drive Overview
sidebar_label: Overview
---

The [Drive](overview.md) in a nutshell is a representation of a client drive that handles file management system commands. A representational drive or directory where in the owner can manage its files that is subsequently pushed out to replicators. The main drive owner is a [multisignature account](https://bcdocs.xpxsirius.io/docs/built-in-features/multisig-account/) created by an [Storage Director Node](../../roles/owner.md). Only [Storage Replicator Nodes](../../roles/replicator.md) are signers of this account. It is required for consensus between [Storage Replicator Nodes](../../roles/replicator.md) on operations with the [Drive](overview.md).

## Properties

The [Drive](overview.md) has the following properties:

|Property|Description|
|---|---
|Owner|Every [Drive](overview.md) has a user who created it.
|Duration|This value contains the time of [Drive](overview.md) existing (counted in blocks, required). Until the end of the [Drive](overview.md), the [Storage Director Node](../../roles/owner.md) can change it (contract prolongation).
|Billing Period|Payout frequency to [Storage Replicator Nodes](../../roles/replicator.md) (counted in blocks, recommended 1 month). Note: Billing period must be a multiple of the *duration* (*duration* mod *billingPeriod* = 0)
|Billing Price|The reward for participation. Paid once in billingPeriod (in [SO](../../getting_started/economy.md#so); recommended _replicas*driveSize_) and is divided between all [Storage Replicator Nodes](../../roles/replicator.md).
|Drive Size|A [Drive](overview.md) space in MB (required).
|Replicas|The count of [Drive](overview.md) copies (required); Amount of [Storage Replicator Nodes](../../roles/replicator.md) is not limited. Any [Storage Replicator Nodes](../../roles/replicator.md) can join to [Drive](overview.md) even if it has the required amount of [Storage Replicator Nodes](../../roles/replicator.md).  
|Min replicators|The minimum count of [Storage Replicator Nodes](../../roles/replicator.md) for starting to execute [Drive](overview.md) (recommended to be equal to replicas);
|Percent Approvers|The percentage of signatures for accepting any transaction (recommended 67);
